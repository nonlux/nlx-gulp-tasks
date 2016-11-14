'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = browserSync;

var _browserSync = require('browser-sync');

var _browserSync2 = _interopRequireDefault(_browserSync);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _stripAnsi = require('strip-ansi');

var _stripAnsi2 = _interopRequireDefault(_stripAnsi);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function browserSync() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var PWD = process.env.PWD;

  var webpackConfig = require(_path2.default.join(PWD, 'webpack.config.js'));
  var bundler = (0, _webpack2.default)(webpackConfig);
  var browserSync = _browserSync2.default.create();
  bundler.plugin('done', function (stats) {
    if (stats.hasErrors() || stats.hasWarnings()) {
      return browserSync.sockets.emit('fullscreen:message', {
        title: "Webpack Error:",
        body: (0, _stripAnsi2.default)(stats.toString()),
        timeout: 100000
      });
    }
    browserSync.reload();
  });

  var defaultConfig = {
    server: { baseDir: './dist' },
    files: ['./dist/**.html', './dist/**.css'],
    middleware: [(0, _webpackDevMiddleware2.default)(bundler, {
      publicPath: webpackConfig.output.publicPath,
      stats: { colors: true }
    }), (0, _webpackHotMiddleware2.default)(bundler)]
  };

  browserSync.init((0, _extends3.default)({}, defaultConfig, config));
};
module.exports = exports['default'];