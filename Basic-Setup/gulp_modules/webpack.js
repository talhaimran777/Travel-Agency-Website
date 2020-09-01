let webpack = require('webpack');
function startWebpack(){
    webpack(require('../webpack.config'), function(err, stats){
        if(err){
            console.log(err.toString());
        }

        console.log(stats.toString());
    });
}

module.exports = startWebpack;