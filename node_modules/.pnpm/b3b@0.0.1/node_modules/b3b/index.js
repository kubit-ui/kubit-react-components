/* *
 * @file buffer convert util
 * @author junmer
 * @description ArrayBuffer / Buffer / base64 convert util
 */

void 0;     // only for doc

/**
 * convert arrayBuffer to buffer
 *
 * @alias arrayBufferToBuffer
 * @param  {ArrayBuffer} ab arrayBuffer
 * @return {buffer}             buffer
 */
function ab2b(ab) {

    var buffer = new Buffer(ab.byteLength);
    var view = new Uint8Array(ab);

    for (var i = 0, l = buffer.length; i < l; i++) {
        buffer[i] = view[i];
    }

    return buffer;

}

/**
 * convert buffer to arrayBuffer
 *
 * @alias bufferToArrayBuffer
 * @param  {buffer} buffer buffer
 * @return {ArrayBuffer}             arrayBuffer
 */
function b2ab(buffer) {

    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);

    for (var i = 0, l = buffer.length; i < l; ++i) {
        view[i] = buffer[i];
    }

    return ab;

}

/**
 * convert base64 string to buffer
 *
 * @alias base64ToBuffer
 * @param  {string} str base64 string
 * @return {Buffer} buffer
 */
function a2b(str) {
    return new Buffer(str, 'base64').toString('binary');
}

/**
 * convert buffer to base64 string
 *
 * @alias bufferToBase64
 * @param  {string|Buffer} str string or buffer
 * @return {string}     base64 string
 */
function b2a(str) {
    var buffer;

    if (str instanceof Buffer) {
        buffer = str;
    }
    else {
        buffer = new Buffer(str.toString(), 'binary');
    }

    return buffer.toString('base64');
}

/**
 * convert arraybuffer to base64 string
 *
 * @alias bytesToBase64
 * @param  {ArrayBuffer|Array} ab  ArrayBuffer or Array
 * @return {string}            base64 string
 */
function b2b(ab) {

    var str = '';

    if (ab instanceof ArrayBuffer) {
        var length = ab.byteLength;
        var view = new DataView(ab, 0, length);
        for (var i = 0; i < length; i++) {
            str += String.fromCharCode(view.getUint8(i, false));
        }
    }
    else if (ab instanceof Array) {
        for (var i = 0, length = ab.length; i < length; i++) {
            str += String.fromCharCode(ab[i]);
        }
    }

    return btoa(str);

}

// exports

exports.b2ab = exports.bufferToArrayBuffer = b2ab;
exports.ab2b = exports.arrayBufferToBuffer = ab2b;
exports.b2a = exports.btoa = exports.bufferToBase64 = b2a;
exports.a2b = exports.atob = exports.base64ToBuffer = a2b;
exports.b2b = exports.bytesToBase64 = b2b;

