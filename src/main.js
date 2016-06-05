import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

Vue.use(Router)
Vue.use(Resource)

const router = new Router()

import App from './App'
import Dashboard from './components/pages/Dashboard/'
import ChartJs from './components/pages/Charts/ChartJs'
import Chartist from './components/pages/Charts/Chartist'
import Typography from './components/pages/UI/Typography'

router.map({
  // '/login': {
  //   name: 'Login',
  //   component: Login
  // },
  '/dashboard': {
    name: 'Dashboard',
    component: Dashboard
  },
  '/charts/chartJs': {
    name: 'ChartJs',
    component: ChartJs
  },
  '/charts/chartist': {
    name: 'Chartist',
    component: Chartist
  },
  '/ui/typography': {
    name: 'Typography',
    component: Typography
  }
})

router.redirect({
  '/': '/dashboard'
})

router.start(App, 'app')

/* eslint-disable no-new */
/*
new Vue({
  el: 'body',
  components: { App }
})
*/
