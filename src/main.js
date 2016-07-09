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

const lazyLoading = (path, ext = '.vue') => {
  return (resolve) => {
    require([`${path}${ext}`], resolve)
  }
}

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
    component: lazyLoading('./components/pages/Charts/ChartJs')
  },
  '/charts/chartist': {
    name: 'Chartist',
    component: lazyLoading('./components/pages/Charts/Chartist')
  },
  '/charts/peity': {
    name: 'Peity',
    component: lazyLoading('./components/pages/Charts/Peity')
  },
  '/charts/plotly': {
    name: 'Plotly',
    component: lazyLoading('./components/pages/Charts/Plotly')
  },
  '/ui': {
    name: 'UI',
    component: lazyLoading('./components/pages/UI/index'),
    subRoutes: {
      '/typography': {
        name: 'Typography',
        component: lazyLoading('./components/pages/UI/Typography')
      },
      '/buttons': {
        name: 'Buttons',
        component: lazyLoading('./components/pages/UI/Buttons')
      },
      '/icons': {
        name: 'Icons',
        component: lazyLoading('./components/pages/UI/Icons')
      },
      '/form': {
        name: 'Form',
        component: lazyLoading('./components/pages/UI/Form')
      },
      '/notifications': {
        name: 'Notifications',
        component: lazyLoading('./components/pages/UI/Notifications')
      },
      '/messages': {
        name: 'Messages',
        component: lazyLoading('./components/pages/UI/Messages')
      },
      '/progress': {
        name: 'Progress',
        component: lazyLoading('./components/pages/UI/Progress')
      },
      '/modals': {
        name: 'Modals',
        component: lazyLoading('./components/pages/UI/Modals')
      },
      '/tooltips': {
        name: 'Tooltips',
        component: lazyLoading('./components/pages/UI/Tooltips')
      },
      '/tabs': {
        name: 'Tabs',
        component: lazyLoading('./components/pages/UI/Tabs')
      },
      '/collapses': {
        name: 'Collapses',
        component: lazyLoading('./components/pages/UI/Collapses')
      },
      '/datepicker': {
        name: 'Datepicker',
        component: lazyLoading('./components/pages/UI/Datepicker')
      },
      '/sliders': {
        name: 'Sliders',
        component: lazyLoading('./components/pages/UI/Sliders')
      }
    }
  },
  '/tables/basic': {
    name: 'BasicTables',
    component: lazyLoading('./components/pages/Tables/Basic')
  },
  '/tables/handsontable': {
    name: 'Handsontable',
    component: lazyLoading('./components/pages/Tables/Handsontable')
  }
})

router.redirect({
  '/ui': '/ui/typography',
  '*': '/dashboard'
})

router.start(App, 'app')
