<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      // return this.$route.path.indexOf(this.path)!==-1
      return this.$route.path === this.path;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      //解决连续点击同一组件报错的问题(catch(err=>err))
      this.$router.push(this.path).catch((err) => err);
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 42px;
}
</style>
