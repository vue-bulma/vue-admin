import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters'

sync(store, router)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  router,
  store,
  ...App
})

router.beforeEach((route, redirect, next) => {
  const config = app.config
  if (config.mobile && config.sidebar) {
    config.sidebar = false
  }
  next()
})

export {app, router, store}
