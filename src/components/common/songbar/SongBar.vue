<template>
  <div class="song-bar" @click="songBarClick()">
    <slot name="pic"></slot>
    <div class="text">
      <slot name="favorite"></slot>
      <slot name="count"> </slot>
    </div>
  </div>
</template>
<script>
import { getCorMusicId } from "@/network/userlist/playlist";
export default {
  name: "SongBar",
  data() {
    return {
      singleSongId: [],
    };
  },
  props: {
    songListId: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  methods: {
    songBarClick() {
      if (this.songListId !== 0) {
        getCorMusicId(this.songListId).then((res) => {
          //防止重复点击歌单时添加同样歌曲的 id 到 singleSongId
          if (this.singleSongId.length === 0) {
            res.playlist.trackIds.forEach((item) => {
              this.singleSongId.push(item.id);
            });
          }
          //把每个歌单对应的歌曲 id 数组返回给对应的父组件(MyCount)
          this.$emit("childSendId", this.singleSongId);
        });
      } else {
        //由于我喜欢的音乐可能过多, 所以不能像获取我创建的歌单那样获取每首歌的 id,
        //因此如果用户登录后就直接调用对应的接口获取我喜欢音乐里歌曲的 id 并存到 vuex,然后这里直接 commit
        this.$store.commit("getSingleSongId", this.$store.state.likeList);
        // console.log("已提交到 vuex");
      }
      this.$router.push("/songlist-detail");
    },
  },
};
</script>
<style scoped lang="less">
.song-bar {
  width: 90vw;
  height: 10vh;
  padding-left: 3.5vw;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 8px;
  .text {
    display: flex;
    width: 60vw;
    flex-direction: column;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
