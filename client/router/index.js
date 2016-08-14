import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      component: require('../views/Home')
    }
  ]
})
