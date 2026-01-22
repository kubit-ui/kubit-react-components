module.exports = function (string) {
	var array = [];
	var i = 0;
	var c1 = 0;
	var seqlen = 0;

	string += '';

	while (i < string.length) {
		c1 = string.charCodeAt(i) & 0xFF;

		seqlen = 0;

		if (c1 <= 0xBF) {
			c1 = (c1 & 0x7F);

			seqlen = 1;
		} else if (c1 <= 0xDF) {
			c1 = (c1 & 0x1F);

			seqlen = 2;
		} else if (c1 <= 0xEF) {
			c1 = (c1 & 0x0F);

			seqlen = 3;
		} else {
			c1 = (c1 & 0x07);

			seqlen = 4;
		}

		for (var ai = 1; ai < seqlen; ++ai) {
			c1 = ((c1 << 0x06) | (string.charCodeAt(ai + i) & 0x3F));
		}

		if (seqlen === 4) {
			c1 -= 0x10000;

			array.push(String.fromCharCode(0xD800 | ((c1 >> 10) & 0x3FF)), String.fromCharCode(0xDC00 | (c1 & 0x3FF)));
		} else {
			array.push(String.fromCharCode(c1));
		}

		i += seqlen;
	}

	return array.filter(function(element, index) {
		return index % 2;
	}).join('');
};
