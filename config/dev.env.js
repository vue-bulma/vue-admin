'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: 'http://10.1.1.48:8091',
  DEV_PORT: 8088
})
