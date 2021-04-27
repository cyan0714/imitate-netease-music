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
    lyric: [],
    isShowProgress: false,
    //是否显示播放器
    isShowPlayer: false,
    mp3CurrentTime: "",
    mp3Duraction: "",
    audioRes: "",
    isShowTabBar: true,
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
    isShowProgress(state) {
      state.isShowProgress = !state.isShowProgress;
      state.isShowState = !state.isShowState;
    },
    // 是否显示播放器
    ShowPlayer(state) {
      state.isShowPlayer = !state.isShowPlayer;
    },
    // 当歌曲加载时获取歌曲当前时间和总时间
    loadedmetadata(state, time) {
      state.mp3CurrentTime = time[0];
      state.mp3Duraction = time[1];
    },
    //获取 audio 元素
    getAudioRes(state, res) {
      state.audioRes = res;
    },
    isShowTabBar(state) {
      state.isShowTabBar = !state.isShowTabBar;
    },
  },
});
export default store;
