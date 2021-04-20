<template>
  <div id="find">
    <nav-bar class="find-nav">
      <template v-slot:left>
        <span class="slot-left"></span>
      </template>
      <template v-slot:center>
        <net-input></net-input>
      </template>
      <template v-slot:right>
        <span class="slot-right"></span>
      </template>
    </nav-bar>
    <find-swiper :banners1="banners"></find-swiper>
    <circle-icon :circleIcon="circleIcon"></circle-icon>
    <recommend-list :recommendList="recommendList"></recommend-list>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import NetInput from "../../components/content/NetInput.vue";
import FindSwiper from "./childComps/FindSwiper.vue";
import { getHomeMultidata, getCircleIcon, getRecommendList } from "@/network/interface";
import RecommendList from "../../components/content/RecommendList.vue";
import CircleIcon from "./childComps/CircleIcon.vue";
export default {
  name: "Find",
  components: {
    NavBar,
    NetInput,
    FindSwiper,
    RecommendList,
    CircleIcon,
  },
  data() {
    return {
      banners: [],
      circleIcon: [],
      recommendList: [],
    };
  },
  created() {
    // 获取轮播图
    getHomeMultidata().then((res) => {
      // console.log(res.albums);
      this.banners = res.banners;
    });

    // 获取每日推荐等圆形图标
    getCircleIcon().then((res) => {
      console.log(res.data);
      this.circleIcon = res.data;
    });

    // 获取推荐歌单
    getRecommendList().then((res) => {
      console.log(res);
      this.recommendList = res.result;
    });
  },
  methods: {},
};
</script>

<style scoped>
@font-face {
  font-family: "icomoon";
  src: url("../../assets/fonts/icomoon.eot?2lm2ws");
  src: url("../../assets/fonts/icomoon.eot?2lm2ws#iefix") format("embedded-opentype"),
    url("../../assets/fonts/icomoon.ttf?2lm2ws") format("truetype"),
    url("../../assets/fonts/icomoon.woff?2lm2ws") format("woff"),
    url("../../assets/fonts/icomoon.svg?2lm2ws#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
.slot-left,
.slot-right {
  font-family: "icomoon";
  font-size: 20px;
}
</style>
