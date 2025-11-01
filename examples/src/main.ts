import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import TinyButton from '@tinyui-plus/components/button'
import TinyCard from '@tinyui-plus/components/card'
import '@tinyui-plus/theme-chalk/src/index.scss'

const app = createApp(App)

app.use(TinyButton)
app.use(TinyCard)

app.use(router)

app.mount('#app')
