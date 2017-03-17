var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-clean-css');

gulp.task('sass', function(){
  return gulp.src('scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist'));
});

// Watch
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('scss/**/*.scss', function(event) {
      gulp.run('sass');
    });

    // // Watch .js files
    // gulp.watch('src/scripts/**/*.js', function(event) {
    //   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    //   gulp.run('scripts');
    // });

});


gulp.task('default', function() {})
