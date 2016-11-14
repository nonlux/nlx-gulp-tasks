import gulp from 'gulp';
import runSequence from  'run-sequence';
import del from 'del';
import {
  browserSync,
  less,
} from './tasks';

gulp.task('browsersync', browserSync);
gulp.task('less', less); 

gulp.task('watch',() => {
  gulp.watch('./less/**/*.less',['less']);
});

gulp.task('clean', () => {
  return del('./dist');
});

gulp.task('static', () => {
  return gulp.src('./static/**')
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('build',(done) => {
  runSequence(
    'clean',
    ['static','less'],
    done
  );
});

gulp.task('dev', (done) => {
  runSequence(
    'build',
    ['browsersync', 'watch']
  );
});




