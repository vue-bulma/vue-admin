import * as types from './mutation-types'

export const mutations = {
  [types.AUTH] (state, user) {
    state.user = user
  },
  [types.SCHEDULE_LIST] (store, obj) {
    store.scheduleList = obj
  },
  [types.EXAMDONE_LIST] (store, obj) {
    store.examDoneList = obj
  },
  [types.PROCEDONE_LIST] (store, obj) {
    store.proceDoneList = obj
  }
}
