// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
//
// createApp(App)
//     .use(router)
//     .mount('#app')


// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia' // 导入Pinia
import App from './App.vue'
import router from './router'
// 创建Pinia实例
const pinia = createPinia()

// 创建Vue应用并挂载Pinia
const app = createApp(App)
    .use(router)

app.use(pinia) // 注册Pinia
app.mount('#app')