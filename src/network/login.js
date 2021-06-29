import { request } from "./request";
//用户登录
export function login(tel, pwd) {
  var getTimestamp = new Date().getTime();
  return request({
    url: "/login/cellphone",
    params: {
      phone: tel,
      password: pwd,
      timestamp: getTimestamp,
      // timestamp: 15030199,
    },
  });
}
// 登录状态
export function getLoginStatus(cookies) {
  return request({
    url: "/login/status",
    params: {
      cookie: cookies,
    },
  });
}
//获取喜欢的音乐
export function getLikelist(uid, token, cookie) {
  return request({
    url: "/likelist",
    params: {
      uid,
      token,
      cookie,
    },
  });
}
