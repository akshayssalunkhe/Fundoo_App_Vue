import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material'

import VueRouter from 'vue-router'
import LoginPage from './components/LoginPage'
import TitleBar from './components/TitleBar'


Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(VueMaterial)

const routes = [
  {
    path:'/LoginPage',
    component:LoginPage
  },
  
  {
   path:'/TitleBar',
   components:TitleBar
  },
]

const router = new VueRouter(
  {
    routes
  }
)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
