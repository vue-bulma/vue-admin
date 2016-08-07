'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const postcss = [
  require('autoprefixer')({
    browsers: ['last 2 versions', 'ie > 8']
  })
]

module.exports = {
  entry: {
    client: './client/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist/assets'),
    filename: '[name].js',
    publicPath: './assets'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css', '.json']
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
        exclude: [/node_modules/]
      }
    ]
  },
  babel: {
    babelrc: false,
    presets: [
      ['es2015', { modules: false }],
      'stage-1'
    ],
    plugins: [
      'transform-vue-jsx'
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
      filename: '../index.html'
    })
  ]
}
