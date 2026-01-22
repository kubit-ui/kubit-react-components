'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 36) {
		return false;
	}

	return buf[34] === 0x4c && buf[35] === 0x50 &&
		(
			(buf[8] === 0x01 && buf[9] === 0x00 && buf[10] === 0x02) ||
			(buf[8] === 0x00 && buf[9] === 0x00 && buf[10] === 0x01) ||
			(buf[8] === 0x02 && buf[9] === 0x00 && buf[10] === 0x02)
		);
};
