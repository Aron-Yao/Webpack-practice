var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var svgoConfig = require('./svgo-config.json')

// 路径仍然是以配置文件的路径为相对路径的 ？？？？
const projectPath = path.resolve(__dirname, '../../')
const srcPath = path.resolve(projectPath, '/src')
const assetsPath = path.resolve(projectPath, '/assets')
const entryPath = path.resolve(projectPath, '/src/main.js')
const outputPath = path.resolve(projectPath, '/public')
const templatePath = path.resolve(projectPath, '/template/index.html')

module.exports = {
  entry: {
    app: entryPath
  },
  output: {
    path: outputPath,
    filename: '[name].[hash].js'
  },
  resolve: {
    // 当require或者import找不到时，按先后顺序尝试这些后缀
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': srcPath,
      'assets': assetsPath
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.svg$/,
        loader: 'svgo?' + JSON.stringify(svgoConfig)
      }
    ],
    loaders: [
      {
        test: /\.svg$/,
        include: /assets\/svg/,
        loader: 'svg-sprite'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: outputPath + '/index.html',
      template: outputPath + '/index.html',
      inject: true
    })
  ]
}