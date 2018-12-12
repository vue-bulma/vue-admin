import * as types from '../../mutation-types'
import lazyLoading from './lazyLoading'
import charts from './charts'
import uifeatures from './uifeatures'
import components from './components'
import tables from './tables'
import {router} from '../../../app'

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
  },
  [types.APPEND_MENU] (state, menuItem) {
    if (menuItem) {
      menuItem.map(function (item) {
        item.children.map(function (child) {
          child.component = lazyLoading(child.component)
        })
      })
      state.items.push(...menuItem)
      // 动态加载路由关键2行
      router.options.routes[0].children.push(...generateRoutesFromMenu(menuItem))
      router.addRoutes(router.options.routes)
    }
  }
}
function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (!item.component) {
      // item.component = resolve => require([`views/${item.component}.vue`], resolve)
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}
export default {
  state,
  mutations
}
