import gulp from 'gulp';
import runSequence from  'run-sequence';
import del from 'del';
import {
  browserSync,
  less,
  webpack,
} from './tasks';

gulp.task('browsersync', browserSync);
gulp.task('less', less); 

gulp.task('watch',() => {
  gulp.watch('./less/**/*.less',['less']);
  gulp.watch('./static/**/*',['static']);
});

gulp.task('clean', () => {
  return del('./dist');
});

gulp.task('static', () => {
  return gulp.src('./static/**')
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('webpack', webpack);

gulp.task('build',(done) => {
  runSequence(
    'clean',
    ['static','less', 'webpack'],
    done
  );
});

gulp.task('dev', (done) => {
  runSequence(
    'build',
    ['browsersync', 'watch']
  );
});




