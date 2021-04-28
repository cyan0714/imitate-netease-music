<template>
  <div id="lyricpage">
    <ul ref="lyricUL" style="{}">
      <li
        v-for="(item, i) in $store.state.lyric"
        :style="{ color: lyricIndex === i ? 'green' : '#000' }"
        :key="item.uid"
        ref="lyric1"
      >
        {{ item.lyric }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LyricPage",
  data() {
    return {
      // lyric: [],
      lyricIndex: 0,
    };
  },
  mounted() {
    setInterval(() => {
      for (let i = 0; i < this.$store.state.lyric.length; i++) {
        //如果当前歌曲时间大于第 i 行歌词对应的时间
        if (this.$store.state.audioRes.currentTime > parseInt(this.$store.state.lyric[i].time)) {
          // 将该行歌词颜色变色
          this.lyricIndex = i;
          this.$refs.lyricUL.style.transform = `translate(0,${-46 * (i + 1)}px)`;
        }
      }
    }, 500);
  },
  methods: {},
};
</script>

<style lang="less" scoped>
#lyricpage {
  width: 90vw;
  height: 76vh;
  margin: 0 auto;
  padding: 0;

  // background-color: blue;
  text-align: center;
  overflow: auto;
  // position: relative;
  box-sizing: border-box;
  // background-color: pink;
  // box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  ul {
    list-style: none;
    padding: 0;
    margin: 0px;
    margin-top: 40vh;
    transition: transform 3s;
    // backface-visibility: hidden;
    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 80vw;
    li {
      // margin: 3.5vh 0;
      height: 30px;
      margin-bottom: 16px;
      // padding: 15px 0;
      line-height: 30px;
      font-size: 16px;
      // text-shadow: -1px -1px white;
    }
  }
}
</style>
