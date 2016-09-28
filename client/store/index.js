import Vue from 'vue'
import Vuex from 'vuex'

import config from './config'
import menu from '../router/menu'

Vue.use(Vuex)

const state = {
  config,
  menu,
  count: 0
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  SIDEBAR (state, status = true) {
    state.config.sidebar = status
  }
}

const actions = {
  INCREMENT ({ commit }) {
    commit('INCREMENT')
  },
  INCREMENT_ASYNC ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  },

  // Sidebar: show, hide, toggle
  SHOW_SIDEBAR ({ commit }) {
    commit('SIDEBAR', true)
  },
  HIDE_SIDEBAR ({ commit }) {
    commit('SIDEBAR', false)
  },
  TOGGLE_SIDEBAR ({ commit, state }) {
    commit('SIDEBAR', !state.config.sidebar)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
