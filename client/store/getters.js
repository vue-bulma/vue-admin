import { isEmpty } from 'lodash'

const pkg = state => state.pkg
const app = state => state.app
const device = state => state.app.device
const sidebar = state => state.app.sidebar
const effect = state => state.app.effect
const menuitems = state => state.menu.items
const componententry = state => {
  return state.menu.items.filter(c => c.meta && c.meta.label === 'Components')[0]
}
const user = state => state.user
const scheduleList = state => state.scheduleList
const examsDoneList = state => state.examsDoneList
const proceDoneList = state => state.proceDoneList
const isLogged = (state) => !isEmpty(state.crm)

export {
  pkg,
  app,
  device,
  sidebar,
  effect,
  menuitems,
  componententry,
  user,
  isLogged,
  scheduleList,
  proceDoneList,
  examsDoneList
}
