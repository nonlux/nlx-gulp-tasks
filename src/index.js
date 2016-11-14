import gulp from 'gulp';
import {
  browserSync,
  less,
} from './tasks';

gulp.task('browsersync', browserSync);
gulp.task('less', less); 

gulp.task('watch',() => {
  gulp.watch('./less/**/*.less',['less']);
});

gulp.task('build', ['less']);
gulp.task('dev', ['build','browsersync', 'watch']);




