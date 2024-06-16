import Main from "@/views/Main.vue";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    // 配置主路由
    {
        path:"/",
        component: Main,
        redirect:'/part1',
        children:[
            {
                path:"part1",
                component:()=>import("@/views/PartOneMain.vue")
            },
            {
                path:"part2",
                component:()=>import("@/views/PartTwoMain.vue")
            },
            {
                path:"part3",
                component:()=>import("@/views/PartThreeMain.vue")
            },
        ]
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router