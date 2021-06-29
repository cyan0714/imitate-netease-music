<template>
  <div id="mylove">
    <song-bar v-if="!$store.state.loginStatus.hasOwnProperty('id')">
      <div slot="pic" class="pic"></div>
      <span slot="favorite" class="favorite">我喜欢的音乐</span>
      <span slot="count" class="count">0首</span>
    </song-bar>
    <song-bar v-else>
      <div slot="pic" class="pic">
        <img :src="this.$store.state.listMessage[0].coverImgUrl" alt="" />
      </div>
      <span slot="favorite" class="favorite">我喜欢的音乐</span>
      <span slot="count" class="count"
        >{{ $store.state.listMessage && $store.state.listMessage[0].trackCount }}首</span
      >
    </song-bar>
  </div>
</template>
<script>
import SongBar from "../../../components/common/songbar/SongBar.vue";
export default {
  components: { SongBar },
  name: "MyLove",
  data() {
    return {};
  },
};
</script>
<style scoped lang="less">
@font-face {
  font-family: "icomoon";
  src: url("../../../assets/fonts/icomoon.eot?2lm2ws");
  src: url("../../../assets/fonts/icomoon.eot?2lm2ws#iefix") format("embedded-opentype"),
    url("../../../assets/fonts/icomoon.ttf?2lm2ws") format("truetype"),
    url("../../../assets/fonts/icomoon.woff?2lm2ws") format("woff"),
    url("../../../assets/fonts/icomoon.svg?2lm2ws#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
#mylove {
  .pic {
    display: inline-block;
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
  .count {
    color: #999;
    font-size: 12px;
  }
}
</style>
