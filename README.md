# front-end-test
> 為前端工程課程之實作範例，本程式主要教學 Gulp 之使用．

## 前置處理(開發環境)
- setup `node.js`
- install gulp
    $ sudo npm install -g gulp

## 建立 node project
> npm init

## 建立 gulpfile.js

## Gulp Tasks
There are some examples of gulp tasks like image, css and js. 使用到的gulp api包含task, src 與 dest
- images
  將圖檔進行壓縮後輸出，指令為 gulp images
  - gulp-imagemin - Minify PNG, JPEG, GIF and SVG images 

- css
  將 ./src/sass/ 的sass檔案編譯放至 dist/css/ 底下，指令為 gulp css
  - gulp-sass - SASS plugin for gulp
  - gulp-autoprefixer - Prefix CSS
  - gulp-clean-css - Minify css with clean-css
  - gulp-sourcemaps - Source map support for Gulp.js
  - gulp-rename - Rename files easily

- js
  將 src/js目錄底下的js檔案進行合併，指令為 gulp js
  - gulp-concat - Streaming concat middleware for gulp 
  - gulp-uglify - Minify files with UglifyJS
  - gulp-sourcemaps - Source map support for Gulp.js
  - gulp-rename - Rename files easily

## 整合包裝
- build
  將上述gulp images, css js指令打包，透過gulp build，即可同步執行images, css和js，指令為 gulp images
- clean
  清除建立dist的檔案資料


