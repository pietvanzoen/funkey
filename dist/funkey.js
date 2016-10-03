/**
 * Funkey - Functional keyboard event handler
 * (c) 2016 Piet van Zoen - http://github.com/pietvanzoen/funkey
 * @version 0.0.0
 * @license MIT (http://www.opensource.org/licenses/mit-license.php)
 */
;(function() {
  'use strict';

  var KEYCODES = {
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

  /**
   * Funkey
   * @param {KeyboardEvent} event The event to test.
   * @param {String} keyString The keyboard string to match.
   * @param {Function} callback Function to invoke on event/keystring match.
   */
  function funkey(event, keyString, callback) {

    if (event.keyCode === getKeyCode(keyString)) {
      callback();
      return;
    }

  }

  function getKeyCode(keystring) {
    var keyCode = KEYCODES[keystring];
    if (!keyCode) {
      throw new Error('funkey: could not parse key string "' + keystring + '"');
    }
    return keyCode;
  }

  funkey.KEYCODES = KEYCODES;

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
