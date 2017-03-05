var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

var sass = require('gulp-sass');
gulp.task('sass', function(){
  return gulp.src('scss/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('css/'))
});

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});


gulp.task('default', function() {})
