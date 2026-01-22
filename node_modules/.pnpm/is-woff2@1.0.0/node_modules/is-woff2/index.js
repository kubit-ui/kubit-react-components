'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 8) {
		return false;
	}

	return buf[0] === 0x77 &&
	    buf[1] === 0x4F &&
	    buf[2] === 0x46 &&
	    buf[3] === 0x32 &&
	    buf[4] === 0x00 &&
	    buf[5] === 0x01 &&
	    buf[6] === 0x00 &&
	    buf[7] === 0x00;
};
