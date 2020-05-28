import Vuex from 'vuex'
import Vue from 'vue'
import worldtotal from './modules/worldtotal'
import listcountry from './modules/listcountry'
import indtotal from './modules/indtotal'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    worldtotal,
    listcountry,
    indtotal
  }
})
