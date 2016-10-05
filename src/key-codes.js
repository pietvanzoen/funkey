/* global each */
function initKeyCodes() { // eslint-disable-line no-unused-vars
  var codes = {
    'tab': 9,
    'backspace': 8,
    'enter': 13,
    'shift': 16,
    'ctrl': 17,
    'alt': 18,
    'pause': 19,
    'capslock': 20,
    'escape': 27,
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
    'superleft': 91,
    'superright': 92,
    'select': 93,
    'multiply': 106,
    'add': 107,
    'subtract': 109,
    'decimal': 110,
    'divide': 111,
    'numlock': 144,
    'scrolllock': 145,
    ';': 186,
    '=': 187,
    ',': 188,
    '-': 189,
    '.': 190,
    '/': 191,
    '`': 192,
    '[': 219,
    '\\': 220,
    ']': 221,
    '\'': 222
  };
  function addKeyItem(startCode, prefix) {
    return function(val, index) {
      codes[(prefix || '') + val] = (startCode + index);
    };
  }
  each(addKeyItem(65), 'abcdefghijklmnopqrstuvwxyz');
  each(addKeyItem(48), '0123456789');
  each(addKeyItem(112, 'f'), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  each(addKeyItem(96, 'numpad'), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return codes;
}
