import Vue from 'vue'
import Vuex from 'vuex'

import menu from '../config/menu'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    menu,
    sidebar: {
      opened: false
    }
  },

  mutations: {

  }
})

export default store
