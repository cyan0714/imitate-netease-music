<template>
  <div id="profile">
    <div class="portrait">
      <div v-if="!$store.state.loginStatus.hasOwnProperty('id')">
        <div class="unLogin">
          <span class="icon"></span>
        </div>
        <router-link to="/login" replace>
          <span class="immidia">立即登录</span>
        </router-link>
        <span class="arrow"></span>
      </div>
      <div v-else>
        <img :src="$store.state.loginStatus.avatarUrl" alt="" />
        <span class="nickName">{{ $store.state.loginStatus.nickname }}</span>
      </div>
    </div>
    <my-love class="mylove"></my-love>
    <my-count :mycount="mycount" class="mycount"></my-count>
    <my-collection
      :subPlaylistCount="subPlaylistCount"
      :mycount="mycount"
      class="mycount"
    ></my-collection>
  </div>
</template>

<script>
import { getListCount } from "@/network/userlist/playlist";
import MyLove from "./childComps/MyLove.vue";
import MyCount from "./childComps/MyCount.vue";
import MyCollection from "./childComps/MyCollection.vue";
export default {
  name: "ProFile",
  components: {
    MyLove,
    MyCount,
    MyCollection,
  },
  data() {
    return {
      mycount: 0,
      subPlaylistCount: 0,
    };
  },

  activated() {
    getListCount(this.$store.state.cookie).then((res) => {
      //创建歌单数量
      this.mycount = res.createdPlaylistCount - 1;
      //收藏歌单数量
      this.subPlaylistCount = res.subPlaylistCount;
    });
  },
};
</script>

<style scoped lang="less">
@font-face {
  font-family: "icomoon";
  src: url("../../assets/fonts/icomoon.eot?2lm2ws");
  src: url("../../assets/fonts/icomoon.eot?2lm2ws#iefix") format("embedded-opentype"),
    url("../../assets/fonts/icomoon.ttf?2lm2ws") format("truetype"),
    url("../../assets/fonts/icomoon.woff?2lm2ws") format("woff"),
    url("../../assets/fonts/icomoon.svg?2lm2ws#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
#profile {
  width: 90vw;
  height: 80vh;
  margin: 5vh 5vw 15vh;
  .mylove {
    margin-top: 3vh;
  }
  .mycount {
    // margin-top: 5vh;
  }
  .portrait {
    position: relative;
    router-link {
      color: red;
    }
    .icon {
      font-family: "icomoon";
      font-size: 10vw;
    }
    .arrow {
      position: absolute;
      top: 2.5vw;
      left: 36vw;
      font-family: "icomoon";
      font-size: 28px;
    }
    img,
    .unLogin {
      display: inline-block;
      width: 14vw;
      height: 14vw;
      border-radius: 50%;
      border: 2px solid #fff;
      text-align: center;
      line-height: 12vw;
      vertical-align: middle;
    }
    .nickName,
    .immidia {
      margin-left: 3vw;
      font-family: "宋体";
    }
  }
}

label {
  display: block;
}
</style>
