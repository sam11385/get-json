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

// Watch
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('scss/**/*.scss', function(event) {
      gulp.run('sass');
      gulp.run('minify-css');
    });

    // // Watch .js files
    // gulp.watch('src/scripts/**/*.js', function(event) {
    //   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    //   gulp.run('scripts');
    // });

});


gulp.task('default', function() {})
