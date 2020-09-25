import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../components/LoginPage'
import DashBoard from '../components/DashBoard'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path:'/login',
            name:'login',
            component:LoginPage,
        },
        {
            path:'/DashBoard',
            name:'DashBoard',
            component:DashBoard
        }
    ]
})