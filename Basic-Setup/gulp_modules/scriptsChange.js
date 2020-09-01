let startWebpack = require('./webpack'),
browserObj = require('./browser');

function changeInScripts(cb){
    console.log("A change in js has been detected !!");
    startWebpack();
    browserObj.browserVar.reload();
    cb();
}

module.exports = changeInScripts;