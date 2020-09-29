import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router/routes'


Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.use(VueMaterial)

export const eventBus = new Vue();


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
