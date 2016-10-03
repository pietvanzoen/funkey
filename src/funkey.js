/* global KEYCODES */
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
