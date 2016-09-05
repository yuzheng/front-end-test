var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss =require('gulp-clean-css');
var sourcemap = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('images', function(){
    return gulp.src('./src/images/**/*')
            .pipe(imagemin())
            .pipe(gulp.dest('./dist/images/'));
});

gulp.task('css', function(){
    return gulp.src('./src/sass/main.scss')
            .pipe(sourcemap.init())
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(sourcemap.write())
            .pipe(gulp.dest('./dist/css/'))
            .pipe(cleanCss())
            .pipe(rename({suffix:'.min'}))
            .pipe(gulp.dest('./dist/css/'));
            
});

gulp.task('js', function(){
     return gulp.src('./src/js/**/*')
            .pipe(sourcemap.init())
            .pipe(concat('boudle.js'))
            .pipe(uglify())
            .pipe(sourcemap.write())
            .pipe(gulp.dest('./dist/js/'));
});

/*
// 練習#1
// 先執行css,js任務後在執行images
gulp.task('images',['css','js'], function(){
    console.log('images task');
});

gulp.task('css', function(){
    console.log('css task');
});

gulp.task('js', function(){
     console.log('js task');
});
*/