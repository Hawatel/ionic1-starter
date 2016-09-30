require('./variables.js');

var common = {
  cache: true,
  entry: [ path.join(appPath, appFile) ],
  output: {
    path: buildPath,
    filename: "[name]-[hash:6].js",
    chunkFilename: "[name]-[hash:6].js"
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.(png|jpg|svg)$/, loader: 'file?name=img/[name].[ext]' },
      { test: [/.svg/, /.eot/, /.ttf/, /.woff/, /.woff2/], loader: 'file?name=fonts/[name].[ext]' }
    ]
  },
  postcss: function () {
    return [require('autoprefixer'), require('precss')];
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.html'],
    root: path.resolve(appPath),
    moduleDirectories: ['node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: appIndexHtml,
      template: path.join(appPath, appIndexHtml)
    }),
    new NgAnnotatePlugin({
      add: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
    // copy static files and include files in the app/index.html file
    //new CopyWebpackPlugin([
    //  { from: path.join(__dirname, '../node_modules/jquery/dist/jquery.min.js'), to: vendorPath },
    //])
  ]
};

var development = {
  devtool: 'eval',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'happypack/loader', include: [appPath] },
      { test: /\.css$/, loader: 'style!css?localIdentName=[path][name]--[local]' },
      { test: /\.scss$/, loader: 'style-loader!css-loader?localIdentName=[path][name]--[local]!postcss-loader!sass' }
    ]
  },
  entry: [ 'webpack-hot-middleware/client' ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
      context: path.resolve(buildPath),
      manifest: require(path.join(dllManifestPath, dllManifestFile))
    }),
    new HappyPack({
      loaders: ['babel?cacheDirectory=true']
    })
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
    source: true,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: true
  },
};

var production = {
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: [appPath] },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!postcss-loader!sass' }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};

if (process.env.NODE_ENV === 'development') module.exports = merge(common, development);
else if (process.env.NODE_ENV === 'production') module.exports = merge(common, production);
else console.log('Set NODE_ENV variable to production or development');
