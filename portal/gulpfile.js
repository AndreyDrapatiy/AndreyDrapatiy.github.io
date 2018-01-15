'use strict';

// var
var gulp = require('gulp'),
    // concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    
    rename = require("gulp-rename"),
    notify = require("gulp-notify"),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    useref = require('gulp-useref'),
    sourcemaps = require('gulp-sourcemaps'),
    wiredep = require('wiredep').stream;

gulp.task('bower', function () {
    gulp.src('./app/index.html')
        .pipe(wiredep({
            directory: "vendors"
        }))
        .pipe(gulp.dest('./app'));
});

// server connect
gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
});

// html
gulp.task('html', function() {
    return gulp.src('app/index.html')
        .pipe(connect.reload());
});

// css
gulp.task('css', function() {
    return gulp.src('app/sass/main.scss')
        .pipe(autoprefixer('last 5 versions'))
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(rename('main.css'))
        .pipe(gulp.dest('app/css/'))
        .pipe(notify("Done!"))
        .pipe(connect.reload());
});

// watch
gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.scss', ['css'])
    gulp.watch('app/css/*.css', ['css'])
    gulp.watch('app/index.html', ['html'])
});

// default
gulp.task('default', ['connect', 'html', 'css', 'watch']);

// build
gulp.task('useref', function() {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

//img and fontss
gulp.task('fonts:build', function() {
    return gulp.src('app/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts/'))
});
gulp.task('img:build', function() {
    return gulp.src('app/img/**/*.*')
        .pipe(gulp.dest('dist/img/'))
});

gulp.task('build', ['useref', 'fonts:build', 'img:build']);