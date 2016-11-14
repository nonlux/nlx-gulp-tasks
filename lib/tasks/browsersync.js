'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = browserSync;

var _browserSync = require('browser-sync');

var _browserSync2 = _interopRequireDefault(_browserSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function browserSync() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var distPath = ['./dist'];
  var defaultConfig = {
    server: distPath,
    files: distPath
  };

  _browserSync2.default.create().init((0, _extends3.default)({}, defaultConfig, config));
};
module.exports = exports['default'];