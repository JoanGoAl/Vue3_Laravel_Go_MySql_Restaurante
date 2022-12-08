import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


library.add(faUserSecret)
// Use v-calendar & v-date-picker components
const app = createApp(App)
app.use(router)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
