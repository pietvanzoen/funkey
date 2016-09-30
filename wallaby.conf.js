module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.js',
      'test/matchers.js'
    ],
    tests: [
      'test/**/*.spec.js'
    ]
  };
};
