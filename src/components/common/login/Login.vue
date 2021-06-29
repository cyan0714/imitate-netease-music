<template>
  <div id="login">
    <el-row type="flex" justify="center" :gutter="0">
      <el-col :span="8">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <el-row :gutter="0" type="flex" justify="center">
      <el-col :span="22.5">
        <el-card shadow="always" style="border-radius:24px;width:82vw">
          <h2 style="text-align:center">欢迎登陆</h2>
          <el-divider></el-divider>
          <el-form
            :model="ValidateForm"
            ref="telephoneValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="手机号"
              prop="telephone"
              :rules="[{ required: true, message: '手机号不能为空' }]"
            >
              <el-input
                placeholder="请输入手机号"
                type="number"
                v-model.number="ValidateForm.telephone"
              ></el-input>
            </el-form-item>

            <el-form-item
              label="密码"
              prop="pwd"
              :rules="[{ required: true, message: '密码不能为空' }]"
            >
              <el-input
                placeholder="请输入密码"
                v-model="ValidateForm.pwd"
                show-password
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm()">提交</el-button>
              <el-button @click="resetForm('telephoneValidateForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { login, getLoginStatus, getLikelist } from "@/network/login.js";
import { getListMessage } from "@/network/userlist/playlist";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      ValidateForm: {
        telephone: "",
        pwd: "",
      },
      cookies: null,
      value: "我是login组件",
      loginStatus: {},
      listMessage: [],
      token: "",
    };
  },
  methods: {
    submitForm() {
      //用户登录
      login(this.ValidateForm.telephone, this.ValidateForm.pwd).then((res) => {
        if (res.code === 200) {
          this.token = res.token;
          console.log("登录成功");
          alert("登录成功");
          this.cookies = encodeURIComponent(res.cookie);
          this.$store.commit("getCookie", this.cookies);
          this.$router.push("/profile");
        } else {
          alert("密码错误");
        }
      });
      setTimeout(() => {
        //获取登录状态（包括用户 id,头像,背景图片,昵称等）
        getLoginStatus(this.cookies).then((res) => {
          const data = res.data;
          this.loginStatus.id = data.account.id;
          this.loginStatus.avatarUrl = data.profile.avatarUrl;
          this.loginStatus.backgroundUrl = data.profile.backgroundUrl;
          this.loginStatus.nickname = data.profile.nickname;
          this.$store.commit("getLoginStatus", this.loginStatus);
          //一旦获得用户 id 值，就发送获取相关歌单信息请求
          if (this.$store.state.loginStatus.hasOwnProperty("id")) {
            //获取我喜欢音乐里每一首歌曲 id
            getLikelist(
              this.$store.state.loginStatus.id,
              this.token,
              this.$store.state.cookie
            ).then((res) => {
              //获取我喜欢的音乐列表(id 数组)
              const ids = res.ids;
              this.$store.commit("getLikelist", ids);
            });
            //获取每个歌单的图片、id、歌单名字(如: ...喜欢的音乐)、歌曲的数量
            getListMessage(this.$store.state.loginStatus.id).then((res) => {
              const songlistMesArr = [];
              res.playlist.forEach((item) => {
                const obj = {};
                obj.coverImgUrl = item.coverImgUrl;
                obj.id = item.id;
                obj.name = item.name;
                obj.trackCount = item.trackCount;
                songlistMesArr.push(obj);
              });
              this.listMessage = songlistMesArr;
              this.$store.commit("getListMessage", this.listMessage);
            });
          }
        });
      }, 1000);
    },
    resetForm(formName) {
      // this.$refs[formName].resetFields();
      this.ValidateForm.telephone = "";
      this.ValidateForm.pwd = "";
    },
  },
};
</script>

<style scoped lang="less">
.grid-content {
  min-height: 16vh;
}
</style>
