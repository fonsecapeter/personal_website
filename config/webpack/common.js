// shared config (dev and prod)
const webpack = require('webpack');
const { resolve } = require('path');
const SassLintPlugin = require('sasslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'eslint-loader'],
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
        loaders: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i, // images
        loaders: ['file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]'],
      },
      {
        test: /\.(otf)$/i, // fonts
        loaders: ['file-loader?hash=sha512&digest=hex&name=fonts/[hash].[ext]'],
      },
      {
        test: /\.(ttf)$/i, // fonts
        loaders: ['file-loader?hash=sha512&digest=hex&name=fonts/[hash].[ext]'],
      },
      {
        test: /\.(pdf)$/i, // resume
        loaders: ['file-loader?hash=sha512&digest=hex&name=resume/[hash].[ext]'],
      },
    ],
  },
  plugins: [
    new SassLintPlugin(),
    new HtmlWebpackPlugin({
      // manage html imports in webpack
      template: 'index.html.ejs',
      favicon: 'assets/img/favicon.ico',
    }),
  ],
  performance: {
    hints: false,
  },
};
