'use strict';

var gulp = require('gulp');
var scss = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var shorthand = require('gulp-shorthand');
var cleancss = require('gulp-clean-css');
var mediaQ = require('gulp-group-css-media-queries');
var rename = require('gulp-rename');

gulp.task('style', function () {
    return gulp.src('./scss/**/*.scss', { sourcemaps: true })
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest('./css',  { sourcemaps: '.' }));
});
gulp.task('optimize', function () {
    return gulp.src('./scss/**/*.scss', { sourcemaps: true })
        .pipe(scss().on('error', scss.logError))
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(mediaQ())
        .pipe(cleancss())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('./css', { sourcemaps: '.' }));
});
gulp.task('default', function () {
    gulp.watch('./scss/**/*.scss', gulp.parallel('style'));
});