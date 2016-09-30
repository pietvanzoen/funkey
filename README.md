# funkey

[![CircleCI](https://img.shields.io/circleci/project/pietvanzoen/funkey/master.svg)](https://circleci.com/gh/pietvanzoen/funkey/tree/master)

A functional keyboard event handler.

## Usage

```js
funkey(event, 'super+enter', () => { 
  console.log('super enter pressed!');
});
```

```js
funkey(event, 'super+enter', () => { 
  return false; // default behaviour prevented
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
