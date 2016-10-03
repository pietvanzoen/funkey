/* eslint-env node */
var path = require('path');
var srcFiles = require('./package.json').config.srcFiles;
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: srcFiles.concat([
      'test/matchers.js',
      'test/funkey.spec.js'
    ]),
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
