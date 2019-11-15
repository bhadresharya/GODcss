'use strict';

const gulp = require('gulp');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const shorthand = require('gulp-shorthand');
const cleancss = require('gulp-clean-css');
const mediaQ = require('gulp-group-css-media-queries');
const concat = require('gulp-concat');

gulp.task('style', function () {
    return gulp.src('./scss/**/*.scss', { sourcemaps: true })
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest('./css',  { sourcemaps: '.' }));
});
gulp.task('optimize', function () {
    return gulp.src(
        [
            './scss/style.scss',
            './scss/responsive.scss'
        ], { sourcemaps: true })
        .pipe(scss().on('error', scss.logError))
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(mediaQ())
        .pipe(cleancss())
        .pipe(concat("master.min.css"))
        .pipe(gulp.dest('./css', { sourcemaps: '.' }));
});
gulp.task('default', function () {
    gulp.watch('./scss/**/*.scss', gulp.parallel('style'));
});