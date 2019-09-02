'use strict';

var gulp = require('gulp');
var scss = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var shorthand = require('gulp-shorthand');
var uncss = require('gulp-uncss');
var cleancss = require('gulp-clean-css');

gulp.task('style', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(uncss({
            html: [
                'http://localhost/GODcss/'
            ]
        }))
        .pipe(cleancss())
        .pipe(gulp.dest('./css'));
});

gulp.task('default', function () {
    gulp.watch('./scss/**/*.scss', gulp.parallel('style'));
});