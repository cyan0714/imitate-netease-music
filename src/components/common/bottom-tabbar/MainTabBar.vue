<template>
  <div id="main-tab-bar">
    <tab-bar-bar>
      <tab-bar-item path="/find" activeColor="red">
        <!-- <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="" /> -->
        <span slot="item-icon" class="find-icon"></span>
        <span slot="item-icon-active" class="find-icon-active"></span>
        <div slot="item-text" class="bt-navbar-text">发现</div>
      </tab-bar-item>
      <tab-bar-item path="/podcast">
        <span slot="item-icon" class="find-icon"></span>
        <span slot="item-icon-active" class="find-icon-active"></span>
        <div slot="item-text" class="bt-navbar-text">播客</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <span slot="item-icon" class="find-icon"></span>
        <span slot="item-icon-active" class="find-icon-active"></span>
        <div slot="item-text" class="bt-navbar-text">我的</div>
      </tab-bar-item>
      <tab-bar-item path="/singing">
        <span slot="item-icon" class="find-icon"></span>
        <span slot="item-icon-active" class="find-icon-active"></span>
        <div slot="item-text" class="bt-navbar-text">K歌</div>
      </tab-bar-item>
      <tab-bar-item path="/cloudvillage">
        <span slot="item-icon" class="find-icon"></span>
        <span slot="item-icon-active" class="find-icon-active"></span>
        <div slot="item-text" class="bt-navbar-text">云村</div>
      </tab-bar-item>
    </tab-bar-bar>
  </div>
</template>

<script>
import TabBarBar from "./TabBar";
import TabBarItem from "./TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBarBar: TabBarBar,
    TabBarItem,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
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
#main-tab-bar {
  color: #bbb;
}
.find-icon {
  font-family: "icomoon";
  font-size: 26px;
  color: #ccc;
}
.find-icon-active {
  font-family: "icomoon";
  color: red;
  font-size: 26px;
}
.bt-navbar-text {
  font-size: 12px;
  /* color: red; */
  /* color: #ccc; */
}
/* .main-tab-bar {
 
} */
</style>
