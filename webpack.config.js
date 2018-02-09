const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: './index.ts'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.ts?$/,
            use: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.ts']
    },
};
