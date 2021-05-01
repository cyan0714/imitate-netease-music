<template>
  <div id="lyricpage">
    <ul ref="lyricUL">
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
          this.$refs.lyricUL.style.transform = `translate(0,${-44 * (i + 1)}px)`;
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
  text-align: center;
  overflow: auto;
  box-sizing: border-box;

  ul {
    list-style: none;
    padding: 0;
    margin: 0px;
    margin-top: 38vh;
    transition: transform 1s;
    li {
      margin-bottom: 28px;
      font-size: 16px;
    }
  }
}
</style>
