<template>
  <div class="netmv" v-show="$store.state.isShowMv">
    <video :src="$store.state.mvUrl" controls loop autoplay></video>
  </div>
</template>

<script>
export default {
  name: "NetMV",
};
</script>

<style scoped>
video {
  width: 100vw;
}
</style>
