import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/main.scss";
import "@/assets/reset.scss";
import router from "./router";
import { createPinia } from "pinia";

const Apps = createApp(App);
Apps.use(router);
Apps.use(createPinia());
Apps.mount("#app");
