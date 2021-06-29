import { request } from "./request";
//获取每日推荐歌曲
export function getDailySongs(cookies, index) {
  var getTimestamp = new Date().getTime();
  return request({
    url: "/recommend/songs",
    params: {
      timestamp: getTimestamp,
      cookie: cookies,
      index,
    },
  });
}

//每日推荐组件需要渲染的数据
export class DailySongs {
  constructor(al, ar, name, id) {
    this.alName = al.name;
    this.alPicUrl = al.picUrl;
    this.artistsName = ar[0].name;
    this.songName = name;
    this.id = id;
  }
}
