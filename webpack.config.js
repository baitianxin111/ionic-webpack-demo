require("babel-register");
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'evel-source-map',
  entry: './src/index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'www/'),
    publicPath:"./"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader:'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './src'))+"&prefix=."
          },
          {
            loader: 'html-loader'
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback:"style-loader",
          use: ['css-loader','sass-loader'],
        })
      },
      {
        test:/\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader',
        query: {
          limit: 500,
          name:"css/fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new ExtractTextPlugin({
      filename: "../css/styles.css",
      disable: false,
      allChunks: true
    })
  ]
};
