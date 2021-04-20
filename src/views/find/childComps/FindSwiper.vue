<template>
  <div id="find-swiper">
    <swiper>
      <swiper-item v-for="(item, index) in banners1" :key="index" class="fatherimg">
        <a :href="item.url">
          <img :src="item.pic" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  nmae: "FindSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners1: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
#find-swiper {
  margin-top: 7px;
}
.fatherimg {
  /* 给 banner 图片两边设置空白 */
  padding: 0 7px;
}
img {
  border-radius: 14px;
}
</style>
