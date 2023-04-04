//每个vue应用都通过此创建应用实例
import { createApp } from 'vue'

//每个应用都需要一个根组件其他组件作为子组件
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入 router
import router from './router/index'

import axios from "axios";

axios.defaults.baseURL = '/api'//在所有请求前填加前缀

//该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串： 返回根组件实例
// const app= createApp(App).use(router).mount('#app')
// app.use(ElementPlus)
const app = createApp(App)
app.use(ElementPlus)
app.use(router).mount('#app')

app.config.globalProperties.$axios=axios;  //配置axios的全局引用

//注册组件 使得他所有地方都可以用
// app.component('helloworld', HelloWorld)

//允许多个应用实例挂载到一个页面上

