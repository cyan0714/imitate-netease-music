<template>
  <div class="songsmenu">
    <li v-for="(item, index) in $store.state.songs" class="play" @click="clickToPlay(index)">
      <span class="song-name">{{ item.name }}</span>
      <div class="aboutsong">
        <span class="author-name"> {{ item.artists[0].name }}</span>
        <span>&nbsp;-&nbsp;</span>
        <span class="album-name">{{ item.album.name }}</span>
      </div>
      <a href="javascript:;" class="mv" v-if="item.mvid != ''" @click="mvIconClick(index)"></a>
    </li>
  </div>
</template>

<script>
import {
  getAlbumImg,
  getHotComment,
  getMVUrl,
  getSongMp3,
  getSongsMessage,
  getLyric,
  songDetail,
} from "@/network/interface";

export default {
  components: {},
  name: "SongList",
  data() {
    return {
      musicUrl: "",
      albumUrl: "",
      commentMessage: [],
      mvUrl: "",
      isShowMv: false,
      // crtSongsMsg: [],
      isShowstate: false,
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
        console.log(storeSongsListId);
        const item = res.result.songs[index];
        this.songdetail = new songDetail(item);
        // 把歌曲相关信息(专辑名，专辑 id，作者，歌曲名，歌曲 id，mvid，mv播放时间)传给 Vuex
        this.$store.commit("getSongDetail", this.songdetail);
        // 是否展示播放栏
        this.isShowstate = true;
        this.$store.commit("isShowState", this.isShowstate);
      });

      // 2.获取音乐播放 Url
      getSongMp3(storeSongsListId).then((res) => {
        // console.log(res.data[0].url);
        this.musicUrl = res.data[0].url;
        this.$store.commit("getMusicUrl", this.musicUrl);
      });

      // 3.获取专辑图片
      getAlbumImg(storeSongsListId).then((res) => {
        // console.log(res.songs[0].al.picUrl);
        this.albumUrl = res.songs[0].al.picUrl;
        this.$store.commit("addToAlbumImg", this.albumUrl);
      });

      // 4.获取评论
      getHotComment(storeSongsListId).then((res) => {
        // console.log(res.hotComments);
        // this.commentAvatarUrl = res.hotComments[index].user.avatarUrl;
        // this.commentNickName = res.hotComments[index].user.nickname;
        console.log(res);
        this.commentMessage = res.comments;
        this.$store.commit("addToComment", this.commentMessage);
      });

      // 5.获取歌词
      getLyric(storeSongsListId).then((res) => {
        console.log(res.lrc);
        this.lyric = res.lrc;
        this.$store.commit("getSongLyric", this.lyric);
        // console.log(res.klylrc);
      });
    },
    // 点击获取 mv
    mvIconClick(index) {
      getMVUrl(this.$store.state.songs[index].mvid).then((res) => {
        // console.log(res.data.url);
        this.mvUrl = res.data.url;
        this.isShowMv = !false;
        this.$store.commit("addToMv", [this.mvUrl, this.isShowMv]);
      });

      this.$router.push("/mv");
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
.play {
  position: relative;
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
  margin: 10px 16px 0;
  border: 1px solid transparent;
  background-color: #fff;
  border-radius: 14px;
}
ul,
li {
  list-style: none;
}
li {
  margin: 16px 18px;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;
  font-size: 16px;
}
.song-name {
  color: rgb(36, 169, 225);
}
span {
  margin-left: 5px;
  vertical-align: middle;
}
audio {
  width: 100%;
}
.aboutsong {
  font-size: 10px;
  color: #bbb;
}
</style>
