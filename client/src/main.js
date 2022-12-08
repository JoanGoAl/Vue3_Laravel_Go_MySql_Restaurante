import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import store from './store'

// Use v-calendar & v-date-picker components
const app = createApp(App)
app.use(router)
app.use(store)

// app.use(VueLazyLoad)
app.mount('#app')
