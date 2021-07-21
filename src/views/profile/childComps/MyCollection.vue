<template>
  <div id="my-collection">
    <div class="my-collection">
      <span class="collection-text">收藏歌单</span
      ><span class="collection-number">({{ subPlaylistCount }}个)</span>
    </div>
    <song-bar
      v-for="(item, index) in collectionCount"
      :key="index"
      :songListId="item.id"
      @childSendId="dadGetId"
    >
      <div slot="pic" class="pic">
        <img :src="item.coverImgUrl" alt="" />
      </div>
      <span slot="favorite" class="favorite">{{ item.name }}</span>
      <span slot="count" class="count">{{ item.trackCount }}首</span>
    </song-bar>
  </div>
</template>
<script>
import SongBar from "../../../components/common/songbar/SongBar.vue";
export default {
  name: "MyCollection",
  components: {
    SongBar,
  },
  data() {
    return {
      collectionCount: [],
      mySingleId: [],
    };
  },
  props: {
    subPlaylistCount: {
      type: Number,
      default() {
        return 2;
      },
    },
    mycount: {
      type: Number,
      default() {
        return 2;
      },
    },
  },
  methods: {
    dadGetId(childValue) {
      this.mySingleId = childValue;
      this.$store.commit("getSingleSongId", this.mySingleId);
      // console.log(this.mySingleId);
      // console.log(this.$store.state.singleSongId);
    },
  },
  activated() {
    setTimeout(() => {
      // 从 vuex 获取 listMessage,登录后(在 Login.vue 组件向 vuex commit 了)就已经获取到 listMessage 了,即每个歌单的图片、id、歌单名字(如: ...喜欢的音乐)、歌曲的数量
      // 不能直接将 vuex 里的值赋给 copListMessage,否则一旦 copListMessage 的值改变, vuex 里的值也会同时改变
      const copListMessage = JSON.parse(JSON.stringify(this.$store.state.listMessage));
      // console.log(this.subPlaylistCount);
      const createList = copListMessage.splice(this.mycount + 1);
      // splice 会改变原数组, 所以 copListMessage 剩下 10 个对象(以本人的歌单为例, listMessage 有 23 个, mycount 为 13 个)
      this.collectionCount = createList;
      // console.log(createList); //有 13 个
    }, 2000);
  },
};
</script>
<style scoped lang="less">
#my-collection {
  margin-top: 2vh;
  margin-bottom: 10vh;
  background-color: #fff;
  border-radius: 8px;
  .my-collection {
    padding: 4vw 3.5vw 2vw;
    font-size: 12px;
    color: #999;
  }
  .pic {
    display: inline-block;
    flex-shrink: 0;
    width: 13vw;
    height: 13vw;
    background-color: gray;
    border-radius: 4px;
    margin-right: 2vw;
    vertical-align: middle;
    border-radius: 8px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
  .favorite {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .count {
    color: #999;
    font-size: 12px;
  }
}
</style>
