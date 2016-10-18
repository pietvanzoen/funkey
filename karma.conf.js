/* eslint-env node */
var path = require('path');
var cfg = require('./package.json').config;
var testFiles = [].concat(cfg.testDepFiles, cfg.testFiles);

module.exports = function(config) {
  var karmaConfig = {
    basePath: '',
    frameworks: ['jasmine'],
    files: cfg.srcFiles.concat(testFiles),
    reporters: [
      'progress',
      'junit',
      'coverage'
    ],
    preprocessors: {
      'src/**/*.js': ['coverage']
    },
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
  };

  if (process.env.TEST_DIST) {
    console.log('Testing against dist build');
    karmaConfig.files = ['dist/funkey.min.js'].concat(testFiles);
  }

  if (process.env.COVERALLS_REPO_TOKEN) {
    karmaConfig.reporters.push('coveralls');
    karmaConfig.coverageReporter = {
      type: 'lcov',
      dir: 'coverage'
    };
  }

  config.set(karmaConfig);
};
