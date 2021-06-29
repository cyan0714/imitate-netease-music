import axios from "axios";
import { store } from "../store/store";
// axios.defaults.withCredentials = true; // 允许携带cookie
//一.加了 promise
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     //1.创建 axios 实例
//     const instance = axios.create({
//       baseURL: "http://152.136.185.210:7878/api/m5/home/data",
//       timeout: 5000
//     });
//     //发送真正网络请求
//     instance(config)
//       .then(res => {
//         console.log(res);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });
// }
//二.不加 promise
export function request(config) {
  // instance 本身返回一个 promise , 所以不用 new Promise
  //1.创建 axios 实例
  const instance = axios.create({
    baseURL: "https://autumnfish.cn",
    timeout: 5000,
    // withCredentials: true,
  });

  // 2.axios 拦截器
  instance.interceptors.request.use(
    (config) => {
      //路由跳转时取消上一个页面的网络请求
      config.cancelToken = new axios.CancelToken(function(cancel) {
        store.commit("pushToken", { cancelToken: cancel });
      });
      return config; //必须加 return
    },
    (err) => {
      console.log(err);
    }
  );
  // 2.2 响应拦截
  instance.interceptors.response.use(
    (res) => {
      return res.data; //必须加 return
    },
    (err) => {
      console.log(err);
    }
  );
  //发送真正网络请求
  return instance(config);
}
