<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <playing-state
      exclude="App"
      id="playingstate"
      v-show="$store.state.isShowState"
    ></playing-state>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import AlbumImg from "@/components/content/AlbumImg.vue";
import NetComment from "@/components/content/NetComment.vue";
import NetInput from "@/components/content/NetInput.vue";
import NetMv from "@/components/content/NetMv";
import SongList from "@/views/songlist/SongList.vue";
import MainTabBar from "@/components/common/bottom-tabbar/MainTabBar";
import PlayingState from "@/components/content/PlayingState";

export default {
  name: "App",
  components: {
    NetInput,
    SongList,
    AlbumImg,
    NetComment,
    NetMv,
    MainTabBar,
    PlayingState,
  },
  methods: {},
};
</script>

<style scoped>
@import "./assets/css/normalize.css";
#playingstate {
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 3;
}
</style>
