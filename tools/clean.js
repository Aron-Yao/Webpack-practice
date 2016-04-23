import del from 'del';
import path from 'path';

export default async () => {
    console.log('Dump files in build directory...');
    await del([path.resolve(__dirname, '../build/**')]);
};