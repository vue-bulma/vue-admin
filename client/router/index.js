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
      name: 'Agenda',
      path: '/',
      meta: {auth: true},
      component: require('../views/Home')
    },
    {
      name: 'Usuarios',
      path: '/manager/users',
      meta: {auth: true},
      component: require('../views/auth/Users')
    },
    {
      name: 'Agenda1',
      path: '/schedule',
      meta: {auth: true},
      component: require('../views/schedule/Index')
    },
    {
      name: 'Prontuario',
      path: '/client/record/default',
      meta: {auth: true},
      component: require('../views/client/record/Default')
    },
    {
      name: 'Terms',
      path: '/client/register/terms',
      component: require('../views/client/register/Terms'),
      meta: false
    },
    {
      name: 'Cadastro',
      path: '/client/register/register',
      component: require('../views/client/register/Register')
    },
    {
      name: 'Senha',
      path: '/client/forgetpass',
      component: require('../views/auth/ForgetPassword')
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
  if (to.meta.auth === undefined) {
    return next()
  }
  if ((to.meta.auth !== undefined) || (to.meta.auth !== false) || (to.meta.auth !== undefined)) {
    if (!store.state.user.id && to.path !== '/login') {
      return router.push('/login')
    }
    return next()
  }
  return next()
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
