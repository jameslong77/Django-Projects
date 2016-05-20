/**
 * Server used in development for es2015 and babel -ification
 */
var webpack = require('webpack');
var config = require('./assets/webpack.config');
var compiler = webpack(config);
var http = require('http');
var express = require('express');
var app = express();

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

if (require.main === module) {
  var server = http.createServer(app);
  server.listen(3000, function() {
    console.log("Listening on %j", server.address());
  });
}
