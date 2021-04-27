<template>
  <div class="navbar">
    <span class="search" v-show="isShow"></span>
    <input
      type="text"
      v-model="songsName"
      @keyup="keypress"
      @focus="isShow = false"
      @blur="isShow = true"
    />
    <!-- <button @click="search">搜索</button> -->
  </div>
</template>

<script>
import { getSongsMessage } from "@/network/interface";
export default {
  name: "HelloWorld",
  data() {
    return {
      songsName: "慢半拍",
      resultSongs: [],
      isShow: true,
    };
  },
  computed: {},
  methods: {
    keypress(e) {
      // 当按下回车时获取与关键词(歌手,歌名)有关的歌曲
      if (e.keyCode == 13) {
        getSongsMessage(this.songsName).then((res) => {
          console.log(res.result.songs);
          this.resultSongs = res.result.songs;
          // 把歌曲相关信息提交到 Vuex
          this.$store.commit("addToNetSongs", this.resultSongs);
        });
        // 跳转到歌曲列表页面
        this.$router.push("/songlist");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.navbar {
  position: relative;
}
input {
  outline: none;
  border-radius: 24px;
  width: 100%;
  height: 40px;
  padding: 0 40px;
  line-height: 40px;
  border: 1px solid #ccc;
  color: #aaa;
}
.search {
  font-family: "icomoon";
  font-size: 20px;
  position: absolute;
  /* height: 20px; */
  left: 14px;
  top: 1px;
}
</style>
