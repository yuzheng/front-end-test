var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss =require('gulp-clean-css');
var sourcemap = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');

gulp.task('clean', function(cb){
    return del(['./dist'], cb);
});

gulp.task('default', ['watch'], function(){
    return browserSync.init({
        server: {
            baseDir:'./'
        }
    });
});

gulp.task('images', function(){
    return gulp.src('./src/images/**/*')
            .pipe(imagemin())
            .pipe(gulp.dest('./dist/images/'))
            .pipe(notify('images task complete'));
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
            .pipe(gulp.dest('./dist/css/'))
            .pipe(notify("Found file: <%= file.relative %>!"));
            
});

gulp.task('js', function(){
     return gulp.src('./src/js/**/*')
            .pipe(sourcemap.init())
            .pipe(concat('boudle.js'))
            .pipe(sourcemap.write())
            .pipe(gulp.dest('./dist/js/'))
            .pipe(uglify())
            .pipe(rename({suffix:'.min'}))
            .pipe(gulp.dest('./dist/js/'))
            .pipe(notify("Found file: <%= file.relative %>!"));
});

gulp.task('build', ['css','js','images'], function(){});

gulp.task('reload', function(){
    browserSync.reload();
});

// add gulp.watch
gulp.task('watch', function(){
    gulp.watch(['./src/js/**/*'],['js']);
    gulp.watch(['./src/sass/**/*'],['css']);
    gulp.watch(['./src/images/**/*'],['images']);
    gulp.watch('./dist/**/*',['reload']);  // reload 
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