var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: path.resolve(__dirname, 'app/app.jsx'),

    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    //模块配置
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }, {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'postcss-loader'
                    }, {
                        loader: 'less-loader'
                    }
                ]
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                        options: {
                            importLoaders : 1
                        }
                    }, {
                        loader: 'postcss-loader'
                    }
                ]
            }, {
                test: /\.(png|gif|jpg|jpeg|bmp)$/i,
                use: [
                    'url-loader?limit=5000'
                ]
            }, {
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                use: [
                    'url-loader?limit=5000'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        //autoprefixer插件
        /*new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function(){
                    return [
                        require("autoprefixer")({
                            browsers: ['ie>=8','>1% in CN']
                        })
                    ];
                }
            }
        }),
*/
        //html
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html'
        }),
        //热加载插件
        new webpack.HotModuleReplacementPlugin()

    ],
    devServer: {
        proxy: {
            // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
            // koa 代码在 ./mock 目录中，启动命令为 npm run mock
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        },
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        hot: true // 使用热加载插件 HotModuleReplacementPlugin
    }
};
