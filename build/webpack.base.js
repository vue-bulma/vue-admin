'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const postcss = [
  require('autoprefixer')({
    browsers: ['last 3 versions']
  })
]

module.exports = {
  entry: {
    app: './client/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist/assets'),
    filename: '[name].js',
    publicPath: './assets'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css', '.json'],
    fallback: [path.join(__dirname, '../node_modules')],
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
        loader: 'file',
        query: {
          name: 'img/[name].[ext]?[hash:7]'
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
  postcss,
  vue: {
    loaders: {},
    postcss
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue Admin',
      template: __dirname + '/index.html',
      filename: '../index.html',
      inject: true,
      favicon: 'client/assets/logo.png'
    })
  ]
}
