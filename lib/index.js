'use strict';

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _runSequence = require('run-sequence');

var _runSequence2 = _interopRequireDefault(_runSequence);

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

var _tasks = require('./tasks');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_gulp2.default.task('browsersync', _tasks.browserSync);
_gulp2.default.task('less', _tasks.less);

_gulp2.default.task('watch', function () {
  _gulp2.default.watch('./less/**/*.less', ['less']);
  _gulp2.default.watch('./static/**/*', ['static']);
});

_gulp2.default.task('clean', function () {
  return (0, _del2.default)('./dist');
});

_gulp2.default.task('static', function () {
  return _gulp2.default.src('./static/**').pipe(_gulp2.default.dest('./dist'));
});

_gulp2.default.task('webpack', _tasks.webpack);

_gulp2.default.task('build', function (done) {
  (0, _runSequence2.default)('clean', ['static', 'less', 'webpack'], done);
});

_gulp2.default.task('dev', function (done) {
  (0, _runSequence2.default)('build', ['browsersync', 'watch']);
});