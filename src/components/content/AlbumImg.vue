<template>
  <div class="album-img">
    <img
      :src="$store.state.albumImg"
      alt=""
      :class="[
        { animation_paused: !$store.state.isPlaying },
        { animation_running: $store.state.isPlaying },
      ]"
    />
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

<style scoped lang="less">
.album-img {
  img {
    width: 75%;
    border-radius: 50%;
    animation: loading 20s linear infinite;
  }
  .animation_paused {
    animation-play-state: paused;
  }
  .animation_running {
    animation-play-state: running;
  }
  @keyframes loading {
    /* 以百分比来规定改变发生的时间 也可以通过 "from"和 "to",等价于 0% 和 100%*/
    0% {
      /*rotate(2D旋转) scale(放大或者缩小) translate(移动) skew(翻转)*/
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
