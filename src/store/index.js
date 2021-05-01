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
  getPlayingState:''
};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
});
export default store;
