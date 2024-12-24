// webpack webpack-bundle-analyzer webpack-cli webpack-dev-server webpack-merge uglifyjs-webpack-plugin

// shared config (dev and prod)
const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  context: resolve(__dirname, '../../src'),
  entry: [
    './index.tsx',
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader', { loader: 'eslint-loader', options: { fix: true } }],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', { loader: 'eslint-loader', options: { fix: true } }],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i, // images
        use: ['file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]'],
      },
      {
        test: /\.(otf)$/i, // fonts
        use: ['file-loader?hash=sha512&digest=hex&name=fonts/[hash].[ext]'],
      },
      {
        test: /\.(ttf)$/i, // fonts
        use: ['file-loader?hash=sha512&digest=hex&name=fonts/[hash].[ext]'],
      },
      {
        test: /\.(pdf)$/i, // resume
        use: ['file-loader?hash=sha512&digest=hex&name=resume/[hash].[ext]'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: 'assets/img/favicon.ico',
    }),
    new CompressionPlugin(),
  ],
  performance: {
    hints: false,
  },

  output: {
    filename: 'js/[name].[hash].bundle.min.js',
    chunkFilename: 'js/[name].[hash].bundle.min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  optimization: {
    chunkIds: 'named',
    moduleIds: 'named',
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ],
    runtimeChunk: {
      // use manifest for component splitting
      name: 'manifest',
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          // split out node modules
          name: 'vendor',
          chunks: 'all',
          priority: -20,
          test: /node_modules/,
        },
      },
    },
  },
  devtool: 'source-map',
};
