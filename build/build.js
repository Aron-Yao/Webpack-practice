const webpack = require('webpack');
const ora = require('ora');
const argv = require('minimist')(process.argv.slice(2));
const webpackConfig = require('./config/webpack.dev.conf.js');

const spinner = ora('Bunding files...').start();

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
});

