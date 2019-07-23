var gulp = require('gulp');
var sass = require('gulp-sass');


sass.compiler = require('node-sass');


gulp.task('sass', function () {
  return gulp.src('main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('.'));
});

//when something changes in main.scss, kick off "sass" task
gulp.task('watch', function () {
    gulp.watch('main.scss', gulp.series('sass'));
});
