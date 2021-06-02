import Vue from 'vue'
import Vuex from 'vuex'
import BHAMap from '@/store/map-module.js'
import BHANav from '@/store/nav-module.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    BHAMap,
    BHANav
  }
})
