import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import NoticeView from "@/views/NoticeView.vue";
import LoginView from "@/views/LoginView.vue";
import JoinView from "@/views/JoinView.vue";
import NoticeList from "@/components/notice/NoticeList";
import NoticeWrite from "@/components/notice/NoticeWrite";
import NoticeDetail from "@/components/notice/NoticeDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/notice",
    component: NoticeView,
    children: [
      {
        path: "",
        name: "notice-list",
        component: NoticeList,
      },
      {
        path: "write",
        name: "notice-write",
        component: NoticeWrite,
      },
      {
        path: "detail",
        name: "notice-detail",
        component: NoticeDetail,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/join",
    name: "join",
    component: JoinView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
