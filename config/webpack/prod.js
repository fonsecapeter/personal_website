// production config
const { merge } = require('webpack-merge');
// const { resolve } = require('path');
// const CompressionPlugin = require('compression-webpack-plugin');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
});
