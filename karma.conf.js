/* eslint-env node */
var path = require('path');
var cfg = require('./package.json').config;
module.exports = function(config) {
  var karmaConfig = {
    basePath: '',
    frameworks: ['jasmine'],
    files: cfg.srcFiles.concat(cfg.testDepFiles, cfg.testFiles),
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

  if (process.env.COVERALLS_REPO_TOKEN) {
    karmaConfig.reporters.push('coveralls');
    karmaConfig.coverageReporter = {
      type: 'lcov',
      dir: 'coverage'
    };
  }

  config.set(karmaConfig);
};
