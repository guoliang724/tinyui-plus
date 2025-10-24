import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import TinyButton from '@tinyui-plus/components/button'

const app = createApp(App)

app.use(TinyButton)

app.use(router)

app.mount('#app')
