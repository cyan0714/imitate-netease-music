import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    songs: [],
    albumImg: "",
    comment: [],
    isPlaying: false,
    mvUrl: "",
    isShowMv: false,
    songdetail: {},
    musicUrl: "",
    isShowState: false,
    lyric: "",
  },
  mutations: {
    addToNetSongs(state, songsList) {
      state.songs = songsList;
    },
    addToAlbumImg(state, albumPicture) {
      state.albumImg = albumPicture;
    },
    addToComment(state, commentMessage) {
      state.comment = commentMessage;
    },
    playingTrue(state) {
      state.isPlaying = true;
    },
    playingFalse(state) {
      state.isPlaying = false;
    },
    addToMv(state, mvUrl) {
      state.mvUrl = mvUrl[0];
      state.isShowMv = mvUrl[1];
    },
    getSongDetail(state, songdetail) {
      state.songdetail = songdetail;
    },
    getMusicUrl(state, musicUrl) {
      state.musicUrl = musicUrl;
    },
    isShowState(state, isShowState) {
      state.isShowState = isShowState;
    },
    getSongLyric(state, lyric) {
      state.lyric = lyric;
    },
    
  },
});
export default store;
