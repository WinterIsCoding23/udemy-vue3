import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '../src/assets/base.css'
import '../src/assets/main.css'

import VeeValidatePlugin from './includes/validation'
import { auth } from './includes/firebase'

let app

auth.onAuthStateChanged(() => {
  // we check if the app already has initialized
  // ...if yes, we dont need to initialize it again
  // needed bc we want to be able to check if the user has been authenticated when the app starts
  // --> for this, we need to start firebase before the app! (which we are doing here with the onAuthStateChanged-function)
  if (!app) {
    app = createApp(App)

    // all plugins - like Pinia - must be registered (via .use-method) before mounting the app
    app.use(createPinia())
    app.use(router)
    app.use(VeeValidatePlugin)

    app.mount('#app')
  }
})
