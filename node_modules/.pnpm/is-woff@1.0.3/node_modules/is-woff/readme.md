# is-woff [![Build Status](https://travis-ci.org/junmer/is-woff.svg?branch=master)](https://travis-ci.org/junmer/is-woff)

> Check if a Buffer/Uint8Array is a [WOFF](http://www.w3.org/TR/WOFF/#WOFFHeader) 

## Install

```sh
$ npm install --save is-woff
```


## Usage

##### Node.js

```js
var readChunk = require('read-chunk'); // npm install read-chunk
var isWoff = require('is-woff');
var buffer = readChunk.sync('font.woff', 0, 8);

isWoff(buffer);
//=> true
```

##### Browser

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'font.woff');
xhr.responseType = 'arraybuffer';

xhr.onload = function () {
	isWoff(new Uint8Array(this.response));
	//=> true
};

xhr.send();
```


## API

### isWoff(buffer)

Accepts a Buffer (Node.js) or Uint8Array.

It only needs the first 8 bytes.

## Test

```sh
$ npm test
```

> test file from [Font-Awesome](https://github.com/FortAwesome/Font-Awesome)

## License

MIT © [junmer](https://github.com/junmer/)
