var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  devtool: 'inline-source-map',
  context: __dirname,
  entry: {
      rencontres: ['webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr', './js/rencontres/index'],
  },

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js",
      publicPath: 'http://localhost:3000/assets/bundles/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    }),
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  }
}
