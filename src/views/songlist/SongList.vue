<template>
  <div class="songsmenu">
    <li v-for="(item, index) in $store.state.songs" class="play" @click="clickToPlay(index)">
      <span class="song-name">{{ item.name }}</span>
      <div class="aboutsong">
        <span class="author-name"> {{ item.artists[0].name }}</span>
        <span>&nbsp;-&nbsp;</span>
        <span class="album-name">{{ item.album.name }}</span>
      </div>
      <a href="javascript:;" class="mv" v-if="item.mvid != ''" @click="mvIconClick(index, $event)"
        ></a
      >
    </li>
  </div>
</template>

<script>
import {
  getSingleDetail,
  getHotComment,
  getMVUrl,
  getSongMp3,
  getSongsMessage,
  getLyric,
  songDetail,
} from "@/network/interface";
import PlayingState from "@/components/content/PlayingState";

export default {
  components: {
    PlayingState,
  },
  name: "SongList",
  data() {
    return {
      musicUrl: "",
      albumUrl: "",
      commentMessage: [],
      mvUrl: "",
      isShowMv: false,
      // crtSongsMsg: [],
      isShowstate: true,
      lyric: "",
      songdetail: {},
    };
  },
  created() {},
  methods: {
    // 点击选中歌曲时获取该歌曲的歌曲名, 歌手, mp3, 专辑图片, 评论
    clickToPlay(index) {
      let storeSongsListId = this.$store.state.songs[index].id;
      // 1.向后台发送请求, 获取歌曲名和歌手信息保存到 Vuex
      getSongsMessage(this.$store.state.songs[index].name).then((res) => {
        const item = res.result.songs[index];
        const songDetailObj = new songDetail(item);
        // 把歌曲相关信息(专辑名，专辑 id，作者，歌曲名，歌曲 id，mvid，mv播放时间)传给 Vuex
        this.$store.commit("getSongDetail", songDetailObj);
        // 是否在当前页面展示播放栏
        this.$store.commit("isShowState", this.isShowstate);
      });

      // 2.获取音乐 mp3 Url
      getSongMp3(storeSongsListId).then((res) => {
        // console.log(res.data[0].url);
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

    // 点击获取 mv
    mvIconClick(index, e) {
      // 防止冒泡到点击歌曲播放
      e.stopPropagation();
      // 当点击 mv 后，将歌曲播放状态设置为暂停
      let rs = this.$store.state.audioRes;
      rs.pause();
      getMVUrl(this.$store.state.songs[index].mvid).then((res) => {
        // console.log(res.data.url);
        this.mvUrl = res.data.url;
        this.isShowMv = !this.isShowMv;
        this.$store.commit("addToMv", [this.mvUrl, this.isShowMv]);
      });
      this.$router.push("/mv");
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
.mv {
  font-family: "icomoon";
  color: red;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
.songsmenu {
  position: relative;
  margin: 10px 16px 10vh;
  border: 1px solid transparent;
  background-color: #fff;
  border-radius: 14px;

  li {
    // width: 80vw;
    list-style: none;
    position: relative;
    margin: 16px 18px 0;
    padding-bottom: 16px;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    // overflow: hidden;

    .song-name {
      display: block;
      // background-color: yellow;

      color: rgb(36, 169, 225);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .aboutsong {
      font-size: 10px;
      color: #bbb;
    }
  }
}
span {
  margin-left: 5px;
  // vertical-align: bottom;
}
</style>
