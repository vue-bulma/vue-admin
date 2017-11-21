import * as types from '../../mutation-types'
import lazyLoading from './lazyLoading'
import charts from './charts'
import uifeatures from './uifeatures'
import components from './components'
import tables from './tables'

// show: meta.label -> name
// name: component name
// meta.label: display label

const state = {
  items: [
    {
      name: '示例',
      meta: {
        label: '示例',
        icon: 'fa-laptop',
        expanded: false
      },
      children: [
        {
          name: 'Dashboard',
          path: '/dashboard',
          meta: {
            icon: 'fa-tachometer',
            link: 'dashboard/index.vue'
          },
          component: lazyLoading('dashboard', true)
        },
        {
          name: 'Axios',
          path: '/axiosDemo',
          meta: {
            auth: true,
            icon: 'fa-rocket',
            link: 'axios/index.vue'
          },
          component: lazyLoading('axios', true)
        },
        charts,
        uifeatures,
        components,
        tables
      ]
    }
  ]
}

const mutations = {
  [types.EXPAND_MENU] (state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[menuItem.index] && state.items[menuItem.index].meta) {
        state.items[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
  },
  [types.EXPAND_MENU2] (state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[0].children[menuItem.index] && state.items[0].children[menuItem.index].meta) {
        state.items[0].children[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
  }
}

export default {
  state,
  mutations
}
