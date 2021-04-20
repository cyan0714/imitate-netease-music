<template>
  <div id="lyricpage">
    {{ $store.state.lyric }}
  </div>
</template>

<script>
export default {
  name: "LyricPage",
  data() {
    return {
      // lyric: [],
    };
  },

  methods: {},
};
</script>

<style scoped>
#lyricpage {
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
</style>
