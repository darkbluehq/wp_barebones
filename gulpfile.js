'use strict';

var
  gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  postcss = require('gulp-postcss'),
  watch = require('gulp-watch'),
  concat = require('gulp-concat'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  sourcemaps = require('gulp-sourcemaps'),
  processors = [
    require('postcss-inline-comment'),
    require("postcss-import"),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer-core')({ browsers: ['last 2 versions', '> 2%'] })
  ];

gulp.task('img', function () {
    return gulp.src('./assets/img/full/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('assets/img/'));
});

gulp.task('css', function() {
  return gulp.src('assets/css/style.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('.'));
});

gulp.task('javascript', function() {
  gulp.src(['./assets/js/main.js'])
    .pipe(sourcemaps.init())
    .pipe(concat({ path: 'main.min.js', stat: { mode: '0666' }}))
    .pipe(sourcemaps.write())
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task('default', function () {
  gulp.watch('./assets/css/**/*.css', ['css']);
  gulp.watch('assets/js/*.js', ['javascript']);
  gulp.watch('assets/img/**/*', ['img'])
});
