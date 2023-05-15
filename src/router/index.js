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
            component:()=>import("@/components/foreCast/Forecast.vue"),
            children:[
                {
                    path: '/forecast/intro',
                    component:()=>import("@/components/foreCast/ForeIntro.vue")
                },
                {
                    path: '/forecast/learn',
                    component:()=>import("@/components/foreCast/ForeLearn.vue")
                },
                {
                    path: '/forecast/step',
                    component:()=>import("@/components/foreCast/ForeStep.vue")
                },
                {
                    path: '/forecast/epoch',
                    component:()=>import("@/components/foreCast/ForeEpoch.vue")
                },
                {
                    path: '/forecast/outcome',
                    component:()=>import("@/components/foreCast/ForeOutcome.vue")
                }
            ]
        },
        {
            path:'/location',
            name:'location',
            component:()=>import("@/components/Location.vue"),
        },

        {
            path: '/*',
            redirect: '/searchInfo/Location'
        }
    ]

})

// 导出
export default Router