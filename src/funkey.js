/* global initKeyCodes */

var MODIFIER_KEYS = {
  shift: 'shiftKey',
  alt: 'altKey',
  super: 'metaKey',
  ctrl: 'ctrlKey'
};
var KEY_CODES = funkey.KEY_CODES = initKeyCodes();
var KEY_NAME_DELIMITER = '+';
var FUNKEY_ARITY = funkey.length;
var __slice = Array.prototype.slice;

/**
 * When `keyboardEvent` matches `keyName`, `callback` is invoked with the `keyboardEvent`.
 *
 * `funkey` is self-currying, so it will return a curried function until all the required
 * arguments have been given. See README.md for examples.
 *
 * @param {KeyboardEvent} keyboardEvent  The event to test.
 * @param {String} keyName  The keyboard key combination to match.
 * @param {Function} callback  Function to invoke on event/keyName match.
 * @return {*}  Returns result of callback if invoked, otherwise undefined.
 */
function funkey(keyboardEvent, keyName, callback) {
  var args = __slice.call(arguments, 0, FUNKEY_ARITY);
  if (args.length === FUNKEY_ARITY) {
    return runFunkey.apply(this, args);
  }
  return arity(FUNKEY_ARITY - args.length, function() {
    return funkey.apply(this, args.concat(__slice.call(arguments)));
  });
}

var runFunkey = parseArgs(function(event, keyName, callback) {
  if (objectContains(eventFromKeyName(keyName), event)) {
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

function eventFromKeyName(keyName) {
  var event = {
    shiftKey: false,
    altKey: false,
    metaKey: false,
    ctrlKey: false
  };
  var keys = keyName.split(KEY_NAME_DELIMITER);
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
      throw new Error('[funkey] Invalid keyName "' + keyName + '"');
    }
  }, keys);
  return event;
}

function parseArgs(fn) {
  return function() {
    var args = __slice.call(arguments);
    var event = find(isObject, args);
    args.splice(args.indexOf(event), 1);
    var keyName = args[0];
    var callback = args[1];
    if (!isObject(event) || typeof keyName !== 'string' || typeof callback !== 'function') {
      throw new Error('[,funkey] Invalid call signature. \n' +
        'funkey must be given an event object, a keyName, and a callback function.');
    }
    return fn.call(this, event, keyName, callback);
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
