/**
 * Optimising build performance
 *
 * This file is connected with webpack DLLPlugin and DllReferencePlugin. It creates a manifest file in a www directory.
 *
 * A manifest JSON file is written to a specified location which contains mappings from real request to module id.
 * It means that if you have a require/import method in your source code the webpack will go to the /.vendor-dll-manifest.json file
 * and will get a link to the library. The library will be located in a bundle file (www/dll.vendor.js). The bundle will be generated
 * only when you use 'npm start' script so that an incremental build will not compile static libraries from node_modules again.
 *
 * @see https://github.com/webpack/docs/wiki/list-of-plugins#dllplugin
 * @see https://robertknight.github.io/posts/webpack-dll-plugins/
 * @see http://engineering.invisionapp.com/post/optimizing-webpack/
 * @see https://github.com/webpack/webpack/issues/1574
 * @see https://github.com/MoOx/phenomic/issues/532
 */

require('./variables');

var common = {
  entry: {
    vendor: [path.join(appPath, "vendors.js")]
  },
  output: {
    path: buildPath,
    filename: vendorFile,
    library: dllManifestName
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.(png|jpg|svg)$/, loader: 'file?name=img/[name].[ext]' },
      { test: /\.js$/, exclude: /(node_modules)/, loader: 'babel' },
      { test: [/.svg/, /.eot/, /.ttf/, /.woff/, /.woff2/], loader: 'file?name=fonts/[name].[ext]' }
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(dllManifestPath, dllManifestFile),
      name: dllManifestName,
      context: path.resolve(buildPath)
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    root: path.resolve(appPath),
    modulesDirectories: ["node_modules"]
  }
};

var development = {
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css?localIdentName=[path][name]--[local]' },
      { test: /\.scss$/,  loader: 'style-loader!css-loader?localIdentName=[path][name]--[local]!postcss-loader!sass' }
    ]
  },
};

var production = {
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/,  loader: 'style-loader!css-loader!postcss-loader!sass' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};

if (process.env.NODE_ENV === 'development') module.exports = merge(common, development);
else if (process.env.NODE_ENV === 'production') module.exports = merge(common, production);
else console.log('Set NODE_ENV variable to production or development');
