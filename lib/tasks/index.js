'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webpack = exports.less = exports.browserSync = undefined;

var _browsersync = require('./browsersync');

var _browsersync2 = _interopRequireDefault(_browsersync);

var _less2 = require('./less');

var _less3 = _interopRequireDefault(_less2);

var _webpack2 = require('./webpack');

var _webpack3 = _interopRequireDefault(_webpack2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.browserSync = _browsersync2.default;
exports.less = _less3.default;
exports.webpack = _webpack3.default;