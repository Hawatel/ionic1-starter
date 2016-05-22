var webpack = require('webpack'),
    WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().extend('./webpack/common.config.js').merge({
    module: {
      loaders: [{
          test: /\.scss$/,
          loader: 'style!css!postcss-loader!sass'
      }]
    },
    postcss: function () {
          return [require('autoprefixer'), require('precss')];
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
});
