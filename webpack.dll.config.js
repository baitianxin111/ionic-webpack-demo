const webpack = require('webpack');
const path = require('path');

module.exports = {
  output: {
    // 将会生成./ddl/lib.js文件
    path: path.resolve(__dirname, 'www/ddl'),
    filename: '[name].js',
    library: '[name]',
  },
  entry: {
    "lib": [
      'jquery',
      'angular',
      'angular-ui-router',
      'angular-animate',
      'angular-sanitize',
      './src/lib/ionic',
    ],
  },
  plugins: [
    new webpack.DllPlugin({
      // 生成的映射关系文件
      path: 'www/manifest.json',
      name: '[name]',
      context: __dirname,
    }),
  ],
};
