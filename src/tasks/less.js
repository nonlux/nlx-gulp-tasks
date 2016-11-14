import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import lessEngine from 'postcss-less-engine';
import cssnext from 'postcss-cssnext';
import rename from 'gulp-rename'

export default function less() {
  const defaultPath  = './less/index.less';
  return gulp.src(defaultPath)
    .pipe(sourcemaps.init())
    .pipe(postcss(
      [
        lessEngine({}),
        cssnext(),
      ],
      {
        parser: lessEngine.parser,
      }
    ))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./dist/styles'));
}
