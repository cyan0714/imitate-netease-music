import Vue from "vue";
import VueRouter from "vue-router";
import { store } from "../store/store";

// import { Loading } from "_element-ui@2.15.2@element-ui";
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
const DailyRec = () => import("@/views/find/childComps/circleicon/DailyRec");
const Login = () => import("@/components/common/login/Login");
const SongListDetail = () => import("@/views/profile/childComps/SongListDetail");
const PayLoad = () => import("@/components/common/PayLoad");
// import DailyRec from "@/views/find/childComps/DailyRec";
const originalPush = VueRouter.prototype.push;
//防止重复点击路由报错
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

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
  {
    path: "/find-dailyrec",
    component: DailyRec,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/songlist-detail",
    component: SongListDetail,
  },
  {
    path: "/payload",
    component: PayLoad,
  },
];

const router = new VueRouter({
  routes,
  mode: "hash",
});
//路由跳转时取消上一个页面的网络请求
router.beforeEach(function(to, from, next) {
  store.commit("clearToken"); // 取消请求
  next();
});
//3.导出
export default router;
