const {src, dest, watch} = require('gulp'),
postCss = require('gulp-postcss'),
autoPrefixer = require('autoprefixer'),
simpleVars = require('postcss-simple-vars'),
nestedCss = require('postcss-nested'),
postcssImport = require('postcss-import');


function onCssChange(){
    return src('./app/assets/styles/postcss/*.css')
    .pipe(postCss([postcssImport, autoPrefixer, simpleVars, nestedCss]))
    .pipe(dest('./app/assets/styles/css/'));
}

function watchPostCss(cb){
    watch('./app/assets/styles/postcss/**/*.css', onCssChange);
    cb();
}

exports.default = watchPostCss; 