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

Vue.http.interceptors.push((request, next) => {
  NProgress.inc(0.2)

  next((response) => {
    NProgress.done()
    return response
  })
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
      }
    }
  },
  '/components': {
    name: 'Components',
    component: lazyLoading('./components/pages/Components/index'),
    subRoutes: {
      '/backtotop': {
        name: 'BackToTop',
        component: lazyLoading('./components/pages/Components/BackToTop')
      },
      '/collapse': {
        name: 'Collapse',
        component: lazyLoading('./components/pages/Components/Collapse')
      },
      '/datepicker': {
        name: 'Datepicker',
        component: lazyLoading('./components/pages/Components/Datepicker')
      },
      '/emoji': {
        name: 'Emoji',
        component: lazyLoading('./components/pages/Components/Emoji')
      },
      '/message': {
        name: 'Message',
        component: lazyLoading('./components/pages/Components/Message')
      },
      '/modal': {
        name: 'Modal',
        component: lazyLoading('./components/pages/Components/Modal')
      },
      '/notification': {
        name: 'Notification',
        component: lazyLoading('./components/pages/Components/Notification')
      },
      '/progress': {
        name: 'Progress',
        component: lazyLoading('./components/pages/Components/Progress')
      },
      '/rating': {
        name: 'Rating',
        component: lazyLoading('./components/pages/Components/Rating')
      },
      '/slider': {
        name: 'Slider',
        component: lazyLoading('./components/pages/Components/Slider')
      },
      '/switch': {
        name: 'Switch',
        component: lazyLoading('./components/pages/Components/Switch')
      },
      '/tabs': {
        name: 'Tabs',
        component: lazyLoading('./components/pages/Components/Tabs')
      },
      '/tooltip': {
        name: 'Tooltip',
        component: lazyLoading('./components/pages/Components/Tooltip')
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
