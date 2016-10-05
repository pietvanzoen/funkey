/* global initKeyCodes */

var KEY_CODES = initKeyCodes();

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
  var argsLength = args.length;
  if (argsLength === FUNKEY_ARITY) {
    return runFunkey.apply(this, args);
  }
  return arity(FUNKEY_ARITY - argsLength, function() {
    return funkey.apply(this, args.concat(__slice.call(arguments)));
  });
}

var runFunkey = parseArgs(function(event, keyString, callback) {
  if (objectContains(eventFromKeyString(keyString), event)) {
    return callback.call(this, event);
  }
});

function objectContains(matchObject, actualObject) {
  for (var prop in matchObject) {
    if (!matchObject.hasOwnProperty(prop)) {
      continue;
    }
    if (matchObject[prop] !== actualObject[prop]) {
      return false;
    }
  }
  return true;
}

function eventFromKeyString(keyString) {
  var event = {};
  var keys = keyString.split('+');
  each(function(key) {
    var keyCode = KEY_CODES[key];
    if (keyCode) {
      event.keyCode = keyCode;
    }
    var modifier = MODIFIER_KEYS[key];
    if (modifier) {
      event[modifier] = true;
    }
    if (!keyCode && !modifier) {
      throw new Error('[funkey] Invalid keyString "' + keyString + '"');
    }
  }, keys);
  return event;
}

function parseArgs(fn) {
  return function() {
    var args = __slice.call(arguments);
    var event = find(isObject, args);
    args.splice(args.indexOf(event), 1);
    var keyString = args[0];
    var callback = args[1];
    if (!isObject(event) || typeof keyString !== 'string' || typeof callback !== 'function') {
      throw new Error('[,funkey] Invalid call signature. \n' +
        'funkey must be given an event object, a keyString, and a callback function.');
    }
    return fn.call(this, event, keyString, callback);
  };
}

function isObject(item) {
  return typeof item === 'object';
}

function find(search, items) {
  return search(items[0]) ? items[0] : find(search, __slice.call(items, 1));
}

function each(func, items) {
  var index = -1;
  var length = items.length;
  while (++index < length) {
    func(items[index], index, items);
  }
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
