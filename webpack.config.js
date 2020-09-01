let path = require('path');


module.exports = {
    entry: './app/assets/scripts/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './app/assets/scripts/tempScripts/')
    }
}