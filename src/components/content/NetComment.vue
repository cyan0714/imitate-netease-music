<template>
  <div class="hotcomment">
    <dl v-for="(item, index) in $store.state.comment">
      <div class="avatarnn">
        <img :src="item.user.avatarUrl" alt="" />
        <dt>{{ item.user.nickname }}</dt>
      </div>
      <dd>{{ item.content }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "NetComment",
  data() {
    return {
      isShowState: false,
    };
  },
  activated() {
    // 隐藏下方 tabbar
    this.$store.commit("isShowTabBar");
    this.$store.commit("isShowState", this.isShowState);
  },
  deactivated() {
    // 显示 tabbar
    this.$store.commit("isShowTabBar");
    this.$store.commit("isShowState", !this.isShowState);
  },
};
</script>

<style scoped lang="less">
.hotcomment {
  width: 100vw;
  /* height: 90vh; */
  /* background-color: pink;  */
  border: 1px solid #ccc;
  dl {
    /* height: 20vh; */
    /* overflow: hidden; */
    border-bottom: 1px solid #ccc;
    padding-bottom: 14px;
    .avatarnn {
      overflow: hidden;
      img {
        width: 10%;
        border-radius: 50%;
        border: 1px solid #ccc;
        float: left;
      }
      dt {
        float: left;
        line-height: 10vw;
        margin-left: 10px;
        color: #666;
        font-size: 14px;
      }
    }
    dd {
      margin-left: 46px;
      font-size: 14px;
    }
  }
}
</style>
