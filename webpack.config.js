var path = require('path');
module.exports = {
  context: __dirname,
  entry: path.join(__dirname, 'js', 'peter_fonseca.jsx'),
  output: {
    path: path.join(__dirname, 'js'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};
