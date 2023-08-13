import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '../src/assets/base.css'
import '../src/assets/main.css'

import VeeValidatePlugin from './includes/validation'

const app = createApp(App)

// all plugins - like Pinia - must be registered (via .use-method) before mounting the app
app.use(createPinia())
app.use(router)

app.mount('#app')
