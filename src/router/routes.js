import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../components/LoginPage'
import TitleBar from '../components/TitleBar'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path:'/',
            name:'login',
            component:LoginPage,
        },
        {
            path:'/TitleBar',
            name:'TitleBar',
            component:TitleBar
        }
    ]
})