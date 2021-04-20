<template>
  <div class="playstate">
    <!-- 圆盘 -->
    <div class="rotatedisc" @click="showDiscPage">
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
    <div class="myaudio" @click="clktoplay">
      <span class="pausebtn" v-if="!isShow"></span>
      <span class="playbtn" v-if="isShow"></span>
      <audio
        :src="$store.state.musicUrl"
        loop
        autoplay="autoplay"
        @play="play1"
        @pause="pause1"
        class="selfaudio"
      ></audio>
    </div>
  </div>
</template>

<script>
import AlbumImg from "./AlbumImg.vue";
export default {
  components: { AlbumImg },
  name: "PlayingState",
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    sonMusicUrl: {
      type: String,
      default() {
        return "";
      },
    },
  },
  methods: {
    play1() {
      this.$store.commit("playingTrue");
    },
    pause1() {
      this.$store.commit("playingFalse");
    },
    clktoplay() {
      // 获取 audio 元素，才能使用 pause 和 play 方法
      let audio = document.querySelector("audio");
      // 暂停和播放按钮是否显示
      this.isShow = !this.isShow;
      if (this.$store.state.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    },
    showDiscPage() {
      this.$router.push("/discpage");
    },
  },
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
.playstate {
  height: 50px;
  width: 100vw;
  position: fixed;
  bottom: 89px;
  left: 0;
  /* border: 2px solid red; */
  box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.1);
  line-height: 49px;
  background-color: #fff;
  /* display: none; */
}
.selfaudio {
  /* margin-left: 10px; */
}
.rotatedisc {
  width: 16vw;
  position: absolute;
  top: -14px;
  left: 10px;
}
.songdetail {
  position: absolute;
  left: 80px;
  top: 6%;
  font-size: 12px;
}
.albumpic {
  position: absolute;
  width: 100%;
  top: 8px;
  left: 7.5px;
}
.disc {
  width: 100%;
}
.pstate {
  position: absolute;
  top: 0;
  right: 36px;
  font-family: "icomoon";
  font-size: 24px;
}
.myaudio {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10%;
  width: 24px;
  height: 24px;
  /* box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.4); */
}
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
</style>
