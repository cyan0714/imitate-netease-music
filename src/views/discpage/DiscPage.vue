<template>
  <div id="discpage" @click="showLyricPage">
    <img src="@/assets/img/disc.png" alt="" />
    <album-img class="albumPic"></album-img>
    <span class="comment" @click="showComment">查看评论~</span>
  </div>
</template>

<script>
import AlbumImg from "../../components/content/AlbumImg.vue";
export default {
  components: { AlbumImg },
  name: "DiscPage",
  // created(){
  //   this.getSongLyric()
  // },
  methods: {
    showLyricPage() {
      this.$router.push("/lyricpage");
    },
    showComment(e) {
      // 防止冒泡到父元素
      e.stopPropagation();
      this.$router.push("/comment");
      console.log(123);
    },
  },
};
</script>

<style scoped>
#discpage {
  width: 100vw;
  height: 100vh;
  background-color: rgba(199, 237, 233, 0.3);
  /* background-color: rgb(199, 237, 233); */
}
img {
  height: 250px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.albumPic {
  width: 277px;
  position: absolute;
  top: 45%;
  left: 59.5%;
  transform: translate(-50%, -50%);
  /* height: 100px; */
}
.comment {
  /* background-color: cyan; */
  display: block;
  height: 30px;
  width: 90px;
  text-align: center;
  border-radius: 7px;
  line-height: 30px;
  box-shadow: 0px 2px 3px rgba(1, 1, 1, 0.5);
  position: absolute;
  right: 10vw;
  bottom: 30vw;
  color: #888;
}
</style>
