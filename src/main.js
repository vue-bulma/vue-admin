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
import Plotly from './components/pages/Charts/Plotly'
import Typography from './components/pages/UI/Typography'
import Buttons from './components/pages/UI/Buttons'
import Icons from './components/pages/UI/Icons'

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
  '/charts/plotly': {
    name: 'Plotly',
    component: Plotly
  },
  '/ui/typography': {
    name: 'Typography',
    component: Typography
  },
  '/ui/buttons': {
    name: 'Buttons',
    component: Buttons
  },
  '/ui/icons': {
    name: 'Icons',
    component: Icons
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
