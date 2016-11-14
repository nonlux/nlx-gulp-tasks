'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = less;

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpSourcemaps = require('gulp-sourcemaps');

var _gulpSourcemaps2 = _interopRequireDefault(_gulpSourcemaps);

var _gulpPostcss = require('gulp-postcss');

var _gulpPostcss2 = _interopRequireDefault(_gulpPostcss);

var _postcssLessEngine = require('postcss-less-engine');

var _postcssLessEngine2 = _interopRequireDefault(_postcssLessEngine);

var _postcssCssnext = require('postcss-cssnext');

var _postcssCssnext2 = _interopRequireDefault(_postcssCssnext);

var _gulpRename = require('gulp-rename');

var _gulpRename2 = _interopRequireDefault(_gulpRename);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function less() {
  var defaultPath = './less/index.less';
  return _gulp2.default.src(defaultPath).pipe(_gulpSourcemaps2.default.init()).pipe((0, _gulpPostcss2.default)([(0, _postcssLessEngine2.default)({}), (0, _postcssCssnext2.default)()], {
    parser: _postcssLessEngine2.default.parser
  })).pipe((0, _gulpRename2.default)('main.css')).pipe(_gulp2.default.dest('./dist/styles'));
}
module.exports = exports['default'];