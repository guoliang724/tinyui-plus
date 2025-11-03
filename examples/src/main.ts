import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@tinyui-plus/theme-chalk/src/index.scss'
import tinyui from '@tinyui-plus/components'

const app = createApp(App)

// app.use(TinyButton)
// app.use(TinyCard)
app.use(tinyui)

app.use(router)

app.mount('#app')
