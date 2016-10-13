/* eslint-env node */
var cfg = require('./package.json').config;
module.exports = function(wallaby) {
  return {
    files: cfg.srcFiles.concat(cfg.testDepFiles),
    tests: cfg.testFiles
  };
};
