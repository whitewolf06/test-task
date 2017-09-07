'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
 
gulp.task('sass', function () {
  return gulp.src('./src/scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename("ui-base.css"))
    .pipe(gulp.dest('./dist/css/'));
});
 
gulp.task('sass:watch', function () {
	gulp.start('sass');
	gulp.watch('./src/scss/**/*.scss', ['sass']);
});