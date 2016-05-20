/* global __DEVELOPMENT__, __DEVTOOLS__ */
if (__DEVELOPMENT__ && __DEVTOOLS__) {
  module.exports = require('./index.dev');
} else {
  module.exports = require('./index.prod');
}
