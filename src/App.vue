<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <playing-state
      id="playingstate"
      v-show="$store.state.isShowState"
      ref="playingstate"
    ></playing-state>
    <main-tab-bar v-show="$store.state.isShowTabBar"></main-tab-bar>

    <!-- 播放器 -->
    <audio
      :src="$store.state.musicUrl"
      loop
      autoplay="autoplay"
      @play="playing"
      @pause="pausing"
      class="selfaudio"
      id="music"
      ref="audio"
      @loadedmetadata="loadedmetadata"
      @timeupdate="timeupdate"
    ></audio>
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
import DiscPage from "./views/discpage/DiscPage.vue";

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
    DiscPage,
  },
  data() {
    return {
      mp3CurrentTime: "",
      mp3Duraction: "",
      audioPlay: "",
      isShowstate: true,
    };
  },
  mounted() {
    this.$store.commit("getAudioRes", this.$refs.audio);
    //因为该元素有 v-show 所以需要使用 setTimeout (详见掘金，ref 和 refs 区别)
    // setTimeout(() => {
    //   console.log(this.$refs.progress.offsetWidth);
    // }, 0);
  },
  methods: {
    //当浏览器已加载音频/视频的元数据时(audio api)
    loadedmetadata() {
      this.mp3Duraction = this.conversion(music.duration);
      this.mp3CurrentTime = this.conversion(music.currentTime);
      this.$store.commit("loadedmetadata", [this.mp3CurrentTime, this.mp3Duraction]);
    },
    //当目前的播放位置已更改时(audio api)
    timeupdate() {
      this.$store.state.mp3Duraction = this.conversion(music.duration);
      this.$store.state.mp3CurrentTime = this.conversion(music.currentTime);
    },
    // 格式化当前歌曲播放时间和总时间
    conversion(value) {
      let minute = Math.floor(value / 60);
      minute = minute.toString().length === 1 ? "0" + minute : minute;
      let second = Math.round(value % 60);
      second = second.toString().length === 1 ? "0" + second : second;
      return `${minute}:${second}`;
    },
    //监听歌曲播放时事件
    playing() {
      this.$store.commit("playingTrue");
    },
    //监听歌曲暂停时事件
    pausing() {
      this.$store.commit("playingFalse");
    },
  },
};
</script>

<style scoped>
@import "./assets/css/normalize.css";
#playingstate {
  bottom: 50px;
}
</style>
