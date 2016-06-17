import './init'

import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import NProgress from 'nprogress'

Vue.use(Router)
Vue.use(Resource)

import './transitions'

const makeComponent = (path) => {
  return (resolve) => {
    require([path], resolve)
  }
}

import App from './App'
import Dashboard from './components/pages/Dashboard/'

const router = new Router({
  saveScrollPosition: true,
  transitionOnLoad: true,
  linkActiveClass: 'is-active'
})

Vue.http.interceptors.push(() => {
  return {
    request (request) {
      NProgress.inc(0.2)
      return request
    },

    response (response) {
      NProgress.done()
      return response
    }

  }
})

router.beforeEach(({ next }) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

router.map({
  // '/login': {
  //   name: 'Login',
  //   component: Login
  // },
  '/dashboard': {
    name: 'Dashboard',
    component: Dashboard
  },
  // http://router.vuejs.org/en/lazy.html
  '/charts/chartJs': {
    name: 'ChartJs',
    component: makeComponent('./components/pages/Charts/ChartJs')
  },
  '/charts/chartist': {
    name: 'Chartist',
    component: makeComponent('./components/pages/Charts/Chartist')
  },
  '/charts/peity': {
    name: 'Peity',
    component: makeComponent('./components/pages/Charts/Peity')
  },
  '/charts/plotly': {
    name: 'Plotly',
    component: makeComponent('./components/pages/Charts/Plotly')
  },
  '/ui/typography': {
    name: 'Typography',
    component: makeComponent('./components/pages/UI/Typography')
  },
  '/ui/buttons': {
    name: 'Buttons',
    component: makeComponent('./components/pages/UI/Buttons')
  },
  '/ui/icons': {
    name: 'Icons',
    component: makeComponent('./components/pages/UI/Icons')
  },
  '/ui/form': {
    name: 'Form',
    component: makeComponent('./components/pages/UI/Form')
  },
  '/ui/notifications': {
    name: 'Notifications',
    component: makeComponent('./components/pages/UI/Notifications')
  },
  '/ui/messages': {
    name: 'Messages',
    component: makeComponent('./components/pages/UI/Messages')
  },
  '/ui/progressbars': {
    name: 'ProgressBars',
    component: makeComponent('./components/pages/UI/ProgressBars')
  }
})

router.redirect({
  '*': '/dashboard'
})

router.start(App, 'app')

/* eslint-disable no-new */
/*
new Vue({
  el: 'body',
  components: { App }
})
*/
