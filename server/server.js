import express from 'express';
import path from 'path';

export default async () => {
    let app = express();
    //app.use(express.static('build'));
    app.use(express.static(path.resolve(__dirname, '../build')));       //Factually, Bundled files and template file should be stored in CDN.

    app.listen(8321);
    console.log('server start on port 8321...');
}
