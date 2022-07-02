import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";
import ChatRoom from "@/views/ChatRoom.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: WelcomeView,
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatRoom,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
