<template>
  <!-- v-show="$store.state.isShowMv" -->
  <div class="netmv">
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
