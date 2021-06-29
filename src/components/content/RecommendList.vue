<template>
  <div id="recommend-list">
    <span>推荐歌单</span>
    <div class="grandfather-of-img">
      <div class="father-of-img" v-for="(item, index) in recommendList">
        <img :src="item.picUrl" alt="" />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { getRecommendList } from "@/network/interface";
export default {
  name: "RecommendList",
  props: {
    recommendList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
#recommend-list {
  padding: 0 7px;
  width: 100vw;
}
.grandfather-of-img {
  display: flex;
  overflow: auto;
  width: 100vw;
  /* margin-top: 0; */
}
/* 隐藏滚动条 */
.grandfather-of-img::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.father-of-img {
  width: 28vw;
  flex-shrink: 0;
  margin-right: 14px;
}
span {
  display: block;
  margin: 7px;
}
img {
  width: 100px;
  border-radius: 10px;
}
p {
  margin-top: 1px;
  font-size: 12px;

  overflow: hidden;
  text-overflow: ellipsis;
  /* 作为弹性伸缩盒子模型显示。 */
  display: -webkit-box;
  /* 设置伸缩盒子的子元素排列方式--从上到下垂直排列 */
  -webkit-box-orient: vertical;
  /* 显示的行 */
  -webkit-line-clamp: 2;
}
</style>
