const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = function() {
  // Adds everything from "common.js" to a new object called prodConfig
  let devConfig = Object.assign({}, require('./webpack.common.config'));
  devConfig.plugins.push(new Dotenv());
  console.log('\x1b[36m%s\x1b[0m', 'Building for development ....');
  return devConfig;
};