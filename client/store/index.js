import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
import * as actions from './actions'
import * as getters from './getters'
import * as types from './mutation-types'
// import * as mutations from 'mutations'

import app from './modules/app'
import menu from './modules/menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,  // process.env.NODE_ENV !== 'production',
  actions,
  getters,
  modules: {
    app,
    menu
  },
  state: {
    pkg,
    scheduleList: [],
    examsDoneList: [],
    proceDoneList: [],
    recordList: [],
    user: {
      id: '',
      client: '',
      crm: '',
      date: '',
      email: '',
      name: ''
    },
    auth: {
      isLogged: false,
      token: ''
    }
  },
  mutations: {
    [types.RECORD] (store, obj) {
      store.recordList = obj
    },
    [types.AUTH] (store, obj) {
      store.user = obj
    },
    [types.SCHEDULE_LIST] (store, obj) {
      store.scheduleList = obj
    },
    [types.EXAMDONE_LIST] (store, obj) {
      store.examsDoneList = obj
    },
    [types.PROCEDONE_LIST] (store, obj) {
      store.proceDoneList = obj
    }
  }
})

export default store
