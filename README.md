## Ionic 1 Starter Kit

> <b>:star2: Ionic 1 Starter Kit</b> is a boilerplate which helps you build fast and efficient mobile apps. This is a good place to start your project, or any other project what you need to develop. The boilerplate is built on top of [Node.js](https://nodejs.org/), [Ionic 1.x](http://ionicframework.com/) and [Angular 1.x](https://angularjs.org/). For a development process the <b>Starter Kit</b> uses modern development tools such as [Webpack](http://webpack.github.io/), [Babel](http://babeljs.io/) and [Webpack hot reloading](https://github.com/glenjamin/webpack-hot-middleware).

<p align="center">
<b><a href="#features">Features</a></b>
|
<b><a href="#usage">Usage</a></b>
|
<b><a href="#structure">Structure</a></b>
|
<b><a href="#deployment">Deployment</a></b>
|
<b><a href="#testing">Testing</a></b>
|
<b><a href="#contributing">Contributing</a></b>
|
<b><a href="#license">License</a></b>
</p>

## Features
- [ionic 1](http://ionicframework.com/)
- [cordova](https://cordova.apache.org/)
- [babeljs](https://babeljs.io/)
- [deep-extend](https://github.com/unclechu/node-deep-extend)
- [file-loader](https://github.com/webpack/file-loader)
- unit testing ([karma](https://karma-runner.github.io/0.13/index.html) [chai](http://chaijs.com/) [mocha](https://mochajs.org/) [phantomjs](http://phantomjs.org/))
- [html-loader](https://github.com/webpack/html-loader)
- [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)
- [json-loader](https://github.com/webpack/json-loader)
- [loadash](https://github.com/lodash/lodash)
- [ng-annotate-webpack-plugin](https://github.com/jeffling/ng-annotate-webpack-plugin)
- sass modules ([sass-loader](https://github.com/jtangelder/sass-loader) [css-loader](https://github.com/webpack/css-loader) [style-loader](https://github.com/webpack/style-loader)
[node-sass](https://github.com/sass/node-sass))
- [webpack](https://webpack.github.io/)
- [webpack-config](https://webpack.github.io/docs/configuration.html)
- [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)
- [webpack-hot-middleware](https://webpack.github.io/docs/webpack-dev-middleware.html)


## Installation
```
$ git clone https://github.com/Hawatel/ionic1-starter.git
$ npm install
$ sudo npm install -g cordova@6.1.1
$ sudo npm install -g ionic@1.7.15
$ ionic state restore
```

## Usage

|Command|Description|
|---|---|
|`npm start`|Start development server on `localhost:8080` and for hot reloading `localhost:8080/webpack-dev-server`|
|`npm run build:development`|Compiles the development application to disk (`~/www` by default).|
|`npm run build:production`|Compiles the production application to disk (`~/www` by default).|
|`npm run production`|Start production server on `localhost:8100`|
|`npm run android`|Runs the application on a real devise or on an emulator|
|`npm run ios`|Runs the application on a real devise or on an emulator|

## Structure

The folder structure provided is only meant to serve as a guide, it is by no means prescriptive. It is something that has worked very well for me and my team, but use only what makes sense to you.

```
.
├── app              # Application source code
│   ├── assets            # Global assets (scss, img)
│   ├── components        # Ionic Components
│   ├── config            # Configuration directory
│   │    |── constant.mod.js      # This module loads default application options from json
│   │    ├── default.config.json  # Default application options
│   │    ├── ionic.config.js      # Default config for Ionic
│   │    ├── router.config.js     # Default config for ngRoute
│   │    ├── run.config.js        # Init setup for Ionic
│   ├── shared            # Shared Ionic Components
│   ├── app.js            # Root application file
│   └── index.html        # Root index.html file
├── hooks            # Custom actions for Cordova development process
├── webpack          # Webpack configuration file
└── www              # Build output directory
```

## Deployment
```
$ npm run build:development
```
Compile development application into the 'www' folder
```
$ npm run build:production
```
Compile production application into the 'www' folder

## Testing
```
$ npm test
```

## Origin
This project was built based on the [ios-android-wordpress-ionic-webpack-ES6](https://github.com/shprink/ios-android-wordpress-ionic-webpack-ES6) created by [shprink](https://github.com/shprink).

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md)

## License

The Starter Kit is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).


<p align="right"><a href="#top">:arrow_up:</a></p>
