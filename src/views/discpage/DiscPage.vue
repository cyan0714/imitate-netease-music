<template>
  <div id="discpage" @click="showLyricPage" ref="discpage">
    <img src="@/assets/img/disc.png" alt="" v-show="isShowDisc" />
    <album-img class="albumPic" v-show="isShowDisc"></album-img>
    <lyric-page v-show="isShowLyric"></lyric-page>
    <!-- 歌曲开始时间 -->
    <span id="start">{{ $store.state.mp3CurrentTime }}</span>
    <!-- 进度条 -->
    <div id="progressBar" @click="jumpProges" ref="progress">
      <div id="playProgressBar" ref="progressDot" style="{width:'0'}"></div>
    </div>
    <!-- 歌曲总时间 -->
    <span id="end">{{ $store.state.mp3Duraction }}</span>
    <!-- 查看评论 -->
    <span class="comment" @click="showComment">评论~</span>
    <!-- 播放暂停按钮 -->
    <div class="togglestate" @click="clktoplay">
      <span class="pausebtn" v-show="!$store.state.isPlaying"></span>
      <span class="playbtn" v-show="$store.state.isPlaying"></span>
    </div>
  </div>
</template>

<script>
import AlbumImg from "../../components/content/AlbumImg.vue";
import LyricPage from "../lyricpage/LyricPage.vue";
export default {
  components: { AlbumImg, LyricPage },
  name: "DiscPage",
  data() {
    return {
      startContent: "",
      endContent: "",
      isShowLyric: false,
      isShowDisc: true,
    };
  },
  mounted() {
    let playProgressBar = document.querySelector("#playProgressBar");
    setInterval(() => {
      //必须在标签中添加 行内样式 style,否则报错
      playProgressBar.style.width =
        (this.$store.state.audioRes.currentTime / this.$store.state.audioRes.duration.toFixed(3)) *
          100 +
        "vw";
    }, 1000);
  },
  methods: {
    clktoplay(e) {
      // 获取 audio 元素，才能使用 pause 和 play 方法
      // let audio = document.querySelector("audio");
      // 暂停和播放按钮是否显示
      e.stopPropagation();
      let rs = this.$store.state.audioRes;
      if (this.$store.state.isPlaying) {
        rs.pause();
      } else {
        rs.play();
      }
    },
    // 跳转到歌词页面
    showLyricPage() {
      this.isShowLyric = !this.isShowLyric;
      this.isShowDisc = !this.isShowDisc;
    },
    // 显示评论
    showComment(e) {
      // 防止冒泡到父元素
      e.stopPropagation();
      this.$router.push("/comment");
    },
    // 进度条
    jumpProges(e) {
      e.stopPropagation();
      let coordStart = this.$refs.progress.getBoundingClientRect().left;
      let coordEnd = e.pageX;
      let p = (coordEnd - coordStart) / this.$refs.progress.offsetWidth;
      this.$refs.progressDot.style.width = p.toFixed(3) * 100 + "%";
      this.$store.state.audioRes.currentTime = p * this.$store.state.audioRes.duration;
    },
  },
  activated() {
    // 隐藏下方 tabbar
    this.$store.commit("isShowTabBar");
  },
  deactivated() {
    // 显示 tabbar
    this.$store.commit("isShowTabBar");
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
#discpage {
  width: 100vw;
  height: 100vh;
  background-color: rgba(199, 237, 233, 0.3);
  /* background-color: rgb(199, 237, 233); */
}
#progressBar {
  width: 100vw;
  height: 5px;
  /* background-color: rgba(199, 237, 233, 0.3); */
  background-color: #ccc;
  position: absolute;
  top: 86vh;
  left: 0;
  z-index: 4;
  /* display: none; */
}
#playProgressBar {
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  height: 5px;
  border-radius: 4px;
  width: 0px;
  /* z-index: 5; */
}
#start {
  position: absolute;
  top: 87vh;
  left: 0;
  font-size: 12px;
}
#end {
  position: absolute;
  top: 87vh;
  right: 0;
  font-size: 12px;
}
.togglestate {
  position: absolute;
  top: 90vh;
  right: 50%;
  transform: translateX(50%);
  width: 36px;
  height: 36px;
}
img {
  height: 250px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.albumPic {
  width: 277px;
  position: absolute;
  top: 45%;
  left: 59.5%;
  transform: translate(-50%, -50%);
  /* height: 100px; */
}
.comment {
  /* background-color: cyan; */
  display: block;
  height: 30px;
  /* width: 40px; */
  padding: 4px;
  text-align: center;
  border-radius: 7px;
  line-height: 22px;
  box-shadow: 0px 2px 3px rgba(1, 1, 1, 0.5);
  position: absolute;
  right: 10vw;
  bottom: 25vw;
  color: #888;
}
.pausebtn,
.playbtn {
  font-family: "icomoon";
  font-size: 36px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  text-align: center;
  line-height: 36px;
}
</style>
