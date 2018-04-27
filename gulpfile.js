var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

gulp.task('sass', function () {
  return gulp.src('./src/styles/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles/css'));
});


gulp.task('css', function () {
  gulp.src('./src/styles/css/**/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./src/styles/min_css'));
});

gulp.task('run', ['sass', 'css']);

gulp.task('watch', function(){
  gulp.watch('./src/styles/sass/**/*.scss', ['sass']);
  gulp.watch('./src/styles/css/*.css', ['css']);
});

gulp.task('default', ['run', 'watch']);