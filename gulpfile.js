'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var paths = {
    js: 'src/*.js',
    dist: 'dist'
};

gulp.task('lint', function () {
    return gulp.src(paths.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function () {
    gulp.src(paths.js)
        .pipe(concat('lisp.js'))
        .pipe(gulp.dest(paths.dist))
        .pipe(rename('lisp.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function () {
    gulp.watch('src/*.js', ['lint', 'scripts']);
});

gulp.task('default', [
    'lint',
    'scripts',
    'watch'
]);