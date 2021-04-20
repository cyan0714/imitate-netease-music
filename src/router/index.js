import Vue from "vue";
import VueRouter from "vue-router";
const Find = () => import("@/views/find/Find");
const PodCast = () => import("@/views/podcast/PodCast");
const ProFile = () => import("@/views/profile/Profile");
const Singing = () => import("@/views/singing/Singing");
const CloudVillage = () => import("@/views/cloudvillage/CloudVillage");
const SongList = () => import("@/views/songlist/SongList");
const DiscPage = () => import("@/views/discpage/DiscPage");
const LyricPage = () => import("@/views/lyricpage/LyricPage");
const NetMv = () => import("@/components/content/NetMv");
const NetComment = () => import("@/components/content/NetComment");
//1.安装插件
Vue.use(VueRouter);

//2.创建路由对象
const routes = [
  {
    path: "/",
    redirect: "/find",
  },
  {
    path: "/find",
    component: Find,
  },
  {
    path: "/podcast",
    component: PodCast,
  },
  {
    path: "/profile",
    component: ProFile,
  },
  {
    path: "/singing",
    component: Singing,
  },
  {
    path: "/cloudvillage",
    component: CloudVillage,
  },
  {
    path: "/songlist",
    component: SongList,
  },
  {
    path: "/discpage",
    component: DiscPage,
  },
  {
    path: "/lyricpage",
    component: LyricPage,
  },
  {
    path: "/mv",
    component: NetMv,
  },
  {
    path: "/comment",
    component: NetComment,
  },
];

const router = new VueRouter({
  routes,
  // mode: "history",
});

//3.导出
export default router;
