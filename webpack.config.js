const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '/client/public');
const APP_DIR = path.resolved(__dirname, '/client/app');

let config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;