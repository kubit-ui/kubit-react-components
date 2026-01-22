# is-eot [![Build Status](https://travis-ci.org/junmer/is-eot.svg?branch=master)](https://travis-ci.org/junmer/is-eot)

> Check if a Buffer/Uint8Array is a [EOT](http://www.w3.org/Submission/EOT/#FileFormat) 

## Install

```sh
$ npm install --save is-eot
```


## Usage

##### Node.js

```js
var readChunk = require('read-chunk'); // npm install read-chunk
var isEot = require('is-eot');
var buffer = readChunk.sync('font.eot', 0, 36);

isEot(buffer);
//=> true
```

##### Browser

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'font.eot');
xhr.responseType = 'arraybuffer';

xhr.onload = function () {
	isEot(new Uint8Array(this.response));
	//=> true
};

xhr.send();
```


## API

### isEot(buffer)

Accepts a Buffer (Node.js) or Uint8Array.

## Test

```sh
$ npm test
```

> test file from [Font-Awesome](https://github.com/FortAwesome/Font-Awesome)

## License

MIT © [junmer](https://github.com/junmer/)
