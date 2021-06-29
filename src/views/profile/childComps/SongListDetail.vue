<template>
  <div id="song-list-detail">
    <!-- <pay-load v-if="isShowMask"></pay-load> -->
    <song-single-table
      v-for="(item, index) in songDetail"
      :key="index"
      :songDetail="songDetail"
      :index="index"
    >
      <div slot="pic" class="pic">{{ index + 1 }}</div>
      <span slot="favorite" class="favorite">{{ item.songName }}</span>
      <span slot="count" class="count">{{ item.artistsName }}&nbsp;-&nbsp;{{ item.alName }}</span>
      <a
        slot="mvbutton"
        href="javascript:;"
        class="mv"
        v-if="item.mvId !== 0"
        @click.stop="playMv(index)"
        >▶</a
      >
    </song-single-table>
  </div>
</template>
<script>
import { getSingleDetail, getMVUrl } from "@/network/interface";
import SongSingleTable from "../../../components/common/songbar/SongSingleTable.vue";
import PayLoad from "../../../components/common/PayLoad.vue";
export default {
  name: "SongListDetail",
  components: {
    SongSingleTable,
    PayLoad,
  },
  data() {
    return {
      songDetail: [],
      mvUrl: "",
      isShowMv: false,
      songdetail: {},
      isShowstate: true,
      isShowMask: true,
    };
  },
  methods: {
    playMv(index) {
      let rs = this.$store.state.audioRes;
      rs.pause();
      getMVUrl(this.songDetail[index].mvId).then((res) => {
        // console.log(res.data.url);
        this.mvUrl = res.data.url;
        this.isShowMv = !this.isShowMv;
        this.$store.commit("addToMv", [this.mvUrl, this.isShowMv]);
        this.$router.push("/mv");
      });
    },
    async getSingleDetails() {
      // 根据歌曲 id 获取相关信息，每个 id 对应一个对象，若干对象组成 songDetail 数组,使用 await 防止歌曲顺序和 id 顺序不匹配
      for (let i = 0; i < this.$store.state.singleSongId.length; i++) {
        await getSingleDetail(this.$store.state.singleSongId[i]).then((res) => {
          const obj = {};
          obj.alName = res.songs[0].al.name;
          obj.picUrl = res.songs[0].al.picUrl;
          obj.artistsName = res.songs[0].ar[0].name;
          obj.songName = res.songs[0].name;
          obj.mvId = res.songs[0].mv;
          this.songDetail.push(obj);
          // return i;
        });
      }
      this.isShowMask = false;
    },

    formatLyricTime(time) {
      // 格式化歌词的时间 转换成 sss:ms
      const regMin = /.*:/;
      const regSec = /:.*\./;
      const regMs = /\./;
      const min = parseInt(time.match(regMin)[0].slice(0, 2));
      let sec = parseInt(time.match(regSec)[0].slice(1, 3));
      const ms = time.slice(time.match(regMs).index + 1, time.match(regMs).index + 4);
      if (min !== 0) {
        sec += min * 60;
      }
      return Number(sec + "." + ms);
    },
  },
  activated() {
    setTimeout(() => {
      this.getSingleDetails();
    }, 700);
  },
  deactivated() {
    this.songDetail = [];
    // this.isShowMask = true;
  },
};
</script>
<style scoped lang="less">
#song-list-detail {
  margin-bottom: 10vh;
  .pic {
    flex-shrink: 0;
    width: 10vw;
    margin-right: 1vw;
    text-align: center;
    line-height: 10vw;
    font-size: 14px;
    color: #999;
  }
  .favorite {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .count {
    color: #999;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .mv {
    display: block;
    width: 5.5vw;
    height: 5vw;
    border: 1px solid #999;
    border-radius: 7px;
    font-size: 4vw;
    text-align: center;
    line-height: 5vw;
  }
}
</style>
