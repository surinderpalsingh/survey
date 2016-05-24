var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  jshint = require('gulp-jshint'),
  sass = require('gulp-sass'),
  gulpNgConfig = require('gulp-ng-config'),
  del = require('del');


var paths = {
  scripts: './public/js',
  sass: './public/sass',
  css: './public/css',
};


gulp.task('sass', function () {
  gulp.src(paths.scripts)
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest(paths.css))
    .pipe(livereload());
});

gulp.task('lint', function() {
    return gulp.src(paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


gulp.task('watch', function() {
  gulp.watch(paths.sass +'*.scss',['lint','sass']);
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js coffee jade',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'sass',
  'develop',
  'watch'
]);
