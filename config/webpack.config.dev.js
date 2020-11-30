const  webpackMerge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base')

const webpackConfig = webpackMerge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: { children: false } //webpack输出的日志消息我们不希望能传递出来
})

module.exports = webpackConfig