import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../components/LoginPage'
import DashBoard from '../components/DashBoard'
import Archive from '../components/Archive'
import Notes from '../components/Notes'
import Trash from '../components/Trash'
Vue.use(Router)

function guardMyRoute(to, from, next) {
    var isAuthenticated = false;
    if (localStorage.getItem('token')) {
      isAuthenticated = true;
    } else {
      isAuthenticated = false;
    }
    if (isAuthenticated) {
      next();
    } else {
      next("/");
    }
  }
export default new Router({
    // let router = new Router({
    mode:"history",
    routes: [
        {
            path:'/',
            name:'login',
            component:LoginPage,
            // meta: {
            //     guest: true
            // }
        },
        {
            path:'/dashBoard',
            // name:'dashBoard',
            component:DashBoard,
            beforeEnter: guardMyRoute,
            // meta: {
            //     requiresAuth: true,
            //   },
            children:[
                {
                    path:'/',
                    redirect:'notes',
                    beforeEnter: guardMyRoute 
                },
                {
                    path:'notes',
                    name:'Notes',
                    component:Notes,
                    beforeEnter: guardMyRoute 
                },

               
                {
                    path:'archive',
                    name:'Archive',
                    component:Archive,
                    beforeEnter: guardMyRoute 
                },
                {
                    path:'trash',
                    name:'Trash',
                    component:Trash,
                    beforeEnter: guardMyRoute 
                }

            ]
        },
        
    ]
})
// router.beforeEach((to, from, next) => {
//     if(to.matched.some(record => record.meta.requiresAuth)) {
//         if (localStorage.getItem('token') == null) {
//             next({
//                 path: '/login',
//                 params: { nextUrl: to.fullPath }
//             })
//         } else {
//             let user = JSON.parse(localStorage.getItem('user'))
//             if(to.matched.some(record => record.meta.is_admin)) {
//                 if(user.is_admin == 1){
//                     next()
//                 }
//                 else{
//                     next({ name: 'dashBoard'})
//                 }
//             }else {
//                 next()
//             }
//         }
//     } else if(to.matched.some(record => record.meta.guest)) {
//         if(localStorage.getItem('token') == null){
//             next()
//         }
//         else{
//             next({ name: 'dashBoard'})
//         }
//     }else {
//         next()
//     }
// })

// export default router
  