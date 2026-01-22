# is-woff2 [![Build Status](https://travis-ci.org/arthurvr/is-woff2.svg?branch=master)](https://travis-ci.org/arthurvr/is-woff2)

> Check if a buffer/Uint8Array is a `woff2` file


## Install

```
$ npm install --save is-woff2
```


## Usage

```js
var read = require('fs').readFileSync;
var isWoff2 = require('is-woff2');

isWoff2(read('example.woff2'));
//=> true
```


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
