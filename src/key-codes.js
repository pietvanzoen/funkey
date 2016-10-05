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
    'escape': 27, 'esc': 27,
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
    'semi-colon': 186, ';': 186,
    'equal': 187, '=': 187,
    'comma': 188, ',': 188,
    'dash': 189, '-': 189,
    'period': 190, '.': 190,
    'forwardslash': 191, '/': 191,
    'graveaccent': 192, '`': 192,
    'openbracket': 219, '[': 219,
    'backslash': 220, '\\': 220,
    'closebraket': 221, ']': 221,
    'singlequote': 222, '\'': 222
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
