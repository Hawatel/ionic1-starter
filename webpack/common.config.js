var path = require('path'),
    appPath     = path.join(__dirname, '../app'),
    buildPath     = path.join(__dirname, '../www'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    NgAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().merge({
    entry: [
      path.join(appPath, 'app.js')
    ],
    output: {
        path: buildPath,
        filename: 'prototype-[hash:6].js'
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(png|jpg|svg)$/,
            loader: 'file?name=img/[name].[ext]'
        }, {
            test: /\.css$/,
            loader: 'style!css?localIdentName=[path][name]--[local]'
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel'
        }, {
            test: [/ionicons\.svg/, /ionicons\.eot/, /ionicons\.ttf/, /ionicons\.woff/],
            loader: 'file?name=fonts/[name].[ext]'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.scss', '.html'],
        root: [
            appPath,
            path.join(__dirname, '../node_modules')
        ],
        moduleDirectories: [
            'node_modules'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(appPath, 'index.html')
        }),
        new NgAnnotatePlugin({
            add: true,
            // other ng-annotate options here
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
    ]
});
