const webpack = require('webpack');
const path = require('path');

module.exports = {
  output: {
    // 将会生成./ddl/lib.js文件
    path: path.resolve(__dirname, 'www/dll'),
    filename: '[name].js',
    library: '[name]',
  },
  entry: {
    "lib": [
      'jquery',
      'echarts',
      'angular',
      'angular-ui-router',
      'angular-animate',
      'angular-sanitize',
      './src/ionic',
    ],
  },
  plugins: [
    new webpack.DllPlugin({
      // 生成的映射关系文件
      path: 'www/dll/manifest.json',
      name: '[name]',
      context: __dirname,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
};
