const {src, dest, watch} = require('gulp'),
postCss = require('gulp-postcss'),
autoPrefixer = require('autoprefixer'),
simpleVars = require('postcss-simple-vars'),
nestedCss = require('postcss-nested'),
postcssImport = require('postcss-import'),
browserSync = require('browser-sync').create();


function onCssChange(){
    return src('./app/assets/styles/postcss/*.css')
    .pipe(postCss([postcssImport, autoPrefixer, simpleVars, nestedCss]))
    .pipe(dest('./app/assets/styles/css/'));
}

function onHtmlChange(cb){
    browserSync.reload();
    cb();
}

function watchAll(cb){
    browserSync.init({
        server: {
           baseDir: 'app', 
        }
    });
    watch('./app/index.html',onHtmlChange);
    //watch('./app/assets/styles/postcss/**/*.css', onCssChange);
    cb();
}

exports.default = watchAll; 