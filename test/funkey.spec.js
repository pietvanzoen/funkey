/* global funkeyMatchers funkey R */

function keyEvent(options) {
  return R.merge({
    keyCode: 0,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    ctrlKey: false
  }, options);
}

describe('funkey', function() {

  beforeEach(function() {
    jasmine.addMatchers(funkeyMatchers);
  });

  it('is defined', function() {
    expect(typeof funkey).toBe('function');
  });

  it('handles single key keystrings', function() {
    expect(keyEvent({keyCode: 8})).toTriggerKeyString('backspace');
    expect(keyEvent({keyCode: 9})).toTriggerKeyString('tab');
    expect(keyEvent({keyCode: 13})).toTriggerKeyString('enter');
    expect(keyEvent({keyCode: 19})).toTriggerKeyString('pause');
    expect(keyEvent({keyCode: 20})).toTriggerKeyString('capslock');
    expect(keyEvent({keyCode: 27})).toTriggerKeyString('escape');
    expect(keyEvent({keyCode: 32})).toTriggerKeyString('space');
    expect(keyEvent({keyCode: 33})).toTriggerKeyString('pageup');
    expect(keyEvent({keyCode: 34})).toTriggerKeyString('pagedown');
    expect(keyEvent({keyCode: 35})).toTriggerKeyString('end');
    expect(keyEvent({keyCode: 36})).toTriggerKeyString('home');
    expect(keyEvent({keyCode: 37})).toTriggerKeyString('left');
    expect(keyEvent({keyCode: 38})).toTriggerKeyString('up');
    expect(keyEvent({keyCode: 39})).toTriggerKeyString('right');
    expect(keyEvent({keyCode: 40})).toTriggerKeyString('down');
    expect(keyEvent({keyCode: 45})).toTriggerKeyString('insert');
    expect(keyEvent({keyCode: 46})).toTriggerKeyString('delete');
    expect(keyEvent({keyCode: 48})).toTriggerKeyString('0');
    expect(keyEvent({keyCode: 49})).toTriggerKeyString('1');
    expect(keyEvent({keyCode: 50})).toTriggerKeyString('2');
    expect(keyEvent({keyCode: 51})).toTriggerKeyString('3');
    expect(keyEvent({keyCode: 52})).toTriggerKeyString('4');
    expect(keyEvent({keyCode: 53})).toTriggerKeyString('5');
    expect(keyEvent({keyCode: 54})).toTriggerKeyString('6');
    expect(keyEvent({keyCode: 55})).toTriggerKeyString('7');
    expect(keyEvent({keyCode: 56})).toTriggerKeyString('8');
    expect(keyEvent({keyCode: 57})).toTriggerKeyString('9');
    expect(keyEvent({keyCode: 65})).toTriggerKeyString('a');
    expect(keyEvent({keyCode: 66})).toTriggerKeyString('b');
    expect(keyEvent({keyCode: 67})).toTriggerKeyString('c');
    expect(keyEvent({keyCode: 68})).toTriggerKeyString('d');
    expect(keyEvent({keyCode: 69})).toTriggerKeyString('e');
    expect(keyEvent({keyCode: 70})).toTriggerKeyString('f');
    expect(keyEvent({keyCode: 71})).toTriggerKeyString('g');
    expect(keyEvent({keyCode: 72})).toTriggerKeyString('h');
    expect(keyEvent({keyCode: 73})).toTriggerKeyString('i');
    expect(keyEvent({keyCode: 74})).toTriggerKeyString('j');
    expect(keyEvent({keyCode: 75})).toTriggerKeyString('k');
    expect(keyEvent({keyCode: 76})).toTriggerKeyString('l');
    expect(keyEvent({keyCode: 77})).toTriggerKeyString('m');
    expect(keyEvent({keyCode: 78})).toTriggerKeyString('n');
    expect(keyEvent({keyCode: 79})).toTriggerKeyString('o');
    expect(keyEvent({keyCode: 80})).toTriggerKeyString('p');
    expect(keyEvent({keyCode: 81})).toTriggerKeyString('q');
    expect(keyEvent({keyCode: 82})).toTriggerKeyString('r');
    expect(keyEvent({keyCode: 83})).toTriggerKeyString('s');
    expect(keyEvent({keyCode: 84})).toTriggerKeyString('t');
    expect(keyEvent({keyCode: 85})).toTriggerKeyString('u');
    expect(keyEvent({keyCode: 86})).toTriggerKeyString('v');
    expect(keyEvent({keyCode: 87})).toTriggerKeyString('w');
    expect(keyEvent({keyCode: 88})).toTriggerKeyString('x');
    expect(keyEvent({keyCode: 89})).toTriggerKeyString('y');
    expect(keyEvent({keyCode: 90})).toTriggerKeyString('z');
    expect(keyEvent({keyCode: 91})).toTriggerKeyString('superleft');
    expect(keyEvent({keyCode: 92})).toTriggerKeyString('superright');
    expect(keyEvent({keyCode: 93})).toTriggerKeyString('select');
    expect(keyEvent({keyCode: 96})).toTriggerKeyString('numpad0');
    expect(keyEvent({keyCode: 97})).toTriggerKeyString('numpad1');
    expect(keyEvent({keyCode: 98})).toTriggerKeyString('numpad2');
    expect(keyEvent({keyCode: 99})).toTriggerKeyString('numpad3');
    expect(keyEvent({keyCode: 100})).toTriggerKeyString('numpad4');
    expect(keyEvent({keyCode: 101})).toTriggerKeyString('numpad5');
    expect(keyEvent({keyCode: 102})).toTriggerKeyString('numpad6');
    expect(keyEvent({keyCode: 103})).toTriggerKeyString('numpad7');
    expect(keyEvent({keyCode: 104})).toTriggerKeyString('numpad8');
    expect(keyEvent({keyCode: 105})).toTriggerKeyString('numpad9');
    expect(keyEvent({keyCode: 106})).toTriggerKeyString('multiply');
    expect(keyEvent({keyCode: 107})).toTriggerKeyString('add');
    expect(keyEvent({keyCode: 109})).toTriggerKeyString('subtract');
    expect(keyEvent({keyCode: 110})).toTriggerKeyString('decimal');
    expect(keyEvent({keyCode: 111})).toTriggerKeyString('divide');
    expect(keyEvent({keyCode: 112})).toTriggerKeyString('f1');
    expect(keyEvent({keyCode: 113})).toTriggerKeyString('f2');
    expect(keyEvent({keyCode: 114})).toTriggerKeyString('f3');
    expect(keyEvent({keyCode: 115})).toTriggerKeyString('f4');
    expect(keyEvent({keyCode: 116})).toTriggerKeyString('f5');
    expect(keyEvent({keyCode: 117})).toTriggerKeyString('f6');
    expect(keyEvent({keyCode: 118})).toTriggerKeyString('f7');
    expect(keyEvent({keyCode: 119})).toTriggerKeyString('f8');
    expect(keyEvent({keyCode: 120})).toTriggerKeyString('f9');
    expect(keyEvent({keyCode: 121})).toTriggerKeyString('f10');
    expect(keyEvent({keyCode: 122})).toTriggerKeyString('f11');
    expect(keyEvent({keyCode: 123})).toTriggerKeyString('f12');
    expect(keyEvent({keyCode: 144})).toTriggerKeyString('numlock');
    expect(keyEvent({keyCode: 145})).toTriggerKeyString('scrolllock');
    expect(keyEvent({keyCode: 186})).toTriggerKeyString(';');
    expect(keyEvent({keyCode: 187})).toTriggerKeyString('=');
    expect(keyEvent({keyCode: 188})).toTriggerKeyString(',');
    expect(keyEvent({keyCode: 189})).toTriggerKeyString('-');
    expect(keyEvent({keyCode: 190})).toTriggerKeyString('.');
    expect(keyEvent({keyCode: 191})).toTriggerKeyString('/');
    expect(keyEvent({keyCode: 192})).toTriggerKeyString('`');
    expect(keyEvent({keyCode: 219})).toTriggerKeyString('[');
    expect(keyEvent({keyCode: 220})).toTriggerKeyString('\\');
    expect(keyEvent({keyCode: 221})).toTriggerKeyString(']');
    expect(keyEvent({keyCode: 222})).toTriggerKeyString('\'');
  });

  it('handles single modifier keys', function() {
    expect(keyEvent({keyCode: 16, shiftKey: true})).toTriggerKeyString('shift');
    expect(keyEvent({keyCode: 17, ctrlKey: true})).toTriggerKeyString('ctrl');
    expect(keyEvent({keyCode: 18, altKey: true})).toTriggerKeyString('alt');
  });

  it('handles "super" single key', function() {
    expect(keyEvent({keyCode: funkey.KEY_CODES.superright, metaKey: true})).toTriggerKeyString('super');
    expect(keyEvent({keyCode: funkey.KEY_CODES.superleft, metaKey: true})).toTriggerKeyString('super');
  });

  it('handles modifier key combos', function() {
    var enter = funkey.KEY_CODES.enter;
    expect(keyEvent({keyCode: enter, shiftKey: true})).toTriggerKeyString('shift+enter');
    expect(keyEvent({keyCode: enter, shiftKey: false})).not.toTriggerKeyString('shift+enter');
    expect(keyEvent({keyCode: enter, ctrlKey: true})).toTriggerKeyString('ctrl+enter');
    expect(keyEvent({keyCode: enter, ctrlKey: false})).not.toTriggerKeyString('ctrl+enter');
    expect(keyEvent({keyCode: enter, metaKey: true})).toTriggerKeyString('super+enter');
    expect(keyEvent({keyCode: enter, metaKey: false})).not.toTriggerKeyString('super+enter');
    expect(keyEvent({keyCode: enter, altKey: true})).toTriggerKeyString('alt+enter');
    expect(keyEvent({keyCode: enter, altKey: false})).not.toTriggerKeyString('alt+enter');
  });

  it('handles multiple modifier combos', function() {
    var dkey = funkey.KEY_CODES.d;
    expect(keyEvent({keyCode: dkey, altKey: true, metaKey: true})).toTriggerKeyString('super+alt+d');
    expect(keyEvent({keyCode: dkey, altKey: true, metaKey: true})).not.toTriggerKeyString('super+shift+d');
    expect(keyEvent({keyCode: dkey, shiftKey: true, metaKey: true})).toTriggerKeyString('shift+super+d');
    expect(keyEvent({keyCode: dkey, shiftKey: true, metaKey: true})).not.toTriggerKeyString('shift+alt+d');
    expect(keyEvent({keyCode: dkey, ctrlKey: true, metaKey: true})).toTriggerKeyString('ctrl+super+d');
  });

  it('does not trigger keyName subsets of the event', function() {
    var event = {
      keyCode: funkey.KEY_CODES.enter,
      metaKey: true,
      altKey: true,
      shiftKey: true,
      ctrlKey: false
    };
    expect(keyEvent(event)).toTriggerKeyString('super+alt+shift+enter');
    expect(keyEvent(event)).not.toTriggerKeyString('shift+enter');
    expect(keyEvent(event)).not.toTriggerKeyString('super+enter');
    expect(keyEvent(event)).not.toTriggerKeyString('alt+enter');
  });

  it('throws error with invalid keystring', function() {
    expect(function() {
      funkey({}, 'foo+bar', function() {
      });
    }).toThrowError(/invalid keyname/i);
  });

  describe('currying', function() {
    beforeEach(function() {
      this.event = keyEvent({keyCode: funkey.KEY_CODES.enter, metaKey: true});
      this.keyString = 'super+enter';
      this.spy = jasmine.createSpy();
    });
    it('is self currying', function() {

      funkey(this.event)(this.keyString)(this.spy);
      expect(this.spy).toHaveBeenCalled();

      this.spy.calls.reset();

      funkey(this.event, this.keyString)(this.spy);
      expect(this.spy).toHaveBeenCalled();

      this.spy.calls.reset();

      funkey(this.event)(this.keyString, this.spy);
      expect(this.spy).toHaveBeenCalled();
    });

    it('event can be invoked in any position', function() {
      funkey(this.keyString)(this.event)(this.spy);
      expect(this.spy).toHaveBeenCalled();

      this.spy.calls.reset();

      funkey(this.keyString)(this.spy)(this.event);
      expect(this.spy).toHaveBeenCalled();
    });

    it('returns correct arity for each returned function', function() {
      var onKey = funkey();
      expect(onKey.length).toBe(3);
      onKey = onKey(this.event);
      expect(onKey.length).toBe(2);
      onKey = onKey(this.keyString);
      expect(onKey.length).toBe(1);
    });
  });

  it('throws an error when not given the correct arguments', function() {
    expect(function() {
      funkey('super+a', 'super+a', ['baz']);
    }).toThrowError(/invalid call signature/i);
  });

  it('returns the result of the callback', function() {
    var result = funkey(keyEvent({keyCode: funkey.KEY_CODES.enter}), 'enter', function() {
      return 'callback return value';
    });
    expect(result).toBe('callback return value');
  });

  it('the event object is passed to the callback', function() {
    var event = {keyCode: funkey.KEY_CODES.enter};
    funkey(event, 'enter', function(e) {
      expect(e).toBe(event);
    });
  });

  it('binds `this` of created function to callback', function() {
    var obj = {
      doSomething: function() {
        expect(this).toBe(obj);
      },
      onEnter: funkey('enter', function() {
        this.doSomething();
      })
    };
    obj.onEnter(keyEvent({keyCode: funkey.KEY_CODES.enter}));
  });

  it('ignores additional arguments', function() {
    var spy = jasmine.createSpy();
    funkey(keyEvent({keyCode: funkey.KEY_CODES.enter}), 'enter', spy, 'foo', 'bar');
    expect(spy).toHaveBeenCalled();
  });

});
