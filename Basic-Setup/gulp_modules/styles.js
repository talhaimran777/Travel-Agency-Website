const { src, dest } = require("gulp"),
postCss = require('gulp-postcss'),
postCssMixins = require('postcss-mixins'),
autoPrefixer = require('autoprefixer'),
simpleVars = require('postcss-simple-vars'),
nestedCss = require('postcss-nested'),
postcssImport = require('postcss-import'),
browserObj = require('./browser');


function onCssChange(){
    return src('./app/assets/styles/*.css')
    .pipe(postCss([postcssImport, postCssMixins ,autoPrefixer, simpleVars, nestedCss]))
    .on('error', function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(dest('./app/temp_assets/styles/'))
    .pipe(browserObj.browserVar.stream());
}


module.exports = onCssChange;