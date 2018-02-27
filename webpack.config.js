const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractCss = new ExtractTextPlugin({
  filename: "./css/bundle.css",
  disable: false,
  allChunks: true
});
const ExtractScss = new ExtractTextPlugin({
  filename: "./css/ionic.app.css",
  disable: false,
  allChunks: true
});

module.exports = {
  devtool: 'evel-source-map',
  entry:{
    app:[
      './src/index.js',
    ]
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'www/'),
    publicPath:"/",
    chunkFilename:'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractCss.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
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
        test:/\.html/,
        loader:"html-loader",
      },
      {
        test: /\.scss$/,
        use: ExtractScss.extract({
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
      },
      {
        test:/\.(jpe?g|png|gif)$/i,
        loader: "url-loader",
        query: {
          limit:100,
          name:"img/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  plugins: [
    ExtractCss,
    ExtractScss,
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./www/dll/manifest.json')
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
      'angular':'angular',
      'window.angular':'angular'
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
