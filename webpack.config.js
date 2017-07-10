var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./jsx/peter_fonseca.jsx', './sass/main.scss'],
  output: {
    filename: "./public/js/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1'
        }),
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.otf$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx" ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'public/css/bundle.css',
      allChunks: true
    })
  ]
};
