module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            { pattern: 'components/**/*[sS]pec.ts' }
        ],
        preprocessors: {
            '**/*.ts': ['webpack']
        },
        mime: {
            'text/x-typescript': ['ts']
        },
        reporters: ['progress'],
        browsers: ['Chrome'],
        webpack: {
            module: {
                loaders: [{
                    test: /\.ts$/,
                    loader: 'ts-loader'
                }]
            },
            resolve: {
                extensions: ['.ts']
            }
        },
        webpackMiddleware: {
            noInfo: true
        },
        plugins: [
            require('karma-webpack'),
            require('karma-jasmine'),
            require('karma-chrome-launcher')
        ]
    });
};