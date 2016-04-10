var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './es6/index.js',
    output: {
        path: './build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/             //PRO:  test: '/\.js$/' !!
            }, {
                test: /\.css$/,
                //loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }, {
                test: /\.svg$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('main.css', { allChunks: true })
    ],
    // stats: {
    //     // Nice colored output
    //     colors: true
    // },
    // // Create Sourcemaps for the bundle
    // devtool: 'source-map',
};
