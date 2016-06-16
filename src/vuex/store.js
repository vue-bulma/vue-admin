import Vue from 'vue'
import Vuex from 'vuex'

import menu from '../config/menu'
import sidebar from '../config/sidebar'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    menu,
    sidebar
  },

  mutations: {

  }
})

export default store
