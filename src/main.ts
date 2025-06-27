// src/main.ts
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { loadVoices } from './services/speechService'

// Die problematische CSS-Importzeile wurde entfernt.

const app = createApp(App)

app.use(createPinia())
app.use(router)

loadVoices();

app.mount('#app')
