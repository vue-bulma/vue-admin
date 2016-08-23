import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// lazy loading Components
const Chartjs = resolve => require(['../views/charts/Chartjs.vue'], resolve)

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
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: require('../views/dashboard')
    },
    {
      name: 'Charts',
      path: '/charts',
      meta: {
        expanded: false
      },
      component: require('../views/charts'),
      beforeEnter: (route, redirect, next) => {
        // console.log(233, route)
        next()
      },
      children: [
        {
          name: 'Chartjs',
          path: 'chartjs',
          component: Chartjs,
          beforeEnter: (route, redirect, next) => {
            // console.log(377, route)
            next()
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
