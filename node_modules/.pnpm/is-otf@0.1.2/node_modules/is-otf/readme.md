# is-otf [![Build Status](https://travis-ci.org/junmer/is-otf.svg?branch=master)](https://travis-ci.org/junmer/is-otf)

> Check if a String/Buffer/ArrayBuffer is [OTF](http://www.microsoft.com/typography/otspec/)


## Install

```sh
$ npm install --save is-otf
```

## Usage

```js
var fs = require('fs');
isOtf(fs.readFileSync('FontAwesome.otf'));
//=> true
```

## Thx

- [ynakajima/ttf.js](https://github.com/ynakajima/ttf.js)

## Test

```sh
$ npm test
```

> test file from [Font-Awesome](https://github.com/FortAwesome/Font-Awesome)

## License

MIT © [junmer](https://github.com/junmer/)
