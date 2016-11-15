var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
var path = require('path');

gulp.task('default', ['less', 'browser-sync'], function () {
    gulp.watch("public/styles/less/*.less", ['less', reload]);
    gulp.watch(["public/scripts/*.js", "views/**/*.ejs"], reload);
});

gulp.task('less', function() {
  return gulp.src('public/styles/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('public/styles/css'));
});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:8080",
        files: ["public/**/*.*"],
        browser: "google chrome",
        port: 7000,
  });
});

gulp.task('nodemon', function (cb) {
  
  var started = false;
  
  return nodemon({
    script: 'app.js'
  }).on('start', function () {
    if (!started) {
      cb();
      started = true; 
    } 
  });
});

gulp.task('test', function() {
  return gulp.src(['public/scripts/*.js', 'spec/specHelper.js', 'spec/**/*_spec.js'])
    .pipe(jasmineBrowser.specRunner({console: true}))
    .pipe(jasmineBrowser.headless());
});

