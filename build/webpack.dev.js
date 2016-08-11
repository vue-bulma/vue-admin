'use strict'
const webpack = require('webpack')
const config = require('./webpack.base')

config.output.publicPath = '/assets/'
config.entry.app = ['webpack-hot-middleware/client', config.entry.app]
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
)

config.module.loaders.push({
  test: /\.css$/,
  loader: 'style-loader!css-loader!postcss-loader'
})
config.vue.loaders = {
  scss: 'vue-style-loader!css-loader!sass-loader!postcss-loader'
}

module.exports = config
