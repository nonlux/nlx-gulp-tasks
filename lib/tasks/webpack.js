'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = webpackBuild;

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PWD = process.env.PWD;

var config = require(_path2.default.join(PWD, 'webpack.config.js'));
function webpackBuild() {
  return new _promise2.default(function (resolve, reject) {
    (0, _webpack2.default)(config, function (err, stats) {
      if (err) reject(err);
      console.log("[webpack]", stats.toString({}));
      resolve();
    });
  });
}
module.exports = exports['default'];