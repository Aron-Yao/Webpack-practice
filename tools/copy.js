import copy from 'copy-files';
import path from 'path';

export default async () => {
    console.log('Copy template file into build directory...');
    let optionObj = {};
    optionObj[__dirname + '']
    await copy({
        files: {
            'index.html':  path.resolve(__dirname, '../index.html')
        },
        dest: path.resolve(__dirname, '../build')
    });
}