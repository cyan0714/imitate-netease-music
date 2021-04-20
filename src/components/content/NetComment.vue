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
};
</script>

<style scoped>
.hotcomment {
  /* float: left;
  width: 20vw;
  height: 90vh;
  background-color: pink; */
  border: 1px solid #ccc;
}
dl {
  /* height: 20vh; */
  /* overflow: hidden; */
  border-bottom: 1px solid #ccc;
  padding-bottom: 14px;
}

dt {
  float: left;
  line-height: 10vw;
  margin-left: 10px;
  color: #666;
  font-size: 14px;
}
dd {
  margin-left: 46px;
  font-size: 14px;
}
img {
  width: 10%;
  border-radius: 50%;
  border: 1px solid #ccc;
  float: left;
}
.avatarnn {
  overflow: hidden;
}
</style>
