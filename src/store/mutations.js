import {
  ADD_TO_NET_SONGS,
  ADD_TO_ALBUM_IMG,
  ADD_TO_COMMENT,
  PLAYING_TRUE,
  PLAYING_FALSE,
  ADD_TO_MV,
  GET_SONG_DETAIL,
  GET_MUSIC_URL,
  IS_SHOW_STATE,
  GET_SONG_LYRIC,
  IS_SHOW_PROGRESS,
  SHOW_PLAYER,
  LOADED_META_DATA,
  GET_AUDIO_RES,
  IS_SHOW_TAB_BAR,
  Delete_Songs,
  GET_PLAYING_STATE,
  GET_COOKIE,
  GET_DAILY_SONGS,
  GET_LOGIN_STATUS,
  GET_LIST_MESSAGE,
  GET_LIKE_LIST,
  GET_SINGLE_SONG_ID,
} from "./mutation-types";

export default {
  [ADD_TO_NET_SONGS](state, songsList) {
    state.songs = songsList;
  },
  [ADD_TO_ALBUM_IMG](state, albumPicture) {
    state.albumImg = albumPicture;
  },
  [ADD_TO_COMMENT](state, commentMessage) {
    state.comment = commentMessage;
  },
  [PLAYING_TRUE](state) {
    state.isPlaying = true;
  },
  [PLAYING_FALSE](state) {
    state.isPlaying = false;
  },
  [ADD_TO_MV](state, mvUrl) {
    state.mvUrl = mvUrl[0];
    state.isShowMv = mvUrl[1];
  },
  [GET_SONG_DETAIL](state, songdetail) {
    state.songdetail = songdetail;
  },
  [GET_MUSIC_URL](state, musicUrl) {
    state.musicUrl = musicUrl;
  },
  [IS_SHOW_STATE](state, isShowState) {
    state.isShowState = isShowState;
  },
  [GET_SONG_LYRIC](state, lyric) {
    state.lyric = lyric;
  },
  [IS_SHOW_PROGRESS](state) {
    state.isShowProgress = !state.isShowProgress;
    state.isShowState = !state.isShowState;
  },
  // 是否显示播放器
  [SHOW_PLAYER](state) {
    state.isShowPlayer = !state.isShowPlayer;
  },
  // 当歌曲加载时获取歌曲当前时间和总时间
  [LOADED_META_DATA](state, time) {
    state.mp3CurrentTime = time[0];
    state.mp3Duraction = time[1];
  },
  //获取 audio 元素
  [GET_AUDIO_RES](state, res) {
    state.audioRes = res;
  },
  [IS_SHOW_TAB_BAR](state) {
    state.isShowTabBar = !state.isShowTabBar;
  },
  [Delete_Songs](state) {
    state.songs = [];
  },
  [GET_PLAYING_STATE](state, res) {
    state.getPlayingState = res;
  },
  [GET_COOKIE](state, res) {
    state.cookie = res;
  },
  [GET_DAILY_SONGS](state, res) {
    state.getDailySongs = res;
  },
  [GET_LOGIN_STATUS](state, res) {
    state.loginStatus = res;
  },
  [GET_LIST_MESSAGE](state, res) {
    state.listMessage = res;
  },
  [GET_LIKE_LIST](state, res) {
    state.likeList = res;
  },
  [GET_SINGLE_SONG_ID](state, res) {
    state.singleSongId = res;
  },
};
