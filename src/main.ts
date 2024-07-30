import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

//prime config
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import StyleClass from 'primevue/styleclass'
import 'primeflex/primeflex.css'

import Ripple from 'primevue/ripple'
//vue imports
import App from './App.vue'
import router from './router'

//components
import Button from 'primevue/button'
import Card from 'primevue/card'

const app = createApp(App)

app.directive('styleclass', StyleClass)
app.directive('ripple', Ripple)

app.use(
  PrimeVue,
  {
    theme: {
      preset: Aura
    }
  },
  { ripple: true, style: true }
)

app.component('prime-button', Button)
app.component('prime-card', Card)

app.use(createPinia())
app.use(router)

app.mount('#app')
