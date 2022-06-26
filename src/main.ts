import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store';
import './styles/index.scss'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import './http/vueRequestConfig'

createApp(App)
  .use(router)
  .use(pinia)
  // .use(ElementPlus, { size: 'small', zIndex: 3000 })
  .mount('#app')
