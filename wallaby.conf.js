/* eslint-env node */
var srcFiles = require('./package.json').config.srcFiles;
module.exports = function(wallaby) {
  return {
    files: srcFiles.concat([
      'test/matchers.js'
    ]),
    tests: [
      'test/funkey.spec.js'
    ]
  };
};
