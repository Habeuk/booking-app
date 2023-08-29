import './assets/styles/main.scss'
import store from './store'
import { app_id, calendar_selector, save_data_selector, schedule_selector } from './app-configs'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Vcalendar from 'v-calendar'

const application = document.getElementById(app_id)
if (application.getAttribute(calendar_selector)) {
  store.commit('SET_STEP_URL', { url: application.getAttribute(calendar_selector), index: 0 })
}
if (application.getAttribute(schedule_selector)) {
  store.commit('SET_STEP_URL', { url: application.getAttribute(schedule_selector), index: 1 })
}
if (application.getAttribute(save_data_selector)) {
  store.commit('SET_STEP_URL', { url: application.getAttribute(save_data_selector), index: 2 })
}
const myApp = createApp(App, {
  mounted() {
    // merged options exposed on this.$options
  }
})
myApp.use(store)
myApp.use(PrimeVue)
myApp.use(Vcalendar, {})
myApp.mount('#app')
