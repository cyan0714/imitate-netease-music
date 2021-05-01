<template>
  <div class="navbar">
    <span class="search" v-if="isShow"></span>
    <input
      type="text"
      v-model="songsName"
      @keyup="keypress"
      @focus="focus"
      @blur="blur"
      placeholder="雅俗共赏"
    />
  </div>
</template>

<script>
import { getSongsMessage } from "@/network/interface";
export default {
  name: "NetInput",
  data() {
    return {
      songsName: this.songName1,
      resultSongs: [],
      isShow: true,
      timer: null,
      showPartialRes: true,
      noShowPartialRes: false,
    };
  },

  props: {
    songName1: {
      type: String,
      default() {
        return "";
      },
    },
  },
  computed: {},
  methods: {
    keypress(e) {
      let input = document.querySelector("input");
      // 如果 input 的内容为空,则通知父组件 Find 不显示 input 局部 ajax 刷新结果
      if (input.value === "") {
        this.$emit("netInput_noShowPartialRes", this.noShowPartialRes);
        this.$store.commit("deleteSongs");
      }
      // 如果 input 的内容不为空,则通知父组件 Find 显示 input 局部 ajax 刷新结果
      if (input.value !== "") {
        this.$emit("netInput_showPartialRes", this.showPartialRes);
        // 防抖
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          getSongsMessage(this.songsName).then((res) => {
            this.resultSongs = res.result.songs;
            this.$store.commit("addToNetSongs", this.resultSongs);
          });
        }, 500);
      }

      // 当按下回车时获取与关键词(歌手,歌名)有关的歌曲
      if (e.keyCode == 13) {
        if (input.value === "") {
          this.songsName = input.placeholder;
          getSongsMessage(this.songsName).then((res) => {
            this.resultSongs = res.result.songs;
            this.$store.commit("addToNetSongs", this.resultSongs);
          });
          // 跳转到歌曲列表页面
          this.$router.push("/songlist");
        } else {
          this.songsName = input.value;
          getSongsMessage(this.songsName).then((res) => {
            this.resultSongs = res.result.songs;
            this.$store.commit("addToNetSongs", this.resultSongs);
          });
          this.$router.push("/songlist");
        }
      }
    },
    focus() {
      let input = document.querySelector("input");
      this.isShow = false;
      // if (input.value === "") {
      //   this.songsName = "";
      // }
      // this.$emit("netInput_noShowPartialRes", this.noShowPartialRes);
    },
    blur() {
      this.isShow = true;
    },
  },
  deactivated() {
    // 当设置下面这行代码时,每次按下回车都是上一次的搜索结果
    // this.songsName = this.songName1;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.navbar {
  position: relative;
  input {
    outline: none;
    border-radius: 24px;
    width: 100%;
    height: 40px;
    padding: 0 24px;
    line-height: 40px;
    border: 1px solid #ccc;
    color: #aaa;
  }
  .search {
    font-family: "icomoon";
    font-size: 20px;
    position: absolute;
    /* height: 20px; */
    left: 6px;
    top: 1px;
  }
}
</style>
