import { createApp } from 'vue'
import './style.css'
import 'vue3-toastify/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3Toasity from 'vue3-toastify'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Vue3Toasity, {
  multiple: false
})
app.mount('#app')
