// 引入
import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
/* 引入首页 路由 */
import Map from "@/components/Map.vue";

const Router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes:[{
        path:'/',
        name:'map',
        component:Map
    }]

})

// 导出
export default Router