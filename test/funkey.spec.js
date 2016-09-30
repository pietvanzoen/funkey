/* global funkey funkeyMatchers */
describe('funkey', function() {

  beforeEach(function() {
    jasmine.addMatchers(funkeyMatchers);
  });

  it('is defined', function() {
    expect(typeof funkey).toBe('function');
  });

  describe('(alphanumeric)', function() {
    it('handles alphabet keys', function() {
      var alphabet = 'abcdefghijklmnopqrstuvwxyz';
      var alphabetStart = 65;
      [].forEach.call(alphabet, function(letter, index) {
        var keyCode = (alphabetStart + index);
        expect({keyCode: keyCode}).toTriggerKeyString(letter);
        expect({keyCode: keyCode + 1}).not.toTriggerKeyString(letter);
      });
    });

    it('handles numbers', function() {
      var numbers = '0123456789';
      var numbersStart = 48;
      [].forEach.call(numbers, function(number, index) {
        var keyCode = (numbersStart + index);
        expect({keyCode: keyCode}).toTriggerKeyString(number);
        expect({keyCode: keyCode + 1}).not.toTriggerKeyString(number);
      });
    });
  });

  it('handles single symbols', function() {
    expect({keyCode: 186}).toTriggerKeyString(';');
    expect({keyCode: 187}).toTriggerKeyString('=');
    expect({keyCode: 188}).toTriggerKeyString(',');
    expect({keyCode: 189}).toTriggerKeyString('-');
    expect({keyCode: 190}).toTriggerKeyString('.');
    expect({keyCode: 191}).toTriggerKeyString('/');
  });
});
