<template>
  <div id="dailyRec" class="songsmenu">
    <h4>每日推荐</h4>
    <div v-if="isShowTip">
      <span>获取每日推荐歌曲,请 </span>
      <router-link to="/login" @click="ClickToShowTip()">
        <span class="immidia">登录</span>
      </router-link>
    </div>
    <li
      v-for="(item, index) in $store.state.getDailySongs"
      class="play"
      :key="index"
      @click="clickToPlay(index)"
    >
      <div class="pic">
        <img :src="item.alPicUrl" alt="" />
      </div>
      <div class="detail">
        <span class="song-name">{{ item.songName }}</span>
        <div class="aboutsong">
          <span> {{ item.artistsName }}&nbsp;-&nbsp;{{ item.alName }}</span>
        </div>
      </div>
    </li>
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
  name: "DailyRec",
  components: {},
  data() {
    return {
      musicUrl: "",
      isShowstate: true,
      commentMessage: [],
      songdetail: {},
      lyric: "",
      albumUrl: "",
      isShowTip: true,
    };
  },
  props: {
    dailyS: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    clickToPlay(index) {
      //点击每日推荐图标时 vuex 就已经存储了每日推荐歌曲的信息了,所以这里可以调用
      let dailySongsId = this.$store.state.getDailySongs[index].id;
      let dailySongsObj = this.$store.state.getDailySongs[index];
      getSongsMessage(this.$store.state.getDailySongs[index].songName).then((res) => {
        // 把歌曲相关信息(专辑名，专辑 id，作者，歌曲名，歌曲 id，mvid，mv播放时间)传给 Vuex
        this.$store.commit("getSongDetail", dailySongsObj);
        // 是否在当前页面展示播放栏
        this.$store.commit("isShowState", this.isShowstate);
      });

      getSongMp3(dailySongsId).then((res) => {
        this.musicUrl = res.data[0].url;
        this.$store.commit("getMusicUrl", this.musicUrl);
      });
      // 3.获取专辑图片
      getSingleDetail(dailySongsId).then((res) => {
        this.albumUrl = res.songs[0].al.picUrl;
        this.$store.commit("addToAlbumImg", this.albumUrl);
      });

      // 4.获取评论
      getHotComment(dailySongsId).then((res) => {
        this.commentMessage = res.comments;
        this.$store.commit("addToComment", this.commentMessage);
      });

      // 5.获取歌词
      getLyric(dailySongsId).then((res) => {
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
        // console.log(res.klylrc);
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
  activated() {
    if (this.$store.state.cookie !== "") {
      this.isShowTip = false;
    }
  },
};
</script>
<style scoped lang="less">
.songsmenu {
  padding: 2vw;
  position: relative;
  margin: 10px 16px 10vh;
  border: 1px solid transparent;
  background-color: #fff;
  border-radius: 14px;
  li {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 7vw 4px;
    font-size: 16px;
    .detail {
      margin-left: 3vw;
      margin-right: 3vw;
      overflow: hidden;
      .song-name {
        display: block;
        color: rgb(36, 169, 225);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .aboutsong {
        font-size: 10px;
        color: #bbb;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .pic {
      width: 10vw;
      height: 10vw;
      flex-shrink: 0;
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }
  }
}
span {
  margin-left: 5p;
}
</style>
