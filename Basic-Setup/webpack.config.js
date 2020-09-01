const path = require('path');
module.exports = {
    entry: './app/assets/scripts/script.js',

    output: {
        filename: 'script.js',

        path: path.resolve(__dirname, './app/temp_assets/scripts/')
    },
    module: {
        rules: [
            { 
                loader: "babel-loader",
                query:{
                    presets: ['@babel/preset-env']
                }, 
                test: /\.js$/, 
                exclude: /node_modules/ 
            }
        ]
    }
}