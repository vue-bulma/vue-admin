const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const vueConfig = require('./vue-loader.config')

const ENV = process.env.NODE_ENV || 'development'

const config = {
  devtool: '#source-map',

  entry: {
    app: './client/index.js',
    vendor: ['vue', 'vue-router', 'vuex']
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist/assets')
  },

  resolve: {
    extensions: ['.js', '.vue', '.css', '.json'],
    alias: {
      'assets': path.resolve(__dirname, '../client/assets'),
      // https://github.com/vuejs/vue/wiki/Vue-2.0-RC-Starter-Resources
      // runtime-only
      'vue': 'vue/dist/vue.js',
      'plotly.js': 'plotly.js/dist/plotly.js'
    }
  },

  module: {

    loaders: [

      {
        test: /\.vue$/,
        loaders: ['vue']
      },

      {
        test: /\.js$/,
        loaders: ['babel'],
        // /node_modules\/(?!vue-bulma-.*)/
        exclude: [new RegExp(`node_modules\\${path.sep}\(\?\!vue-bulma-.*\)`)]
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },

      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'fonts/[name].[ext]?[hash:7]'
        }
      }

    ]

  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      vue: vueConfig
    }),
    new HtmlWebpackPlugin({
      title: 'Vue Admin',
      template: path.join(__dirname, '/index.html'),
      filename: (ENV.startsWith('dev') ? '' : '../') + 'index.html',
      inject: true,
      favicon: 'client/assets/logo.png'
    })
  ]

}

module.exports = config
