const path = require('path');
const webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'evel-source-map',
  entry:{
    app:[
      './src/index.js',
    ]
  },
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'www/'),
    publicPath:"/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
          },
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader:'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './src'))+"&prefix=."
          },
          {
            loader: 'html-loader'
          }
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
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new ExtractTextPlugin({
      filename: "./css/styles.css",
      disable: false,
      allChunks: true
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./www/dll/manifest.json')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    inline: true,
    contentBase: path.join(__dirname, "www"),
    hot: true,
    index: 'index.html',
    setup(app){
      app.get('/cordova.js', function(req, res) {
        res.setHeader('Content-Type', 'application/javascript');
        res.write('');
        res.end('');
      });
    }
  },
};
