import * as types from './mutation-types'

export const toggleSidebar = ({ commit }, opened) => commit(types.TOGGLE_SIDEBAR, opened)

export const toggleDevice = ({ commit }, device) => commit(types.TOGGLE_DEVICE, device)

export const setRecord = ({ commit }, record) => {
  commit(types.RECORD, record)
}

export const setUser = ({ commit }, user) => {
  commit(types.AUTH, user)
}

export const setScheduleList = ({ commit }, schedule) => {
  commit(types.SCHEDULE_LIST, schedule)
}

export const setProceDoneList = ({ commit }, proceDone) => {
  commit(types.PROCEDONE_LIST, proceDone)
}

export const setExamDoneList = ({ commit }, examDone) => {
  commit(types.EXAMDONE_LIST, examDone)
}

export const expandMenu = ({ commit }, menuItem) => {
  if (menuItem) {
    menuItem.expanded = menuItem.expanded || false
    commit(types.EXPAND_MENU, menuItem)
  }
}

export const switchEffect = ({ commit }, effectItem) => {
  if (effectItem) {
    commit(types.SWITCH_EFFECT, effectItem)
  }
}
