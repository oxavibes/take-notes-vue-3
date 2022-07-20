import App from "./App.vue";
import router from "@/router";
import { createApp } from "vue";
import { createPinia } from "pinia";

import "vue-toast-notification/dist/theme-sugar.css";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

/* import the fontawesome core */
import { library, dom } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faTrashCan, faPlusSquare, faPenToSquare } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faTrashCan, faPlusSquare, faPenToSquare);

const pinia = createPinia().use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(router).use(pinia);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
