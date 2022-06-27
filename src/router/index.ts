import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: WelcomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
