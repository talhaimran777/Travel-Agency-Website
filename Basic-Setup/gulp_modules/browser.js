const browser = require('browser-sync').create();

let browserObj = {
    browserVar: browser,
    startServer: function(cb){
        browser.init(
            {
                notify: false,
                server: {
                    baseDir: 'app',
                }
            }
        );
    }
}

module.exports = browserObj;