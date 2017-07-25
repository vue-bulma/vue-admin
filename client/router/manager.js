import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'Gerencia/Agenda',
      path: '/manager/schedule',
      component: require('../views/manager/Schedule')
    }
  ]
})

export default router
