# is-ttf [![Build Status](https://travis-ci.org/junmer/is-ttf.svg?branch=master)](https://travis-ci.org/junmer/is-ttf)

> Check if a String/Buffer is [TTF](http://en.wikipedia.org/wiki/TrueType)


## Install

```sh
$ npm install --save is-ttf
```

## Usage

```js
var fs = require('fs');
isTtf(fs.readFileSync('pixel.ttf'));
//=> true
```

## API

### isTtf(source[, options])

* `source` ArrayBuffer | Buffer | String
* `options`
    * `tables` necessarily tables of ttf

## thx

- [ynakajima/ttf.js](https://github.com/ynakajima/ttf.js)

## License

MIT © [junmer](https://github.com/junmer/)
