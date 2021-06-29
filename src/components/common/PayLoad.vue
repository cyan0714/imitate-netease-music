<template>
  <div>
    <el-button
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      style="display:block;width:100vw;height:100vh;backgroundColor:#ededed"
    ></el-button>
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
};
</script>
<style scoped></style>
