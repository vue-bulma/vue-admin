import Vue from 'vue'
import Router from 'vue-router'
import menuModule from 'vuex-store/modules/menu'
import store from '../store'
Vue.use(Router)

const router = new Router({
  mode: 'history', // Demo is living in GitHub.io, so required! hash
  history: true,
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Home',
      path: '/',
      meta: {auth: true},
      component: require('../views/Home')
    },
    {
      name: 'Users',
      path: '/users',
      meta: {auth: true},
      component: require('../views/auth/Users')
    },
    {
      name: 'Schedule',
      path: '/schedule',
      meta: {auth: true},
      component: require('../views/schedule/Index')
    },
    {
      name: 'Termservice',
      path: '/termservice',
      component: require('../views/terms/Index')
    },
    {
      name: 'Login',
      path: '/login',
      component: require('../views/auth/Login')
    },
    {
      name: '404',
      path: '/404',
      component: require('../views/page404')
    },
    ...generateRoutesFromMenu(menuModule.state.items),
    {
      path: '*',
      redirect: '/'
    }
  ]
})

/* Progendo rota */
router.beforeEach((to, from, next) => {
  // if (to.path === '/termservice') {
  //   return next()
  // }
  if (!store.state.user.id && to.path !== '/login') {
    return router.push('/login')
  }
  next()
})

export default router

// Menu should have 2 levels.
function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (!item.component) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}
