// Karma configuration
module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath : '',

        // list of files / patterns to load in the browser

        frameworks: ['jasmine'],
        files : [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/scripts/*.js',
            'app/scripts/**/*.js',
            'test/mock/**/*.js',
            'test/spec/**/*.js',

            'app/views/*.html'
        ],

        // list of files to exclude
        exclude : [],

        // test results reporter to use
        // possible values: dots || progress || growl
        reporters : ['dots', 'coverage'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'app/scripts/**/*.js': ['coverage'],
            'app/views/**/*.html': 'html2js'
        },
        ngHtml2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: 'app/'
        },
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },

        // web server port
        port : 9876,

        // cli runner port
        runnerPort : 9100,

        // enable / disable colors in the output (reporters and logs)
        colors : true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel : config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch : true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers : ['Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout : 7000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun : false,


        proxies :  {
            '/home': 'http://localhost:8080'
        }
    });
}