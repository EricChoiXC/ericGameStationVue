import Home from "./home/home.vue"
import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const routes = [
    {
        path : '/',
        component : Home
    },
    {
        path : '/home',
        name : 'home',
        compoent : Home
    },
    {
        path : '/test',
        name : 'test',
        component : Home,
        children : [
            {
                path : 'index',
                name : 'index',
                component : "/games/test/index.vue"
            }
        ]
    }
]

const router = createRouter({
    routes,
    history : createWebHashHistory()
})

export default router
