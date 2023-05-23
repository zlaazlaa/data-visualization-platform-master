/**
 * @Date: 2023/5/18
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        redirect: '/home',
        path: '/'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home.vue')
    },
    {
        path: '/predict2',
        name: 'predict2',
        component: () => import('@/views/my_predict.vue')
    },
    {
        path: '/predict',
        name: 'predict',
        component: () => import('@/views/my_predict.vue')
    }
]

/**
 * 定义返回模块
 */
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
