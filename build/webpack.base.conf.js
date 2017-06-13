'use strict'

const path = require('path')
const config = require('../config')
const utils = require('./utils')
const projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: {
    app: ['./client/index.js'],
    // If you want to support IE < 11, should add `babel-polyfill` to vendor.
    // e.g. ['babel-polyfill', 'vue', 'vue-router', 'vuex']
    vendor: [
      'vue',
      'vue-router',
      'vuex',
      'vuex-router-sync'
    ]
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.json'],
    alias: {
      // https://github.com/vuejs/vue/wiki/Vue-2.0-RC-Starter-Resources
      // vue: 'vue/dist/vue',
      package: path.resolve(__dirname, '../package.json'),
      src: path.resolve(__dirname, '../client'),
      assets: path.resolve(__dirname, '../client/assets'),
      components: path.resolve(__dirname, '../client/components'),
      views: path.resolve(__dirname, '../client/views'),
      // third-party
      'plotly.js': 'plotly.js/dist/plotly',
      // vue-addon
      'vuex-store': path.resolve(__dirname, '../client/store')
    }
  },
  module: {
    loaders: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        include: projectRoot,
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: require('./vue-loader.conf')
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        // /node_modules\/(?!vue-bulma-.*)/
        exclude: [new RegExp(`node_modules\\${path.sep}(?!vue-bulma-.*)`)]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  // See https://github.com/webpack/webpack/issues/3486
  performance: {
    hints: false
  }
}
