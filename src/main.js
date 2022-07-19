import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import "vue-toast-notification/dist/theme-sugar.css";

import App from "./App.vue";
import router from "@/router";

const pinia = createPinia().use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(router).use(pinia);

app.mount("#app");
