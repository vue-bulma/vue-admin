import Vue from 'vue'
import Router from 'vue-router'
import menuModule from 'vuex-store/modules/menu'
Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Home',
      path: '/home',
      auth: true,
      component: require('../views/Home'),
      children: [
        ...generateRoutesFromMenu(menuModule.state.items)
      ]
    },
    {
      name: 'Login',
      path: '/',
      auth: false,
      component: require('../views/auth/Login')
    },
    {
      path: '*',
      component: require('../views/404')
    }
  ]
})

// Menu should have 2 levels.
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
