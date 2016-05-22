var webpack = require('webpack'),
    WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().extend('./webpack/common.config.js').merge({
    //devtool: 'cheap-module-eval-source-map',
    module: {
      loaders: [{
          test: /\.scss$/,
          loader: 'style!css?localIdentName=[path][name]--[local]!postcss-loader!sass'
      }]
    },
    postcss: function () {
        return [require('autoprefixer'), require('precss')];
    },
    entry: [
      'webpack-hot-middleware/client',
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    profile: true,
    stats: {
      hash: true,
      version: true,
      timings: true,
      assets: true,
      chunks: true,
      modules: true,
      reasons: true,
      children: true,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: true
    },
});
