const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    devtool: 'evel-source-map',
    entry: {
        app: [
            './src/index.js',
        ]
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'www/'),
        publicPath: "/",
        chunkFilename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /node_modules[\s\S]*\.css$/,
                include: /(node_modules)/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                ]
            },
            {

                test: /www[\s\S]*\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "style-loader/url"
                    },
                    {
                        loader: "file-loader",
                        options: {
                            name: "css/[name].[hash:7].css"
                        }
                    },
                    {
                        loader: "extract-loader",
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                ]
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
                        loader: "html-loader",
                        options: {
                            minimize: true,
                            removeComments: true,//清除HTML注释
                            collapseWhitespace: true,//压缩HTML
                            collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
                            removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
                            removeScriptTypeAttributes: false,//删除<script>的type="text/javascript"
                            removeStyleLinkTypeAttributes: false,//删除<style>和<link>的type="text/css"
                            minifyJS: false,//压缩页面JS
                            minifyCSS: false//压缩页面CSS
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader/url"
                    },
                    {
                        loader: "file-loader",
                        options: {
                            name: "css/[name].[hash:7].css"
                        }
                    },
                    {
                        loader: "extract-loader",
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                query: {
                    limit: 500,
                    name: "css/fonts/[name].[hash:7].[ext]"
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
                test: /\.(jpe?g|png|gif)$/i,
                loader: "url-loader",
                query: {
                    limit: 100,
                    name: "img/[name].[hash:7].[ext]"
                }
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./www/dll/manifest.json')
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            'angular': 'angular',
            'window.angular': 'angular'
        }),
        new htmlWebpackPlugin({
            filename: 'index.html', //通过模板生成的文件名
            template: './www/index.html',//模板路径
            inject: true, //是否自动在模板文件添加 自动生成的js文件链接
            minify: {
                removeComments: true,//清除HTML注释
                collapseWhitespace: true,//压缩HTML
                collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
                removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
                removeScriptTypeAttributes: false,//删除<script>的type="text/javascript"
                removeStyleLinkTypeAttributes: false,//删除<style>和<link>的type="text/css"
                minifyJS: false,//压缩页面JS
                minifyCSS: false//压缩页面CSS
            },
            hash: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "app",

            children: true,
            // (use all children of the chunk)

            async: true,
            // (create an async commons chunk)

            minChunks: 2,
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        inline: true,
        contentBase: path.join(__dirname, "www"),
        hot: true,
        index: 'index.html',
        setup(app) {
            app.get('/cordova.js', function (req, res) {
                res.setHeader('Content-Type', 'application/javascript');
                res.write('');
                res.end('');
            });
        }
    },
};

module.exports = config;
