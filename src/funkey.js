var letters = 'abcdefghijklmnopqrstuvwxyz';
var alphabetStart = 65;

var numbers = '0123456789';
var numericStart = 48;

var someSymbols = ';=,-./';
var someSymbolsStart = 186;

/**
 * Funkey
 * @param {KeyboardEvent} event The event to test.
 * @param {String} keyString The keyboard string to match.
 * @param {Function} callback Function to invoke on event/keystring match.
 */
function funkey(event, keyString, callback) { // eslint-disable-line no-unused-vars

  if (event.keyCode === (alphabetStart + letters.indexOf(keyString))) {
    callback();
    return;
  }

  if (event.keyCode === (numericStart + numbers.indexOf(keyString))) {
    callback();
    return;
  }

  if (event.keyCode === (someSymbolsStart + someSymbols.indexOf(keyString))) {
    callback();
    return;
  }

}
