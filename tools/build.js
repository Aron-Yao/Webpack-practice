import webpack from 'webpack';
import webpackConfig from './webpack.config.js';
import replace from 'replace';

import clean from './clean.js';
import copy from './copy.js';

var compiler = webpack(webpackConfig);

let bundle = (err, stats) => {
    if (err || stats.compilation.errors.length) {
        console.log('Error when bundle.', err, stats.compilation.errors);
        return;
    }

    console.log('Webpack hash: ', stats.hash);
    //replace file name
    console.log('Replace hashed filename...');
    replace({
        regex: /MAIN_BUNDLE_JS/g,
        replacement: `main_${stats.hash}.bundle.js`,
        paths: ['build'],
        include: 'index.html',
        recursive: true,
        silent: false
    });
}

let build = async () => {
    //clean "build" directory
    await clean();

    //copy template file: index.html
    await copy();

    //build
    await compiler.run(bundle);
}

build();

