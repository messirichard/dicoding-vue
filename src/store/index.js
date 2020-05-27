import Vuex from 'vuex'
import Vue from 'vue'
import worldtotal from './modules/worldtotal'
import listcountry from './modules/listcountry'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    worldtotal,
    listcountry
  }
})
