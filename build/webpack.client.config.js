const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.base.config')
const vueConfig = require('./vue-loader.config')

const config = Object.assign({}, base, {
  plugins: base.plugins.concat([])
})

if (process.env.NODE_ENV !== 'production') {
  config.plugins.push(
    // strip comments in Vue code
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    })
  )

  vueConfig.loaders = {
    stylus: ['vue-style', 'css', 'stylus'].join('!'),
    scss: ['vue-style', 'css', 'sass'].join('!')
  }
}

if (process.env.NODE_ENV === 'production') {
  // naming output files with hashes for better caching.
  // dist/index.html will be auto-generated with correct URLs.
  config.output.filename = '[name].[chunkhash].js'
  config.output.chunkFilename = '[id].[chunkhash].js'

  // Use ExtractTextPlugin to extract CSS into a single file
  // so it's applied on initial render
  const ExtractTextPlugin = require('extract-text-webpack-plugin')

  // vueConfig is already included in the config via LoaderOptionsPlugin
  // here we overwrite the loader config for <style lang="stylus">
  // so they are extracted.
  vueConfig.loaders = {
    stylus: ExtractTextPlugin.extract({
      loader: "css-loader!stylus-loader",
      fallbackLoader: "vue-style-loader" // <- this is a dep of vue-loader
    }),
    scss: ExtractTextPlugin.extract({
      loader: "css-loader!sass-loader",
      fallbackLoader: "vue-style-loader" // <- this is a dep of vue-loader
    })
  }

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin('styles.[contenthash:8].css'),
    // this is needed in webpack 2 for minifying CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // minify JS
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[chunkhash:8].js'
    })
  )
}

module.exports = config
