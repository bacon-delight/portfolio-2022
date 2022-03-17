/* eslint-disable */

import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Ecosphere
import Ecosphere from "vue-ecosphere";

// Internationalization
import { createI18n } from "vue-i18n";
import i18n_config from "./i18n";
const i18n = createI18n(i18n_config);

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Ecosphere);
app.use(i18n);
app.mount("#app");
