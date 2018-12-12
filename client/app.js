import Vue from 'vue'
import service from './axios'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'
// import NProgress from 'vue-nprogress'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters'
import { TOGGLE_SIDEBAR, APPEND_MENU } from 'vuex-store/mutation-types'

Vue.router = router
Vue.use(VueAxios, service)
Vue.use(VueAuth, {
  auth: {
    request: function (req, token) {
      this.options.http._setHeaders.call(this, req, {Authorization: 'Bearer ' + token})
    },
    response: function (res) {
      // Get Token from response body
      return res.data
    }
  },
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  loginData: { url: '/login', fetchUser: false },
  refreshData: { enabled: false }
})

// Vue.use(NProgress)

// Enable devtools
Vue.config.devtools = true

sync(store, router)

// const nprogress = new NProgress({ parent: '.nprogress-container' })

const { state } = store

const menu = window.sessionStorage.getItem('menu')
// app刷新的时候从本地缓存加载动态菜单
if (window.localStorage.getItem('default-auth-token') && menu) {
  store.commit(APPEND_MENU, JSON.parse(menu))
}
router.beforeEach((route, redirect, next) => {
  if (state.app.device.isMobile && state.app.sidebar.opened) {
    store.commit(TOGGLE_SIDEBAR, false)
  }
  next()
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  router,
  store,
  // nprogress,
  ...App
})

export { app, router, store }
