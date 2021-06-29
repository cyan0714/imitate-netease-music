import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./action";
Vue.use(Vuex);

const state = {
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
  getPlayingState: "",
  //获取 cookie
  cookie: "",
  getDailySongs: [],
  //登录状态(含头像和背景图)
  loginStatus: {},
  //歌单信息
  listMessage: [],
  //我喜欢的音乐里的每一首歌的 id
  likeList: [],
  //每一个创建歌单里含有每一首歌曲 id 的数组
  singleSongId: [],
};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
});
export default store;
