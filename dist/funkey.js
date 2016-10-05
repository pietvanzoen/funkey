/**
 * Funkey - Functional keyboard event handler
 * (c) 2016 Piet van Zoen - http://github.com/pietvanzoen/funkey
 * @version 0.0.1
 * @license MIT (http://www.opensource.org/licenses/mit-license.php)
 */
;(function() {
  'use strict';

  var KEY_CODES = {
    'tab': 9,
    'backspace': 8,
    'enter': 13,
    'shift': 16,
    'ctrl': 17,
    'alt': 18,
    'pause': 19,
    'capslock': 20,
    'escape': 27,
    'esc': 27,
    'space': 32,
    'pageup': 33,
    'pagedown': 34,
    'end': 35,
    'home': 36,
    'left': 37,
    'up': 38,
    'right': 39,
    'down': 40,
    'insert': 45,
    'delete': 46,
    '0': 48,
    '1': 49,
    '2': 50,
    '3': 51,
    '4': 52,
    '5': 53,
    '6': 54,
    '7': 55,
    '8': 56,
    '9': 57,
    'a': 65,
    'b': 66,
    'c': 67,
    'd': 68,
    'e': 69,
    'f': 70,
    'g': 71,
    'h': 72,
    'i': 73,
    'j': 74,
    'k': 75,
    'l': 76,
    'm': 77,
    'n': 78,
    'o': 79,
    'p': 80,
    'q': 81,
    'r': 82,
    's': 83,
    't': 84,
    'u': 85,
    'v': 86,
    'w': 87,
    'x': 88,
    'y': 89,
    'z': 90,
    'superleft': 91,
    'superright': 92,
    'select': 93,
    'numpad0': 96,
    'numpad1': 97,
    'numpad2': 98,
    'numpad3': 99,
    'numpad4': 100,
    'numpad5': 101,
    'numpad6': 102,
    'numpad7': 103,
    'numpad8': 104,
    'numpad9': 105,
    'multiply': 106,
    'add': 107,
    'subtract': 109,
    'decimal': 110,
    'divide': 111,
    'f1': 112,
    'f2': 113,
    'f3': 114,
    'f4': 115,
    'f5': 116,
    'f6': 117,
    'f7': 118,
    'f8': 119,
    'f9': 120,
    'f10': 121,
    'f11': 122,
    'f12': 123,
    'numlock': 144,
    'scrolllock': 145,
    'semi-colon': 186,
    ';': 186,
    'equal': 187,
    '=': 187,
    'comma': 188,
    ',': 188,
    'dash': 189,
    '-': 189,
    'period': 190,
    '.': 190,
    'forwardslash': 191,
    '/': 191,
    'graveaccent': 192,
    '`': 192,
    'openbracket': 219,
    '[': 219,
    'backslash': 220,
    '\\': 220,
    'closebraket': 221,
    ']': 221,
    'singlequote': 222,
    '\'': 222
  };

  var MODIFIER_KEYS = {
    shift: 'shiftKey',
    alt: 'altKey',
    super: 'metaKey',
    ctrl: 'ctrlKey'
  };

  var __slice = Array.prototype.slice;
  var FUNKEY_ARITY = funkey.length;

  /**
   * Funkey
   * @param {KeyboardEvent} event The event to test.
   * @param {String} keyString The keyboard string to match.
   * @param {Function} callback Function to invoke on event/keystring match.
   * @return {*} returns result of callback if invoked.
   */
  function funkey(event, keyString, callback) {
    var args = __slice.call(arguments, 0, FUNKEY_ARITY);
    if (args.length === FUNKEY_ARITY) {
      return _funkey.apply(this, args);
    }
    var remainArgs = FUNKEY_ARITY - args.length;
    return arity(remainArgs, function() {
      var newArgs = __slice.call(arguments);
      return funkey.apply(this, args.concat(newArgs));
    });
  }

  function _funkey() {
    var event;
    var keyString;
    var callback;

    var args = __slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
      var arg = args[i];
      if (typeof arg === 'object') {
        event = arg;
        break;
      }
    }
    var eventArgIndex = args.indexOf(event);
    args.splice(eventArgIndex, 1);
    keyString = args[0];
    callback = args[1];

    if (typeof event !== 'object' || typeof keyString !== 'string' || typeof callback !== 'function') {
      throw new Error('[funkey] Invalid call signature. \n' +
        'funkey must be given an event object, a keyString, and a callback function.');
    }

    var eventMatch = {};

    var keys = keyString.split('+');
    var length = keys.length;
    var index = -1;
    while (++index < length) {
      var keyCode = KEY_CODES[keys[index]];
      if (keyCode) {
        eventMatch.keyCode = keyCode;
      }
      var modifier = MODIFIER_KEYS[keys[index]];
      if (modifier) {
        eventMatch[modifier] = true;
      }
      if (!keyCode && !modifier) {
        throw new Error('[funkey] Invalid keyString "' + keyString + '"');
      }
    }

    for (var eventProp in eventMatch) {
      if (!eventMatch.hasOwnProperty(eventProp)) {
        continue;
      }
      if (eventMatch[eventProp] !== event[eventProp]) {
        return;
      }
    }

    return callback.call(this, event);

  }

  function arity(n, fn) {
    switch (n) {
      case 1:
        return function(a1) {
          return fn.apply(this, arguments);
        };
      case 2:
        return function(a1, a2) {
          return fn.apply(this, arguments);
        };
      case 3:
        return function(a1, a2, a3) {
          return fn.apply(this, arguments);
        };
      default:
        throw new Error('Arity ' + n + ' not supported.');
    }
  }

  funkey.KEY_CODES = KEY_CODES;

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
