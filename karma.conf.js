module.exports = (config) => {
  config.set({
    basePath: '.',
    singleRun: true,
    frameworks: ['mocha', 'chai', 'sinon'],
    browsers: ['PhantomJS'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      //ionic.bundle.js will load angular and angular-ui libs too
      'node_modules/ionic-sdk/release/js/ionic.bundle.js',
      'node_modules/ionic-sdk/config/lib/js/angular/angular-mocks.js',
      'tests/**/*.spec.js',
    ],

    reporters: ['dots', 'spec', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    preprocessors: {
      'app/**/*.js': ['webpack', 'coverage'],
      'tests/**/*.spec.js': ['webpack'],
    },

    webpack: {
      resolve: {
        extensions: ['', '.js', '.json'],
        modulesDirectories: ['node_modules', 'app'],
      },
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel' },
          { test: /\.html$/, loader: 'html' },
          { test: /\.json$/, loader: 'json' },
          { test: /\.css$/,  loader: 'style!css' },
          { test: /\.scss$/, loader: 'style!css!postcss-loader!sass' }
        ],
        postLoaders: [{
          test: /\.js/,
          exclude: /(tests|node_modules|bower_components)/,
          loader: 'istanbul-instrumenter'
        }]
      },
    },
    webpackMiddleware: {
      stats: {
        color: true,
        chunkModules: false,
        modules: false,
        errorDetails: true
      },
      noInfo: true
    },

    plugins: [
      'karma-webpack',
      'istanbul-instrumenter-loader',
      'karma-mocha',
      'karma-sinon',
      'karma-chai',
      'karma-coverage',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
    ],

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
  });
};
