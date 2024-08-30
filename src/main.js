import { createApp } from 'vue'
import App from './App.vue'
import NaiveUi from 'naive-ui'
import router from "@/routers.js";

createApp(App)
    .use(router)
    .use(NaiveUi)
    .mount('#app')
