var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var jasmineBrowser = require('gulp-jasmine-browser');

gulp.task('less', function() {
  return gulp.src('./app/styles/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./app/styles/css'));
});

gulp.task('serve', ['less'], function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch(['*.html', 'styles/**/*.css', 'styles/**/*.less', 'scripts/**/*.js'], {cwd: 'app'}, reload);
});
 

gulp.task('test', function() {
  return gulp.src(['app/**/*.js', 'spec/specHelper.js', 'spec/**/*_spec.js'])
    .pipe(jasmineBrowser.specRunner({console: true}))
    .pipe(jasmineBrowser.headless());
});

