import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import UxBase  from '@ux-web-base/components'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).use(ElementPlus).use(UxBase).mount('#app')
