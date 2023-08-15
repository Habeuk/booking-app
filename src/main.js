import 'primevue/resources/themes/lara-light-indigo/theme.css'
import './assets/main.css'
import 'v-calendar/style.css'
import './assets/styles/main.scss'
import 'primeicons/primeicons.css'
import store from './store'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/scss/_functions.scss'
// import 'bootstrap/scss/_mixins.scss'
// import 'bootstrap/scss/_variables.scss';

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Vcalendar from 'v-calendar'
const myApp = createApp(App, {
  mounted() {
    // merged options exposed on this.$options
    console.log('Application montée')
  }
})
myApp.use(store)
myApp.use(PrimeVue)
myApp.use(Vcalendar, {})
myApp.mount('#app')
