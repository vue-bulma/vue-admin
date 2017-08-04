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
      path: '/manager/users',
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
      name: 'Record',
      path: '/client/record/default',
      meta: {auth: true},
      component: require('../views/client/record/Default')
    },
    {
      name: 'Terms',
      path: '/client/register/terms',
      component: require('../views/client/register/Terms')
    },
    {
      name: 'Register',
      path: '/client/register/register',
      component: require('../views/client/register/Register')
    },
    {
      name: 'Login',
      path: '/login',
      component: require('../views/auth/Login')
    },
    {
      name: 'Gerencia/Agenda',
      path: '/manager/schedule',
      component: require('../views/manager/Schedule')
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
  if ((to.meta.auth !== undefined) || (to.meta.auth !== true)) {
    if (!store.state.user.id && to.path !== '/login') {
      return router.push('/login')
    }
    next()
  }
  next()
  // console.log(to.meta.auth)
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
