/* global funkeyMatchers funkey */

describe('funkey', function() {

  beforeEach(function() {
    jasmine.addMatchers(funkeyMatchers);
  });

  it('is defined', function() {
    expect(typeof funkey).toBe('function');
  });

  it('handles single key keystrings', function() {
    expect({keyCode: 8}).toTriggerKeyString('backspace');
    expect({keyCode: 9}).toTriggerKeyString('tab');
    expect({keyCode: 13}).toTriggerKeyString('enter');
    expect({keyCode: 19}).toTriggerKeyString('pause');
    expect({keyCode: 20}).toTriggerKeyString('capslock');
    expect({keyCode: 27}).toTriggerKeyString('escape');
    expect({keyCode: 27}).toTriggerKeyString('esc');
    expect({keyCode: 32}).toTriggerKeyString('space');
    expect({keyCode: 33}).toTriggerKeyString('pageup');
    expect({keyCode: 34}).toTriggerKeyString('pagedown');
    expect({keyCode: 35}).toTriggerKeyString('end');
    expect({keyCode: 36}).toTriggerKeyString('home');
    expect({keyCode: 37}).toTriggerKeyString('left');
    expect({keyCode: 38}).toTriggerKeyString('up');
    expect({keyCode: 39}).toTriggerKeyString('right');
    expect({keyCode: 40}).toTriggerKeyString('down');
    expect({keyCode: 45}).toTriggerKeyString('insert');
    expect({keyCode: 46}).toTriggerKeyString('delete');
    expect({keyCode: 48}).toTriggerKeyString('0');
    expect({keyCode: 49}).toTriggerKeyString('1');
    expect({keyCode: 50}).toTriggerKeyString('2');
    expect({keyCode: 51}).toTriggerKeyString('3');
    expect({keyCode: 52}).toTriggerKeyString('4');
    expect({keyCode: 53}).toTriggerKeyString('5');
    expect({keyCode: 54}).toTriggerKeyString('6');
    expect({keyCode: 55}).toTriggerKeyString('7');
    expect({keyCode: 56}).toTriggerKeyString('8');
    expect({keyCode: 57}).toTriggerKeyString('9');
    expect({keyCode: 65}).toTriggerKeyString('a');
    expect({keyCode: 66}).toTriggerKeyString('b');
    expect({keyCode: 67}).toTriggerKeyString('c');
    expect({keyCode: 68}).toTriggerKeyString('d');
    expect({keyCode: 69}).toTriggerKeyString('e');
    expect({keyCode: 70}).toTriggerKeyString('f');
    expect({keyCode: 71}).toTriggerKeyString('g');
    expect({keyCode: 72}).toTriggerKeyString('h');
    expect({keyCode: 73}).toTriggerKeyString('i');
    expect({keyCode: 74}).toTriggerKeyString('j');
    expect({keyCode: 75}).toTriggerKeyString('k');
    expect({keyCode: 76}).toTriggerKeyString('l');
    expect({keyCode: 77}).toTriggerKeyString('m');
    expect({keyCode: 78}).toTriggerKeyString('n');
    expect({keyCode: 79}).toTriggerKeyString('o');
    expect({keyCode: 80}).toTriggerKeyString('p');
    expect({keyCode: 81}).toTriggerKeyString('q');
    expect({keyCode: 82}).toTriggerKeyString('r');
    expect({keyCode: 83}).toTriggerKeyString('s');
    expect({keyCode: 84}).toTriggerKeyString('t');
    expect({keyCode: 85}).toTriggerKeyString('u');
    expect({keyCode: 86}).toTriggerKeyString('v');
    expect({keyCode: 87}).toTriggerKeyString('w');
    expect({keyCode: 88}).toTriggerKeyString('x');
    expect({keyCode: 89}).toTriggerKeyString('y');
    expect({keyCode: 90}).toTriggerKeyString('z');
    expect({keyCode: 91}).toTriggerKeyString('superleft');
    expect({keyCode: 92}).toTriggerKeyString('superright');
    expect({keyCode: 93}).toTriggerKeyString('select');
    expect({keyCode: 96}).toTriggerKeyString('numpad0');
    expect({keyCode: 97}).toTriggerKeyString('numpad1');
    expect({keyCode: 98}).toTriggerKeyString('numpad2');
    expect({keyCode: 99}).toTriggerKeyString('numpad3');
    expect({keyCode: 100}).toTriggerKeyString('numpad4');
    expect({keyCode: 101}).toTriggerKeyString('numpad5');
    expect({keyCode: 102}).toTriggerKeyString('numpad6');
    expect({keyCode: 103}).toTriggerKeyString('numpad7');
    expect({keyCode: 104}).toTriggerKeyString('numpad8');
    expect({keyCode: 105}).toTriggerKeyString('numpad9');
    expect({keyCode: 106}).toTriggerKeyString('multiply');
    expect({keyCode: 107}).toTriggerKeyString('add');
    expect({keyCode: 109}).toTriggerKeyString('subtract');
    expect({keyCode: 110}).toTriggerKeyString('decimal');
    expect({keyCode: 111}).toTriggerKeyString('divide');
    expect({keyCode: 112}).toTriggerKeyString('f1');
    expect({keyCode: 113}).toTriggerKeyString('f2');
    expect({keyCode: 114}).toTriggerKeyString('f3');
    expect({keyCode: 115}).toTriggerKeyString('f4');
    expect({keyCode: 116}).toTriggerKeyString('f5');
    expect({keyCode: 117}).toTriggerKeyString('f6');
    expect({keyCode: 118}).toTriggerKeyString('f7');
    expect({keyCode: 119}).toTriggerKeyString('f8');
    expect({keyCode: 120}).toTriggerKeyString('f9');
    expect({keyCode: 121}).toTriggerKeyString('f10');
    expect({keyCode: 122}).toTriggerKeyString('f11');
    expect({keyCode: 123}).toTriggerKeyString('f12');
    expect({keyCode: 144}).toTriggerKeyString('numlock');
    expect({keyCode: 145}).toTriggerKeyString('scrolllock');
    expect({keyCode: 186}).toTriggerKeyString('semi-colon');
    expect({keyCode: 186}).toTriggerKeyString(';');
    expect({keyCode: 187}).toTriggerKeyString('equal');
    expect({keyCode: 187}).toTriggerKeyString('=');
    expect({keyCode: 188}).toTriggerKeyString('comma');
    expect({keyCode: 188}).toTriggerKeyString(',');
    expect({keyCode: 189}).toTriggerKeyString('dash');
    expect({keyCode: 189}).toTriggerKeyString('-');
    expect({keyCode: 190}).toTriggerKeyString('period');
    expect({keyCode: 190}).toTriggerKeyString('.');
    expect({keyCode: 191}).toTriggerKeyString('forwardslash');
    expect({keyCode: 191}).toTriggerKeyString('/');
    expect({keyCode: 192}).toTriggerKeyString('graveaccent');
    expect({keyCode: 192}).toTriggerKeyString('`');
    expect({keyCode: 219}).toTriggerKeyString('openbracket');
    expect({keyCode: 219}).toTriggerKeyString('[');
    expect({keyCode: 220}).toTriggerKeyString('backslash');
    expect({keyCode: 220}).toTriggerKeyString('\\');
    expect({keyCode: 221}).toTriggerKeyString('closebraket');
    expect({keyCode: 221}).toTriggerKeyString(']');
    expect({keyCode: 222}).toTriggerKeyString('singlequote');
    expect({keyCode: 222}).toTriggerKeyString('\'');
  });

  it('handles single modifier keys', function() {
    expect({keyCode: 16, shiftKey: true}).toTriggerKeyString('shift');
    expect({keyCode: 17, ctrlKey: true}).toTriggerKeyString('ctrl');
    expect({keyCode: 18, altKey: true}).toTriggerKeyString('alt');
  });

  it('handles "super" single key', function() {
    expect({keyCode: funkey.KEY_CODES.superright, metaKey: true}).toTriggerKeyString('super');
    expect({keyCode: funkey.KEY_CODES.superleft, metaKey: true}).toTriggerKeyString('super');
  });

  it('handles modifier key combos', function() {
    var enter = funkey.KEY_CODES.enter;
    expect({keyCode: enter, shiftKey: true}).toTriggerKeyString('shift+enter');
    expect({keyCode: enter, shiftKey: false}).not.toTriggerKeyString('shift+enter');
    expect({keyCode: enter, ctrlKey: true}).toTriggerKeyString('ctrl+enter');
    expect({keyCode: enter, ctrlKey: false}).not.toTriggerKeyString('ctrl+enter');
    expect({keyCode: enter, metaKey: true}).toTriggerKeyString('super+enter');
    expect({keyCode: enter, metaKey: false}).not.toTriggerKeyString('super+enter');
    expect({keyCode: enter, altKey: true}).toTriggerKeyString('alt+enter');
    expect({keyCode: enter, altKey: false}).not.toTriggerKeyString('alt+enter');
  });

  it('handles multiple modifier combos', function() {
    var dkey = funkey.KEY_CODES.d;
    expect({keyCode: dkey, altKey: true, metaKey: true}).toTriggerKeyString('super+alt+d');
    expect({keyCode: dkey, altKey: true, metaKey: true}).not.toTriggerKeyString('super+shift+d');
    expect({keyCode: dkey, shiftKey: true, metaKey: true}).toTriggerKeyString('shift+super+d');
    expect({keyCode: dkey, shiftKey: true, metaKey: true}).not.toTriggerKeyString('shift+alt+d');
    expect({keyCode: dkey, ctrlKey: true, metaKey: true}).toTriggerKeyString('ctrl+super+d');
  });

  it('throws error with invalid keystring', function() {
    expect(function() {
      funkey({}, 'foo+bar', function() {
      });
    }).toThrowError(/invalid keystring/i);
  });

  describe('currying', function() {
    beforeEach(function() {
      this.event = {keyCode: funkey.KEY_CODES.enter, metaKey: true};
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
  });

  it('throws an error when not given the correct arguments', function() {
    expect(function() {
      funkey('super+a', 'super+a', ['baz']);
    }).toThrowError(/invalid call signature/i);
  });

  it('returns the result of the callback', function() {
    var result = funkey({keyCode: funkey.KEY_CODES.enter}, 'enter', function() {
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
    obj.onEnter({keyCode: funkey.KEY_CODES.enter});
  });

});
