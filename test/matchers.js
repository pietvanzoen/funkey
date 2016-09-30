/* global funkey */

var funkeyMatchers = { // eslint-disable-line no-unused-vars
  toTriggerKeyString: function() {
    return {
      compare: function(event, keyString) {
        var result = {};
        var called = false;
        funkey(event, keyString, function() {
          called = true;
        });

        result.pass = called;

        if (result.pass) {
          result.message = 'Expected event ' + jasmine.pp(event) + ' NOT to trigger keyString callback for "' + keyString + '"'; // eslint-disable-line max-len
        } else {
          result.message = 'Expected event ' + jasmine.pp(event) + ' to trigger keyString callback for "' + keyString + '"'; // eslint-disable-line max-len
        }

        return result;
      }
    };
  }
};
