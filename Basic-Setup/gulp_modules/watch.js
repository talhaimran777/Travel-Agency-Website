const { watch } = require("gulp"),
onCssChange = require('./styles'),
onHtmlChange = require('./watch_html');
browserObj = require('./browser'),
onScriptsChange = require('./scriptsChange');


function watchAll(cb){
    browserObj.startServer();
    watch('./app/assets/styles/**/*.css', onCssChange);
    watch('./app/index.html', onHtmlChange);
    watch('./app/assets/scripts/**/*.js', onScriptsChange);
    cb();
}

module.exports = watchAll;