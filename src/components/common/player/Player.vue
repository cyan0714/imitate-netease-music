<template>
  <div>
    <audio
      :src="$store.state.musicUrl"
      loop
      autoplay="autoplay"
      @timeupdate="timeupdate"
      id="music"
    ></audio>
    <!-- 进度条 -->
    <div id="progressBar">
      <div id="ptxt">0%</div>
      <div id="playProgressBar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Player",
  mounted() {
    let audioDom = document.querySelector("#music");
    audioDom.muted = true;
  },
  methods: {
    timeupdate() {
      let audioDom = document.querySelector("#music");
      //获取当前播放的百分比  当前进度/总进度
      let percent = audioDom.currentTime / audioDom.duration;
      let sp = 6;
      //拼接进度条的 width
      let swidth = percent * 100 * sp + "px";
      console.log(percent * 100, swidth);
      //设置进度条的播放进度
      document.getElementById("playProgressBar").style.width = swidth;
      //保留2位小数
      document.getElementById("ptxt").innerText = (percent * 100).toFixed(2) + "%";
    },
  },
};
</script>

<style scoped>
#progressBar {
  width: 600px;
  height: 30px;
  background: #e9e9e9;
  margin-top: 10px;
  position: relative;
}
#playProgressBar {
  position: absolute;
  top: 0;
  left: 0;
  background: #20bfd8;
  height: 30px;
  width: 0px;
}
#ptxt {
  width: 100%;
  height: 30px;
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  z-index: 10;
  position: absolute;
}
</style>
