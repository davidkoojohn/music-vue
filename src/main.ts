import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import BaseLayout from "./layouts/Base.vue"
import "element-plus/es/components/message/style/css"
import "element-plus/es/components/message-box/style/css"
import "element-plus/es/components/loading/style/css"

import { createPinia } from "pinia"

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.component("base-layout", BaseLayout)
app.mount('#app')
