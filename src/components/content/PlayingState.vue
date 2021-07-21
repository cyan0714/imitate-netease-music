<template>
  <div class="playstate" ref="playstate" @click="showDiscPage">
    <!-- 圆盘 -->
    <div class="rotatedisc">
      <!-- 圆盘图片 -->
      <img src="@/assets/img/disc.png" alt="" class="disc" />
      <!-- 圆盘里转动的图片 -->
      <album-img class="albumpic"></album-img>
    </div>
    <!-- 圆盘旁边的歌曲名字以及其他信息 -->
    <span class="songdetail"
      >{{ $store.state.songdetail.songName }} - {{ $store.state.songdetail.artistsName }}</span
    >
    <!-- 播放暂停按钮 -->
    <div class="togglestate" @click="clktoplay">
      <span class="pausebtn" v-show="!$store.state.isPlaying"></span>
      <span class="playbtn" v-show="$store.state.isPlaying"></span>
    </div>
  </div>
</template>

<script>
import AlbumImg from "./AlbumImg.vue";
export default {
  components: { AlbumImg },
  name: "PlayingState",
  data() {
    return {};
  },
  mounted() {
    // console.log((this.$refs.playstate.style.bottom = "30px"));
    // 将播放器组件 commit 到 vuex
    this.$store.commit("getPlayingState", this.$refs.playstate);
  },
  props: {},
  methods: {
    clktoplay(e) {
      // 获取 audio 元素，才能使用 pause 和 play 方法
      e.stopPropagation();
      let rs = this.$store.state.audioRes;
      if (this.$store.state.isPlaying) {
        rs.pause();
      } else {
        rs.play();
      }
    },
    showDiscPage(e) {
      e.stopPropagation();
      this.$router.push("/discpage");
    },
  },
};
</script>

<style scoped lang="less">
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
.playstate {
  height: 50px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.1);
  line-height: 49px;
  background-color: #fff;
  z-index: 2;
  .rotatedisc {
    width: 16vw;
    position: absolute;
    top: -14px;
    left: 10px;
    .albumpic {
      position: absolute;
      width: 100%;
      top: 8px;
      left: 7.5px;
    }
    .disc {
      width: 100%;
    }
  }
  .togglestate {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10%;
    width: 24px;
    height: 24px;
    .pausebtn,
    .playbtn {
      font-family: "icomoon";
      font-size: 24px;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      text-align: center;
      line-height: 24px;
    }
  }
  .songdetail {
    width: 60vw;
    position: absolute;
    left: 80px;
    top: 6%;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
