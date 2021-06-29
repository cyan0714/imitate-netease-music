import { request } from "../request";
//根据用户 id 获取歌单信息
export function getListMessage(userId) {
  return request({
    url: "/user/playlist",
    params: {
      uid: userId,
    },
  });
}
//获取创建歌单和收藏歌单的数量
export function getListCount(cookie) {
  return request({
    url: "/user/subcount",
    params: {
      cookie,
    },
  });
}
//歌单能看到歌单名字, 但看不到具体歌单内容 ,传入歌单 id, 可 以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)
export function getCorMusicId(id) {
  return request({
    url: '/playlist/detail',
    params: {
     id 
    }
  })
}