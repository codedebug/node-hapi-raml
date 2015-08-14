var babel = require('babel');

module.exports = function () {
    return {
        files: [
            'src/**/*.js',
            'test/*.raml'
        ],

        tests: [
            'test/**/*.test.js'
        ],

        preprocessors: {
            '**/*.js': file => require('babel').transform(file.content, {sourceMap: true})
        },
        env: {
            type: 'node'
        },
        workers: {
            recycle: true
        }
    };
};
