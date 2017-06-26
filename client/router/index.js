import Vue from 'vue'
import Router from 'vue-router'
import menuModule from 'vuex-store/modules/menu'
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
      component: require('../views/Home')
    },
    {
      name: 'Login',
      path: '/login',
      component: require('../views/auth/Login')
    },
    ...generateRoutesFromMenu(menuModule.state.items),
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   // if (this.$auth.check() !== true) {
//   //   return router.push('/login')
//   // }
//   next()
// })

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
