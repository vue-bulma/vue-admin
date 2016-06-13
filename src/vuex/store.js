import Vue from 'vue'
import Vuex from 'vuex'

import menu from '../config/menu'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    menu,
    sidebar: {
      opened: true
    }
  },

  mutations: {

  }
})

export default store
