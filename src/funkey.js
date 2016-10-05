/* global KEY_CODES */

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
    case 1: return function(a1) {
      return fn.apply(this, arguments);
    };
    case 2: return function(a1, a2) {
      return fn.apply(this, arguments);
    };
    case 3: return function(a1, a2, a3) {
      return fn.apply(this, arguments);
    };
    default: throw new Error('Arity ' + n + ' not supported.');
  }
}

funkey.KEY_CODES = KEY_CODES;
