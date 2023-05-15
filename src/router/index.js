// 引入
import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
/* 引入首页 路由 */

const Router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '',
            name: 'Home',
            redirect: '/searchLocation',
        },
        {
            component:()=>import('@/components/searchInfo/SearchInfo.vue'),
            children:[
            {
                path:'/searchLocation',
                component:()=>import('@/components/searchInfo/SearchLocation.vue'),
            }
            ,{
                path:'/searchContent',
                component:()=>import('@/components/searchInfo/SearchContent.vue'),
            }
            ,{
                path:'/searchSource',
                component:()=>import('@/components/searchInfo/SearchSource.vue'),
            }
            ,{
                path:'/searchStep',
                component:()=>import('@/components/searchInfo/SearchSteps.vue'),
            },
            {   path:'/searchPeople',
                component:()=>import('@/components/searchInfo/SearchPeople.vue'),
            }]
        },
        {
            component:()=>import('@/components/cycleRule/CycleRule.vue'),
            children:[
                {
                    path:'/cycleRule/Usage',
                    component:()=>import('@/components/cycleRule/CycleUsage.vue')
                },
                {
                    path: "/cycleRule/Duration",
                    component: ()=>import("@/components/cycleRule/CycleDuration.vue")
                },
                {
                    path: "/cycleRule/Distance",
                    component: ()=>import("@/components/cycleRule/CycleDistance.vue")
                },
                {
                    path: "/cycleRule/Location",
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
        },
        {
            path: '/*',
            redirect: '/searchInfo/Location'
        }
    ]

})

// 导出
export default Router