'use strict';

const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`
  },
  module: {
    loaders: [
      {
        test:/\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test:/\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      { //my addition
        test: /\.(gif|png|jpe?g|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: `${__dirname}/app/index.html`,
    })
  ]
};
