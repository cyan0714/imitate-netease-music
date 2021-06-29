import Vue from "vue";
import App from "./App";
import store from "./store/index";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});
//1.axios基本使用
// axios({
//   url: "http://152.136.185.210:7878/api/m5/home/data?type=new&page=1"
// }).then(res => {
//   console.log(res);
// });

// axios({
//   url: "http://152.136.185.210:7878/api/m5/home/data?type=sell&page=1"
// }).then(res => {
//   console.log(res);
// });
//2.axios发送并发请求
// axios.defaults.baseURL = "http://152.136.185.210:7878/api/m5"; 全局配置
// axios.defaults.timeout = 500;
// axios
//   .all([
//     axios({
//       url: "/home/data?type=new&page=1"
//     }),
//     axios({
//       url: "/home/data",
//       params: {
//         type: "sell",
//         page: 3
//       }
//     })
//   ])
//   .then(
//     axios.spread((res1, res2) => {
//       console.log(res1);
//       console.log(res2);
//     })
//   );
