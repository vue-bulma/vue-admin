const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const utils = require('./utils')
const projectRoot = path.resolve(__dirname, '../')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    app: './client/index.js',
    vendor: ['vue', 'vue-router', 'vuex']
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: isProduction ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
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
      'plotly.js': 'plotly.js/dist/plotly'
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: ['eslint'],
        include: projectRoot,
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        loader: ['eslint'],
        include: projectRoot,
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        loader: ['vue']
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.js$/,
        loader: ['babel'],
        include: projectRoot,
        // /node_modules\/(?!vue-bulma-.*)/
        exclude: [new RegExp(`node_modules\\${path.sep}\(\?\!vue-bulma-.*\)`)]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      vue: {
        loaders: utils.cssLoaders({
          sourceMap: isProduction,
          extract: isProduction
        }),
        postcss: [
          require('autoprefixer')({
            browsers: ['last 3 versions']
          })
        ]
      }
    })
  ]
}
