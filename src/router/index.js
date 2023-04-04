// 引入
import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
/* 引入首页 路由 */
import Map from "@/components/Map.vue";
import SearchInfo from "@/components/SearchInfo.vue";
const Router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes:[{
        path:'/',
        name:'searchInfo',
        component:SearchInfo
    },{
        path:'/map',
        name:'map',
        component:Map
    }
    ]

})

// 导出
export default Router