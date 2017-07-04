import * as types from './mutation-types'

export const mutations = {
  [types.user] (state, user) {
    state.user = user
  }
}
