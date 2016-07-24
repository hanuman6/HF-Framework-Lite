/*npm module*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnext = require('gulp-cssnext');

/*path*/
var paths = {
  'scss': './',
  'css': './'
}

/*task*/
gulp.task('scss', function() {
  return gulp.src(paths.scss + '**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(cssnext({
        compress: false,
        browsers: 'last 5 versions'
    }))
    .pipe(gulp.dest(paths.css))
});

/*watch*/
gulp.task('default', function() {
  gulp.watch([paths.scss + '**/*.scss'], ['scss']);
});