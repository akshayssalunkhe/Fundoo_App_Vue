import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../components/LoginPage'
import DashBoard from '../components/DashBoard'

Vue.use(Router)
export default new Router({
    mode:"history",
    routes: [
        {
            path:'/login',
            name:'login',
            component:LoginPage,
        },
        {
            path:'/dashBoard',
            name:'dashBoard',
            component:DashBoard
        }
    ]
})