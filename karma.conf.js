var path = require('path');
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/*.js',
      'test/*.js',
      'test/*.spec.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: [
      'progress',
      'junit'
    ],
    junitReporter: {
      outputDir: path.resolve((process.env.CIRCLE_TEST_REPORTS || './_test-results'), 'karma')
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'PhantomJS',
      'Chrome',
      'Firefox'
    ],
    singleRun: false,
    concurrency: Infinity
  });
};
