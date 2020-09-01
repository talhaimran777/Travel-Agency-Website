let browserOb = require('./browser');
function changeInHtml(cb){
    browserOb.browserVar.reload();
    cb();
}


module.exports = changeInHtml;