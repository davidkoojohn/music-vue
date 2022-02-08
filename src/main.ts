import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import BaseLayout from "./layouts/Base.vue"

const app = createApp(App)
app.use(router)
app.component("base-layout", BaseLayout)
app.mount('#app')
