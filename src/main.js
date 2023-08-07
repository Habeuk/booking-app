import 'primevue/resources/themes/lara-light-indigo/theme.css'
import './assets/main.css'
import 'v-calendar/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Vcalendar from 'v-calendar'
createApp(App).use(PrimeVue).use(Vcalendar, {}).mount('#app')
