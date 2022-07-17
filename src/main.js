import { createApp } from "vue";
import { createPinia } from "pinia";

import "vue-toast-notification/dist/theme-sugar.css";

import App from "./App.vue";
import router from "@/router";

createApp(App).use(router).use(createPinia()).mount("#app");
