'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 8) {
		return false;
	}

	return true &&
		// signature
		buf[0] === 0x77 &&
		buf[1] === 0x4f &&
		buf[2] === 0x46 &&
		buf[3] === 0x46 &&
		// The "sfnt version" of the original file:
		// 0x00010000 for TrueType flavored fonts
		// or 0x4F54544F 'OTTO' for CFF flavored fonts.
		(
			buf[4] === 0x00 &&
			buf[5] === 0x01 &&
			buf[6] === 0x00 &&
			buf[7] === 0x00
		) ||
		(
			buf[4] === 0x4F &&
			buf[5] === 0x54 &&
			buf[6] === 0x54 &&
			buf[7] === 0x4F
		);
};
