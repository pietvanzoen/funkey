# funkey

[![CircleCI](https://img.shields.io/circleci/project/pietvanzoen/funkey/master.svg)](https://circleci.com/gh/pietvanzoen/funkey/tree/master)  [![npm](https://img.shields.io/npm/v/funkey.svg)](https://www.npmjs.com/package/funkey)

Funkey is a self-currying keyboard event handler. ~~You provide the keyboard event, `funkey` provides the fun.~~  _[http://bukk.it/hahano.png](http://bukk.it/hahano.png)_

## Basic Usage

```js
document.addEventListener('keypress', (event) => {
  funkey(event, 'super+enter', () => { 
    console.log('super enter pressed!');
  });
})
```

## Arguments
* `keyboardEvent` - A keyboard event to handle.
* `keyName` - The keyboard key combination to match.
* `callback` - A callback to invoke with event if `keyName` matches event.

### The KeyName

The `keyName` is made up of the modifiers and the key itself. The available modifiers are `ctrl`, `alt`, `shift` and `super`. The available key names are a single character, or a named key, which may be one of:

`f1-12, tab, backspace, enter, shift, pause, capslock, escape, space, pageup, pagedown, end, home, left, up, right, down, insert, delete, select, multiply, add, subtract, decimal, divide, numlock, scrolllock, numpad0-9`

## Currying

Funkey is self-currying and the keyboard event argument can be given in any position when invoking `funkey`. This makes funkey pretty flexible. Here are some examples:

```js
document.addEventListener('keypress', (event) => {
  var onKeypress = funkey(event);
  onKeypress('super+enter', (e) => { /* take action! */ });
  onKeypress('super+esc', (e) => { /* escape! */ });
  onKeypress('shift+ctrl+super+s', (e) => { /* ¯\_(ツ)_/¯ */ });
})
```

```js
var logMessage = () => console.log('hello world!');
var onShiftDown = funkey('shift+down');
document.addEventListener('keypress', onShiftDown(logMessage));
```

The callback context is also correctly maintained:

```js
const controller = {
  doSomething: function() {},
  onKey: funkey('shift+/', function() {
    this.doSomething();
  })
};

document.addEventListener('keypress', controller.onKey.bind(controller));
```

## Roadmap
- [x] Improved docs
- [ ] Impliment newer `KeyboardEvent.key` property parsing.

## References

Inspiration and sources.

- [Sublime Text key bindings](http://sublimetext.info/docs/en/reference/key_bindings.html)
- [Why Curry Helps - Hugh FD Jackson](https://hughfdjackson.com/javascript/why-curry-helps/)

## Contributing

Don't be shy! Submit issues (or better yet PRs) if you see anything that could be better. If you're submitting code that contains patches or features please try to include unit tests. Thanks!

## Author

Piet van Zoen hi@pietvanzoen.com

## License

MIT : http://opensource.org/licenses/MIT
