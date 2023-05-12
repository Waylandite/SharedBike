// 引入
import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
/* 引入首页 路由 */

const Router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'Home',
            redirect: '/searchInfo',
         },
        {
        path:'/searchInfo',
        name:'searchInfo',
        component:()=>import('@/components/searchInfo/SearchInfo.vue'),
        children:[{
                path:'/searchLocation',
                component:()=>import('@/components/searchInfo/SearchLocation.vue'),
            }
            ,{
                path:'/searchMethod',
                component:()=>import('@/components/searchInfo/SearchMethod.vue'),
            },
            {
                path:'/searchTools',
                component:()=>import('@/components/searchInfo/SearchTools.vue'),
            },
            {   path:'/searchPeople',
                component:()=>import('@/components/searchInfo/SearchPeople.vue'),
            },
            {   path:'/searchHistory',
            component:()=>import('@/components/searchInfo/SearchHistory.vue'),
            }]
        },
    {
        path:'/cycleRule',
        name:'cycleRule',
        component:import('@/components/CycleRule.vue')
    },{
        path:'/forecast',
        name:'forecast',
        component:import("@/components/Forecast.vue")
    }
    ,{
        path:'/location',
        name:'location',
        component:import("@/components/Location.vue")
    }
    ,{
        path:'/dispatch',
        name:'dispatch',
        component:import("@/components/Dispatch.vue")
    }
    ]

})

// 导出
export default Router