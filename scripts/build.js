#!/usr/bin/env node

var buildify = require('buildify');
var _ = require('lodash');

var removeComments = _.partialRight(_.replace, /\s\/[*\/][^\*].*/g, '');
var beautify = _.partialRight(require('js-beautify'), {indent_size: 2}); // eslint-disable-line camelcase
var fixIife = _.partialRight(_.replace, ';\n(function', ';(function');
var formatDist = _.flow(removeComments, beautify, fixIife);

var pkg = require('../package.json');
var srcFiles = pkg.config.srcFiles;
var licenseTemplate = 'scripts/license.tmpl.js';
var licenseOptions = {
  version: pkg.version,
  year: (new Date()).getFullYear()
};

buildify()
  .concat(srcFiles)
  .wrap('scripts/umd.tmpl.js')
  .perform(formatDist)
  .wrap(licenseTemplate, licenseOptions)
  .save('dist/funkey.js')
  .uglify()
  .wrap(licenseTemplate, licenseOptions)
  .save('dist/funkey.min.js');
