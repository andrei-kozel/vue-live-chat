import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";
import ChatRoom from "@/views/ChatRoom.vue";
import { auth } from "@/firebase/config";
import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

const requireAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const user = auth.currentUser;
  if (!user) {
    next({ name: "home" });
  } else {
    next();
  }
};

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
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
