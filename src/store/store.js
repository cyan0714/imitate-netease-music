import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
// 创建次文件的目的是为了路由跳转时取消上一个页面的网络请求
export const store = new Vuex.Store({
  state: {
    cancelTokenArr: [], // 取消请求token数组
  },
  mutations: {
    pushToken(state, payload) {
      state.cancelTokenArr.push(payload.cancelToken);
    },
    clearToken({ cancelTokenArr }) {
      cancelTokenArr.forEach((item) => {
        item("路由跳转时取消上一个路由组件的网络请求");
        // console.log("cancel");
      });
      cancelTokenArr = [];
    },
  },
});
