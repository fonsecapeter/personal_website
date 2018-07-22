// production config
const merge = require('webpack-merge');
const { resolve } = require('path');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: {
    app: './index.tsx',
    vendor: ['react', 'react-dom', 'react-router-dom'],
  },
  output: {
    filename: 'js/[name].[hash].bundle.min.js',
    chunkFilename: 'js/[name].[hash].bundle.min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [],
});
