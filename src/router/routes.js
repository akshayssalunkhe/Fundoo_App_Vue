import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../components/LoginPage'
import DashBoard from '../components/DashBoard'
import Archive from '../components/Archive'
import Notes from '../components/Notes'
import Trash from '../components/Trash'
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
            // name:'dashBoard',
            component:DashBoard,
            children:[
                {
                    path:'/',
                    redirect:'notes'
                },
                {
                    path:'notes',
                    name:'Notes',
                    component:Notes,
                },
                {
                    path:'archive',
                    name:'Archive',
                    component:Archive
                },
                {
                    path:'trash',
                    name:'Trash',
                    component:Trash
                }

            ]
        },
        
    ]
})