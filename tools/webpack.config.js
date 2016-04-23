import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

let EXCLUDE = /node_modules/;

export default {
    //multiple entry
    entry: {
        main: './src/index.js'
    },
    output: {
        path: './build/',
        filename: '[name]_[hash].bundle.js'
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
