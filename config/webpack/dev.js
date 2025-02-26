// development config
const { merge } = require('webpack-merge');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: '/app/dist',
    },
    compress: true,
    port: 8000,
  },
});
