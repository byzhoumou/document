// vue3入口文件
import { createApp } from 'vue'
// 优化:由 stores 统一维护，在 stores/index.ts 中完成 pinia 初始化，交付 main.ts 使用
import pinia from './stores'

import App from './App.vue'
// 导入路由
import router from './router'
//导入scss文件
import '@/styles/main.scss'
import 'reset.css'
import './assets/main.css'
const app = createApp(App)

app.use(pinia)
// // 使用路由
app.use(router)
// 挂载app实例
app.mount('#app')
