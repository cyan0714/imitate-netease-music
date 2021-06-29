<template>
  <div id="find">
    <nav-bar class="find-nav">
      <template v-slot:left>
        <span class="slot-left"></span>
      </template>
      <template v-slot:center>
        <net-input
          @netInput_showPartialRes="find_showPartialRes"
          @netInput_noShowPartialRes="find_noShowPartialRes"
          :songName1="songName"
        ></net-input>
      </template>
      <template v-slot:right>
        <span class="slot-right"></span>
      </template>
    </nav-bar>
    <ul v-show="isShowUl" class="songName">
      <li
        v-for="(item, index) in $store.state.songs"
        class="songNameLi"
        @click="showSongList(index)"
        :key="index"
      >
        <span>{{ item.name }}</span>
        <span v-html="'&nbsp;&nbsp;'"></span>
        <span>{{ item.artists[0].name }}</span>
      </li>
    </ul>
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
import { getSongsMessage } from "@/network/interface";
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
      isShowUl: false,
      songName: "",
      resultSongs: [],
    };
  },
  watch: {
    banners() {
      this.$nextTick(() => {
        console.log(this.banners.length);
      });
    },
  },
  mounted() {},
  created() {
    // 获取轮播图
    getHomeMultidata().then((res) => {
      // console.log(res.albums);
      this.banners = res.banners;
    });

    // 获取每日推荐等圆形图标
    getCircleIcon().then((res) => {
      // console.log(res.data);
      this.circleIcon = res.data;
    });

    // 获取推荐歌单
    getRecommendList().then((res) => {
      // console.log(res);
      this.recommendList = res.result;
    });
  },
  methods: {
    find_showPartialRes(data) {
      this.isShowUl = data;
    },
    find_noShowPartialRes(data) {
      this.isShowUl = data;
    },
    showSongList(index) {
      this.songName = this.$store.state.songs[index].name;
      getSongsMessage(this.songName).then((res) => {
        this.resultSongs = res.result.songs;
        // 把歌曲相关信息提交到 Vuex
        this.$store.commit("addToNetSongs", this.resultSongs);
      });
      // 跳转到歌曲列表页面
      this.$router.push("/songlist");
    },
  },
  activated() {
    this.isShowUl = false;
    this.$store.state.getPlayingState.style.bottom = "50px";
  },
  deactivated() {
    this.$store.state.getPlayingState.style.bottom = "0px";
  },
  // beforeRouteLeave(to, from, next) {
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  //   to: "/songlist";
  //   from: "/find";
  //   next();
  //   // console.log("路由12");
  //   // this.$store.state.getPlayingState.top = 0;
  //   this.$store.state.getPlayingState.style.bottom = "0px";
  //   // console.dir(this.$store.state.getPlayingState);
  // },
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
#find {
  position: relative;
}
.slot-left,
.slot-right {
  font-family: "icomoon";
  font-size: 20px;
}
.songName {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 46px;
  left: 5em;
  list-style: none;
  height: 14em;
  overflow: auto;
  background-color: #eee;
  z-index: 3;
  box-shadow: 0 0 5vh rgba(0, 0, 0, 0.7);
}
.songNameLi {
  box-sizing: border-box;
  width: 68vw;
  /* margin-bottom: 2vh; */
  border-bottom: 1px solid #ddd;
  padding: 4vw 3vw;

  font-size: 14px;
  /* background-color: pink; */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: rgb(0, 90, 171);
}
</style>
