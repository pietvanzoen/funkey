/* global KEY_CODES */

var modifierKeys = {
  shift: 'shiftKey',
  alt: 'altKey',
  super: 'metaKey',
  ctrl: 'ctrlKey'
};

/**
 * Funkey
 * @param {KeyboardEvent} event The event to test.
 * @param {String} keyString The keyboard string to match.
 * @param {Function} callback Function to invoke on event/keystring match.
 */
function funkey(event, keyString, callback) {

  var eventMatch = {};

  var keys = keyString.split('+');
  var length = keys.length;
  var index = -1;
  while (++index < length) {
    var keyCode = KEY_CODES[keys[index]];
    if (keyCode) {
      eventMatch.keyCode = keyCode;
    }
    var modifier = modifierKeys[keys[index]];
    if (modifier) {
      eventMatch[modifier] = true;
    }
    if (!keyCode && !modifier) {
      throw new Error('[funkey] invalid keyString "' + keyString + '"');
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

  callback();

}

funkey.KEY_CODES = KEY_CODES;
