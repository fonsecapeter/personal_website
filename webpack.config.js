const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: ['./jsx/peter_fonseca.jsx', './sass/main.scss'],
  output: {
    filename: './public/js/[name].bundle.js',
    chunkFilename: './public/js/[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                minimize: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: loader => [require('autoprefixer')()],
              },
            },
            {
              loader: 'resolve-url-loader',
              options: { sourceMap: true },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true },
            },
          ],
        }),
      },
      {
        test: /\.otf$/,
        loader: 'file-loader',
        query: {
          name: '../fonts/[name].[ext]',
          emitFile: false,
        },
      },
    ],
  },
  devtool: 'eval-cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    // sass -> css`
    new ExtractTextPlugin({
      filename: './public/css/[name].bundle.css',
      allChunks: true,
    }),

    // reduces React's size
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),

    // Extract all imported node_modules into a separate 'vendor' chunk
    // See this article to implement hashing and manifesting
    // https://jeremygayed.com/dynamic-vendor-bundling-in-webpack-528993e48aab
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),

    new UglifyJSPlugin({
      sourceMap: true,
    }),

    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
  stats: { children: false },
};
