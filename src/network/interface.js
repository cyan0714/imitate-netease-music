// 3.封装 request 模块
import { request } from "./request";
// 1.获取歌曲信息
export function getSongsMessage(inputname) {
  return request({
    url: "/search",
    params: {
      keywords: inputname,
    },
  });
}
export class songDetail {
  constructor(item) {
    this.albumName = item.album.name;
    this.artistsName = item.artists[0].name;
    this.songName = item.name;
    this.songId = item.id;
    this.songMv = item.mvid;
    this.mvDuration = item.duration;
  }
}
// 2.通过歌曲信息的 id 获取歌曲 mp3 的 url
export function getSongMp3(songId) {
  return request({
    url: "/song/url",
    params: {
      id: songId,
    },
  });
}

// 3.通过歌曲信息的 id 获取专辑图片
export function getSingleDetail(id) {
  return request({
    url: "/song/detail",
    params: {
      ids: id,
    },
  });
}

// 4.通过歌曲信息的 id 获取热门评论
export function getHotComment(hotComment) {
  return request({
    url: "/comment/music",
    params: {
      // type: 0,
      limit: 100,
      id: hotComment,
    },
  });
}

// 5.通过判断有无 mvid 获取 mv 的 url
export function getMVUrl(mvid) {
  return request({
    url: "/mv/url",
    params: {
      id: mvid,
    },
  });
}

// 6.获取轮播图图片
export function getHomeMultidata() {
  return request({
    url: "/banner",
    params: {
      type: 1,
    },
  });
}

// 7.获取推荐歌单
export function getRecommendList() {
  return request({
    url: "/personalized",
    params: {
      limit: 6,
    },
  });
}

// 8.根据传入歌曲 id 获取歌词
export function getLyric(songId) {
  return request({
    url: "/lyric",
    params: {
      id: songId,
    },
  });
}

// 9.获取每日推荐等圆形图标
export function getCircleIcon() {
  return request({
    url: "/homepage/dragon/ball",
  });
}
