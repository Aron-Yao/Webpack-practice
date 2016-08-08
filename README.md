Project to practice webpack project config.

## Features that this project includes

* svg icons
> Icons come from [icomoon](https://icomoon.io/)  

* automatically inject bundled javascript file. BY`html-webpack-plugin`
* extract css code to inject into `style` tag. BY`css-loader & style-loader`
* alias. BY 'webpackconfig.resolve.alias', but not support style directory right now

todo

* 热加载
* proxy实现前后端分离
* remove annotation
* uglify
* gulp task to publish static resource to CDN/OSS
* config file in FE
* security: jwt code in http request
* security: XSS defend
* static resource files management
* global variables 

## How to start

* install homebrew

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

* install sass

`sudo brew install sass`

* install packages

`npm install`

* bundle project

`npm run build`
