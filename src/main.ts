import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles.css";

// firebase imports
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";

let app: unknown;

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App).use(router).mount("#app");
  }
});
