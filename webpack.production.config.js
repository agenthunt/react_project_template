var webpack = require('webpack');
var commonConfig = require('./webpack.common.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var loaders = [{
  test: /\.js$/,
  loaders: ['babel', require.resolve('react-style-syntax')],
  exclude: [/node_modules/, /dependencies/]
}];

module.exports = {
  entry: [
    './src/js/config/production.js',
    './src/js/bootstrap.js',
    './src/index.html',
  ],
  output: {
    path: path.join(__dirname, '/assets'),
    publicPath: '',
    filename: 'js/bundle.js'
  },
  target: 'web',
  module: {
    preLoaders: commonConfig.preLoaders,
    loaders: loaders.concat(commonConfig.loaders)
  },
  plugins: [
    new ExtractTextPlugin('css/bundle.css'),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  resolve: {
    alias: {
      config: paht.join(__dirname, '/src/js/config/production.js')
    }
  },
  node: commonConfig.node,
  eslint: commonConfig.eslint
}
