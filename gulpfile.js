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
    .pipe(dest('./app/assets/styles/css/'))
    .pipe(browserSync.stream());
}

function onHtmlChange(cb){
    browserSync.reload();
    cb();
}

/* Not understanding this method right now but everything working fine */
/* function injectCss(onCssChange){
    return src('./app/assets/styles/css/main.css')
    .pipe(browserSync.stream());
} */

function watchAll(cb){
    browserSync.init({
        server: {
           baseDir: 'app', 
        }
    });
    watch('./app/assets/styles/postcss/**/*.css', onCssChange);
    watch('./app/index.html',onHtmlChange);
    cb();
}

exports.default = watchAll; 