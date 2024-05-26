import './assets/main.css'
// ,引入Elementplus组件库
import ElementPlus from 'element-plus'
// 引入组件库全局样式
import 'element-plus/dist/index.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 这里的App报错是没有装这个TypeScript Vue Plugin插件
import App from './App.vue'



const app = createApp(App)
app.use(createPinia())
app.mount('#app')
// 注册组件库
app.use(ElementPlus)
