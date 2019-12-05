const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const webpack = require("webpack")

const VueLoaderPlugin = require('vue-loader/lib/plugin'); //引入这行
// package中设置的变量全部存放在 process.env对象中
const isDev = process.env.NODE_ENV === "development"
const config = {
    target: "web",
    entry: path.join(__dirname,"src/main.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname,"dist/")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [  "vue-loader"]
            },
            {
                test: /\.jsx$/,
                use: [  "babel-loader"]
            },
            {
                test: /\.styl/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    "stylus-loader"
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test:/\.(jpg|png|bmp|gif|jpeg|svg)$/,   
                use:[
                    {
                        loader:'url-loader',
                        options: {
                            limit: 1024,
                            // [name] 原文件名 ，aaa自定义名称，ext扩展名
                            name: "[name]-aaa.[ext]"
                        }
                    },
                    
                ]
            },
            // {
            //     test:/\.js$/,
            //     use:'babel-loader',
            //     exclude:/node_modules/
            // },
        ]
    },
    plugins:[
        new VueLoaderPlugin(), //new一个实例,
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: isDev? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ],
}

if (isDev) {

    config.devtool = "cheap-module-eval-source-map";
    config.devServer = {
        port: 8080,
        // 可以通过ip来访问
        host: "127.0.0.1",
        overlay: {
            // 有错误直接显示在网页上
            errors: true,
        },
        // 没有做映射的地址做映射
        // historyFallback: {

        // },
        // open设置为true时，会自动打开浏览器
        open: true,
        // 更改代码可以从新加载更改过的代码
        // 不加时会刷新页面       
        hot: true
    } ;
    config.plugins.push()  
}

module.exports = config;