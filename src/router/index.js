// 引入
import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
/* 引入首页 路由 */

const Router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'Home',
            redirect: '/searchInfo/Location',
         },
        {
            path:'/searchInfo',
            component:()=>import('@/components/searchInfo/SearchInfo.vue'),
            redirect: '/searchInfo/Location',
            children:[
            {
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
            component:()=>import('@/components/cycleRule/CycleRule.vue'),
            redirect: '/cycleRule/Usage',
            children:[
                {
                    path:'Usage',
                    component:()=>import('@/components/cycleRule/CycleUsage.vue')
                },
                {
                    path: "Duration",
                    component: ()=>import("@/components/cycleRule/CycleDuration.vue")
                },
                {
                    path: "Distance",
                    component: ()=>import("@/components/cycleRule/CycleDistance.vue")
                },
                {
                    path: "Location",
                    component:()=> import("@/components/cycleRule/CycleLocation.vue")
                }
                ]
        },
        {
            path:'/location',
            name:'location',
            component:()=>import("@/components/Location.vue"),
        },
        {
        path:'/forecast',
        name:'forecast',
        component:()=>import("@/components/Forecast.vue")
        }
    ]

})

// 导出
export default Router