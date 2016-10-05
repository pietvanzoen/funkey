/**
 * Funkey - Functional keyboard event handler
 * (c) 2016 Piet van Zoen - http://github.com/pietvanzoen/funkey
 * @version {{version}}
 * @license MIT (http://www.opensource.org/licenses/mit-license.php)
 */
;(function() {
  'use strict';

  {{body}}

  if (typeof exports === 'object') {
    module.exports = funkey;
  } else if (typeof define === 'function' && define.amd) {
    define(function() {
      return funkey;
    });
  } else {
    this.funkey = funkey;
  }
}.call(this));
