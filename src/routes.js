import {createWebHistory,createRouter} from 'vue-router'
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Login from './components/Login.vue'

const routes=[
    {
        name : 'Home',
        path: '/',
        component: Home
    },
    {
        name : 'Profile',
        path: '/profile/:name',
        component: Profile
    },
    {
        name : 'Login',
        path: '/login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;