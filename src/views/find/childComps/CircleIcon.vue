<template>
  <ul>
    <li v-for="(item, index) in circleIcon" :key="index" @click="goCorrespondRoute(index)">
      <img :src="item.iconUrl" alt="" />
      <span>{{ item.name }}</span>
    </li>
    <!-- 不能使用父子组件传值??? -->
    <!-- <daily-rec :dailyS="dailyS" v-show="false"></daily-rec> -->
  </ul>
</template>

<script>
import { getDailySongs, DailySongs } from "@/network/dailyrec.js";
export default {
  components: {},
  name: "CircleIcon",
  data() {
    return {
      dailyS: [],
    };
  },
  props: {
    circleIcon: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    goCorrespondRoute(index) {
      console.log(123);
      if (index === 0) {
        this.$router.push("/find-dailyrec");
        getDailySongs(this.$store.state.cookie, index).then((res) => {
          let data = res.data.dailySongs;
          for (let i = 0; i < data.length; i++) {
            this.dailyS[i] = new DailySongs(data[i].al, data[i].ar, data[i].name, data[i].id);
          }
          console.log(this.dailyS);
          this.$store.commit("getDailySongs", this.dailyS);
        });
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  width: 100vw;
  overflow: auto;
  padding: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
/* chorme 隐藏滚动条 */
ul::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
ul li {
  /* 解除 flex 的自动默认不可放大子元素问题 */
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 14vw;
  margin: 0 10px;
  /* background-color: blue; */
  /* height: 30vh; */
  /* 因为 li 的高度不是固定死的,所以 justify-content 也可以不设置 */
  /* justify-content: center; */
  align-items: center;
}
img {
  width: 100%;
  border-radius: 50%;
  background-color: red;
  color: red;
}
span {
  margin-top: 7px;
  font-size: 12px;
  color: black;
}
</style>
