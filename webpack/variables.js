/* helpers */
path = require('path');
merge = require('webpack-merge');

/* paths */
appPath = path.join(__dirname, '../app'); // source code of application
appFile = 'app.js';
appIndexHtml = 'index.html';

buildPath = path.join(__dirname, '../www'); // build path, it is uses by both production build and development build

dllManifestPath = path.join(buildPath, '..'); // path to dll manifest file
dllManifestName = 'vendor';
dllManifestFile = '.' + dllManifestName + '-dll-manifest.json'; // dll manifest file name

vendorPath = path.join(buildPath, '/vendor'); // static files, copy files to the path only by CopyWebpackPlugin
vendorFile = "dll." + dllManifestName + ".js";

/* webpack plugins */
CopyWebpackPlugin = require('copy-webpack-plugin');
HappyPack = require('happypack');
HtmlWebpackPlugin = require('html-webpack-plugin');
NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
webpack = require('webpack');
WebpackConfig = require('webpack-config');
