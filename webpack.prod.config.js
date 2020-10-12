const webpack = require('webpack');

module.exports = function() {
  let prodConfig = Object.assign({}, require('./webpack.common.config'));
prodConfig.plugins.push( new webpack.DefinePlugin({
        'process.env': {
            'API_KEY': JSON.stringify(process.env.API_KEY),
            'TITLE': JSON.stringify(process.env.TITLE)
        }
    }
  ));
  console.log('\x1b[36m%s\x1b[0m', 'Building for production ...');
  return prodConfig;
};