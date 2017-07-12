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
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({use: ['css-loader', 'sass-loader']})
      },
      {
        test: /\.otf$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ['.js', '.jsx' ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'public/css/bundle.css',
      allChunks: true
    })
  ]
};
