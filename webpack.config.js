const webpack = require('webpack');
const MyPlugin = require('my-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new MyPlugin({
      option1: 'value1',
      option2: 'value2'
    })
  ],
  resolve: {
    alias: {
      'webpack': 'webpack@4.0.0'
    }
  }
};