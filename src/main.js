import config from './config'
import init from './init'

init(config)

import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import NProgress from 'nprogress'
import './transitions'

Vue.use(Router)
Vue.use(Resource)

const makeComponent = (path) => {
  return (resolve) => {
    require([path], resolve)
  }
}

import App from './App'
import Dashboard from './components/pages/Dashboard/'

const { sidebar } = config
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
  if (sidebar.isMobile && sidebar.opened) {
    sidebar.opened = false
  }
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
  '/ui': {
    name: 'UI',
    component: makeComponent('./components/pages/UI/index'),
    subRoutes: {
      '/typography': {
        name: 'Typography',
        component: makeComponent('./components/pages/UI/Typography')
      },
      '/buttons': {
        name: 'Buttons',
        component: makeComponent('./components/pages/UI/Buttons')
      },
      '/icons': {
        name: 'Icons',
        component: makeComponent('./components/pages/UI/Icons')
      },
      '/form': {
        name: 'Form',
        component: makeComponent('./components/pages/UI/Form')
      },
      '/notifications': {
        name: 'Notifications',
        component: makeComponent('./components/pages/UI/Notifications')
      },
      '/messages': {
        name: 'Messages',
        component: makeComponent('./components/pages/UI/Messages')
      },
      '/progress': {
        name: 'Progress',
        component: makeComponent('./components/pages/UI/Progress')
      },
      '/modals': {
        name: 'Modals',
        component: makeComponent('./components/pages/UI/Modals')
      },
      '/tooltips': {
        name: 'Tooltips',
        component: makeComponent('./components/pages/UI/Tooltips')
      },
      '/tabs': {
        name: 'Tabs',
        component: makeComponent('./components/pages/UI/Tabs')
      }
    }
  },
  '/tables/basic': {
    name: 'BasicTables',
    component: makeComponent('./components/pages/Tables/Basic')
  }
})

router.redirect({
  '/ui': '/ui/typography',
  '*': '/dashboard'
})

router.start(App, 'app')
