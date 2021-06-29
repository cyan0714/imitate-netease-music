<template>
  <div class="song-single-table" @click="singleClick(index)">
    <slot name="pic"></slot>
    <div class="text">
      <slot name="favorite"></slot>
      <slot name="count"> </slot>
    </div>
    <slot name="mvbutton"></slot>
  </div>
</template>
<script>
import {
  getSingleDetail,
  getHotComment,
  getSongMp3,
  getSongsMessage,
  getLyric,
} from "@/network/interface";
export default {
  name: "SongSingleTable",
  data() {
    return {
      isShowstate: true,
      musicUrl: "",
      albumUrl: "",
      commentMessage: [],
    };
  },
  props: {
    songDetail: {
      type: Array,
      default() {
        return [];
      },
    },
    index: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  methods: {
    singleClick(index) {
      let storeSongsListId = this.$store.state.singleSongId[index];
      // 1.向后台发送请求, 获取歌曲名和歌手信息保存到 Vuex
      getSongsMessage(this.songDetail[index].songName).then((res) => {
        // 把歌曲相关信息(专辑名，专辑 id，作者，歌曲名，歌曲 id，mvid，mv播放时间)传给 Vuex
        this.$store.commit("getSongDetail", this.songDetail[index]);
        // 是否在当前页面展示播放栏
        this.$store.commit("isShowState", this.isShowstate);
      });
      // 2.获取音乐 mp3 Url
      getSongMp3(storeSongsListId).then((res) => {
        this.musicUrl = res.data[0].url;
        this.$store.commit("getMusicUrl", this.musicUrl);
      });

      // 3.获取专辑图片
      getSingleDetail(storeSongsListId).then((res) => {
        // console.log(res.songs[0].al.picUrl);
        this.albumUrl = res.songs[0].al.picUrl;
        this.$store.commit("addToAlbumImg", this.albumUrl);
      });

      // 4.获取评论
      getHotComment(storeSongsListId).then((res) => {
        this.commentMessage = res.comments;
        this.$store.commit("addToComment", this.commentMessage);
      });

      // 5.获取歌词
      getLyric(storeSongsListId).then((res) => {
        // console.log(res.lrc.lyric);
        this.lyric = res.lrc.lyric;
        //格式化歌词
        let lyric = this.lyric;
        const regNewLine = /\n/;
        const lineArr = lyric.split(regNewLine);
        const regTime = /\[\d{2}:\d{2}.\d{2,3}\]/;
        const lyricsObjArr = [];
        lineArr.forEach((item) => {
          if (item === "") return;
          const obj = {};
          // time 为数组，第一项为 [min:sec.ms] 格式
          const time = item.match(regTime);
          obj.lyric = item.split("]")[1].trim() === "" ? "" : item.split("]")[1].trim();
          obj.time = time ? this.formatLyricTime(time[0].slice(1, time[0].length - 1)) : 0;
          obj.uid = Math.random()
            .toString()
            .slice(-6);
          if (obj.lyric === "") {
            console.log("这一行没有歌词");
          } else {
            lyricsObjArr.push(obj);
          }
        });
        this.$store.commit("getSongLyric", lyricsObjArr);
      });
    },
    formatLyricTime(time) {
      // 格式化歌词的时间 转换成 sss:ms
      const regMin = /.*:/;
      const regSec = /:.*\./;
      const regMs = /\./;
      const min = parseInt(time.match(regMin)[0].slice(0, 2));
      let sec = parseInt(time.match(regSec)[0].slice(1, 3));
      const ms = time.slice(time.match(regMs).index + 1, time.match(regMs).index + 4);
      if (min !== 0) {
        sec += min * 60;
      }
      return Number(sec + "." + ms);
    },
  },
};
</script>
<style scoped lang="less">
.song-single-table {
  width: 100vw;
  height: 10vh;
  padding-left: 1vw;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.text {
  display: flex;
  flex-shrink: 0;
  width: 70vw;
  flex-direction: column;
  font-size: 14px;
  overflow: hidden;
}
</style>
