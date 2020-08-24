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
    .on('error', function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(dest('./app/assets/styles/css/'))
    .pipe(browserSync.stream());
}

function onHtmlChange(cb){
    browserSync.reload();
    cb();
}

function watchAll(cb){
    browserSync.init({
        notify: false,
        server: {
           baseDir: 'app', 
        }
    }); 
    watch('./app/assets/styles/postcss/**/*.css', onCssChange);
    watch('./app/index.html',onHtmlChange);
    cb();
}

exports.default = watchAll;