const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        "options": path.resolve("./src/controllers/optionsController.js"),
        "frontend": path.resolve("./src/controllers/frontendController.js"),
        "background" : path.resolve("./src/controllers/backgroundController.js"),
        "popup" : path.resolve("./src/controllers/popupController.js")
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/(node_modules)/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins : [
        new CleanWebpackPlugin(['dist'])
    ],
    devtool: 'source-map'
};