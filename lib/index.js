'use strict';

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _tasks = require('./tasks');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_gulp2.default.task('browsersync', _tasks.browserSync);
_gulp2.default.task('less', _tasks.less);

_gulp2.default.task('watch', function () {
  _gulp2.default.watch('./less/**/*.less', ['less']);
});

_gulp2.default.task('build', ['less']);
_gulp2.default.task('dev', ['build', 'browsersync', 'watch']);