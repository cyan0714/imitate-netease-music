<template>
  <ul>
    <li v-for="(item, index) in circleIcon">
      <a :href="item.url">
        <img :src="item.iconUrl" alt="" />
        <span>{{ item.name }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CircleIcon",
  props: {
    circleIcon: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  width: 100vw;
  overflow: auto;
  padding: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
/* chorme 隐藏滚动条 */
ul::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
ul li {
  /* 解除 flex 的自动默认不可放大子元素问题 */
  flex-shrink: 0;
  width: 14vw;
  margin: 0 10px;
}
a {
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 90%;
  border-radius: 50%;
  background-color: red;
  color: red;
  border: 1px solid red;
  /* border: 1px solid red; */
}
span {
  margin-top: 7px;
  font-size: 12px;
  color: black;
}
</style>
