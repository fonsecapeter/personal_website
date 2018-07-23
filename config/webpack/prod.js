// production config
const merge = require('webpack-merge');
const { resolve } = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: {
    app: './index.tsx',
  },
  output: {
    filename: 'js/[name].[hash].bundle.min.js',
    chunkFilename: 'js/[name].[hash].bundle.min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'all',
          priority: -20,
          test: /node_modules/,
        },
      },
    },
  },
  devtool: 'source-map',
  plugins: [new CompressionPlugin()],
});
