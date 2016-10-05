# funkey

[![CircleCI](https://img.shields.io/circleci/project/pietvanzoen/funkey/master.svg)](https://circleci.com/gh/pietvanzoen/funkey/tree/master)

`funkey` is a self-currying keyboard event handler. You provide the keyboard event, `funkey` provides the fun. 

## Usage

```js
funkey(event, 'super+enter', () => { 
  console.log('super enter pressed!');
});
```

```js
var handleKey = funkey(event);
handleKey('enter', (event) => {
  /* do stuff */
});
handleKey('ctrl+l', (event) => {
  /* do other stuff */
});
```

```js
let logMessage = () => console.log('hello world');
let onEnter = key('enter');
document.addEventListener('keypress', onEnter(logMessage));
```

```js
const controller = {
  doSomething: function() {},
  onKey: funkey('shift+/', function() {
    this.doSomething();
  })
};
```

## TODO
- [] docs
- [] support for new preferred keyboard event handling
