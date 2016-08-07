'use strict'
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const config = require('./webpack.base')
const pkg = require('../package')

config.entry.vendor = Object.keys(pkg.dependencies).filter(name => {
  // update the code if you want to
  // remove some dependencies you don't need in the vendor bundle
  return true
})
config.output.filename = '[name].[chunkhash:8].js'
config.plugins.push(
  new ProgressBarPlugin(),
  new ExtractTextPlugin('styles.[contenthash:8].css'),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    comments: false
  }),
  // extract vendor chunks
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.[chunkhash:8].js'
  })
)

config.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    loader: 'css-loader!postcss-loader',
    fallbackLoader: 'style-loader'
  })
})
config.vue.loaders.css = ExtractTextPlugin.extract({
  loader: 'css-loader',
  fallbackLoader: 'vue-style-loader'
})

module.exports = config