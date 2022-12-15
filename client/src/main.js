import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import store from './store'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as VIcons from "oh-vue-icons/icons";
import Paginate from "vuejs-paginate-next";

const Vi = Object.values({ ...VIcons })
addIcons(...Vi);

const app = createApp(App)
app.use(router)
app.use(Paginate)
app.use(store)
app.component('v-icon', OhVueIcon)

app.mount('#app')
