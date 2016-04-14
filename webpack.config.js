var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var EXCLUDE = /node_modules/;

module.exports = {
    //multiple entry
    entry: {
        main: './src/index.js',
        base: ['vue', 'vue-router']
    },
    output: {
        path: './build/',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {compact: false},
                test: /\.jsx?$/,
                exclude: EXCLUDE
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: EXCLUDE
            }
        ]
    },
    vue: {
        loaders:{
            sass: ExtractTextPlugin.extract("css-loader!sass-loader")
        }
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('main.css', { allChunks: true }),
        new webpack.ProvidePlugin({
            Vue: "vue"
        })
    ]
};
