const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const loader = require('sass-loader')
//const MediaQueryPlugin = require('media-query-plugin');
//const MediaQueryPlugin = require('./plugins/media-query-plugin');


module.exports = {
    output: {
        libraryTarget:'var',
        library:'Client'
    },
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test:/\.scss$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            },
           /* {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    MediaQueryPlugin.loader,
                    'postcss-loader',
                    'sass-loader'
                ]
            },*/
            {
                test: /\.scss$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{loader: 'file-loader'}]
            }
            ]},
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
       /* new MediaQueryPlugin({
            include: [
                'header'
            ],
            queries: {
                'print, screen and (max-width: 599px)': 'mobile',
                'print, screen and (min-width: 600px)': 'desktop'
            }
        }),*/
        new MiniCssExtractPlugin({filename:"[name].css"}),
    ]
}
