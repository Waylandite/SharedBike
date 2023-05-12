// 引入
import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
/* 引入首页 路由 */

const Router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
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
                path:'Location',
                component:()=>import('@/components/searchInfo/SearchLocation.vue'),
            }
            ,{
                path:'Content',
                component:()=>import('@/components/searchInfo/SearchContent.vue'),
            }
            ,{
                path:'Source',
                component:()=>import('@/components/searchInfo/SearchSource.vue'),
            }
            ,{
                path:'Step',
                component:()=>import('@/components/searchInfo/SearchSteps.vue'),
            },
            {   path:'People',
                component:()=>import('@/components/searchInfo/SearchPeople.vue'),
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
    ]

})

// 导出
export default Router