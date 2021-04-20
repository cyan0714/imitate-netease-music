<template>
  <div class="album-img">
    <img :src="$store.state.albumImg" alt="" :class="{ rotate: $store.state.isPlaying }" />
  </div>
</template>

<script>
export default {
  name: "AlbumImg",
  data() {
    return {};
  },
};
</script>

<style scoped>
.album-img {
  /* width: 50px; */
  /* background-color: rgba(0, 0, 0, 0.7); */
}
img {
  width: 75%;
  border-radius: 50%;
}
.rotate {
  /*animation (动画) :绑定选择器, 3s完成动画 linear(匀速) infinite(循环) */
  animation: loading 14s linear infinite forwards;
  /*通过 @keyframes 规则,能够创建动画 , que 定义动画的名称 可自己定义*/
}
@keyframes loading {
  /*以百分比来规定改变发生的时间 也可以通过"from"和"to",等价于0% 和 100%*/
  0% {
    /*rotate(2D旋转) scale(放大或者缩小) translate(移动) skew(翻转)*/
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
