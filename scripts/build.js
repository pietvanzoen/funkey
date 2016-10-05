#!/usr/bin/env node

var fs = require('fs');
var R = require('ramda');
var UglifyJS = require('uglify-js');
var jsBeautify = require('js-beautify');
var pkg = require('../package.json');

var readFile = R.partialRight(fs.readFileSync, [{encoding: 'utf8'}]);
var saveFile = R.curry(R.partialRight(fs.writeFileSync, [{encoding: 'utf8'}]));

var beautify = R.pipe(
  R.replace(/\s\/[*\/][^\*].*/g, ''), // remove non-jsdoc comments
  R.partialRight(jsBeautify, [{
    indent_size: 2,
    indent_level: 1,
    max_preserve_newlines: 2,
    brace_style: 'none',
    end_with_newline: true
  }]),
  R.replace(';\n(function(', ';(function(')
);

var wrapTemplate = R.pipe(
  R.replace('{{body}}', R.__, readFile('scripts/build.tmpl.js')),
  R.replace('{{version}}', pkg.version)
);

var uglify = R.pipe(R.partialRight(UglifyJS.minify, [{
  fromString: true,
  output: {comments: /@license/}
}]), R.prop('code'));

var build = R.pipe(
  R.map(readFile),
  R.join('\n'),
  wrapTemplate,
  beautify,
  R.tap(saveFile('dist/funkey.js')),
  uglify,
  saveFile('dist/funkey.min.js')
);

build(pkg.config.srcFiles);
