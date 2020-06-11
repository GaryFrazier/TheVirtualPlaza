var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


var htmlOption = {
    inject: true,
    template: './public/index.html',
    title: "The Virtual Plaza"
}

module.exports = {
    resolve:{
        root:[path.join(__dirname,"src")]
    },
    entry:{
        'main':['./src/main.js']
    },
    output:{
        path:'./dist',
        publicPath:'./',
        filename:'[name].[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.html$/,
                loader: "html"
            },
            {
                test: /\.vue$/,
                loader: "vue"
            },
            {
                test: /\.(png|jpg|ico)$/,
                loader: 'url-loader?limit=8192',
                options: {
                    publicPath: '/'
                }
            }
        ]
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new HtmlWebpackPlugin(htmlOption)
    ]
}
