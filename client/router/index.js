import Vue from 'vue'
import Router from 'vue-router'

import menu from './menu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: require('../views/Home')
    },
    ...generateRoutesFromMenu(menu),
    {
      path: '*',
      redirect: '/'
    }
  ]
})

function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    generateRoutesFromMenu(item.children, routes)
  }
  return routes
}
