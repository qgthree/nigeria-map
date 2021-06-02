import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/store'
import VTooltip from 'v-tooltip'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
require('vue-ionicons/ionicons.css')

Vue.use(VTooltip)
Vue.use(PerfectScrollbar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
