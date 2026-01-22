/**
 * @file isTtf
 * @author junmer
 *
 * @see http://www.adobe.com/devnet/font.html
 *      https://developer.apple.com/fonts/TrueType-Reference-Manual/
 *      ynakajima/ttf.js
 */

/* eslint-env node */

'use strict';

var toArrayBuffer = require('b3b').b2ab;

/**
 * isString
 *
 * @param  {any}  val val
 * @return {boolean}     isString
 */
function isString(val) {
    return '[object String]' === Object.prototype.toString.call(val);
}

/**
 * ゼロパディング
 *
 * @param  {string} _char char
 * @param  {number} width width
 * @return {string}       paded str
 */
function padZero(_char, width) {
    return ('0000000000000000000000000000000000000000000000000000000000000000' + _char)
        .slice(-1 * width);
}

/**
 * getViewFixed
 *
 * @param  {DataView}   view       DataView
 * @param  {number}   byteOffset byteOffset
 * @param  {Function} next       isnext
 * @return {number}              fixed number
 */
function getViewFixed(view, byteOffset, next) {
    var val = view.getInt32(byteOffset, next) / 65536.0;
    return Math.ceil(val * 100000) / 100000;
}

/**
 * getViewString
 *
 * @param  {DataView} view       DataView
 * @param  {number} strLen     string length
 * @param  {number} byteOffset byteOffset
 * @return {string}            string
 */
function getViewString(view, strLen, byteOffset) {

    var str = '';
    for (var j = 0; j < strLen; ++j) {
        var c = view.getUint8(byteOffset + j);
        str += String.fromCharCode(c);
    }

    return str;
}

/**
 * TableDirectory Constructor
 *
 * @param {DataView} view DataView
 * @param {number} offset DataView offset
 * @param {number} numTables table num
 */
function TTFTableDirectory(view, offset, numTables) {
    this.init(view, offset, numTables);
}


/**
 * 初期化
 *
 * @param {DataView} view DataView
 * @param {number} offset DataView offset
 * @param {number} numTables table num
 */
TTFTableDirectory.prototype.init = function (view, offset, numTables) {
    for (var i = offset, l = numTables * 16; i < l; i += 16) {

        var tag = getViewString(view, 4, i);

        var checkSum = padZero(view.getUint32(i + 4, false).toString(16), 8);
        var _offset = view.getUint32(i + 8, false);
        var length = view.getUint32(i + 12, false);

        this[tag] = {
            tag: tag,
            checkSum: checkSum,
            offset: _offset,
            length: length
        };

    }
};

/**
 * ttfTables
 * @type {Array}
 */
var ttfTables = [
    'OS/2',
    'cmap',
    'glyf',
    'head',
    'hhea',
    'hmtx',
    'loca',
    'maxp',
    'name',
    'post'
];

/**
 * isTtf
 *
 * @param  {ArrayBuffer|Buffer|String} buffer buffer
 * @param  {Object} opts opts
 * @param  {Array} opts.tables tables
 * @return {boolean}        is ttf
 */
module.exports = function (buffer, opts) {

    if (!buffer || !buffer.length) {
        return false;
    }

    opts = opts || {};

    var ttf = buffer instanceof ArrayBuffer
        ? buffer
            : isString(buffer)
                ? toArrayBuffer(new Buffer(buffer, 'binary'))
                    : toArrayBuffer(buffer);

    var view = new DataView(ttf, 0, ttf.byteLength, false);

    // version
    var version = getViewFixed(view, 0, false);

    // version must be 1
    if (version !== 1) {
        return false;
    }

    // num tables
    var numTables = view.getUint16(4, false);

    // num tables must < 100
    if (numTables > 100) {
        return false;
    }

    // // searchRenge
    // view.getUint16(6, false);
    // // entrySelector
    // view.getUint16(8, false);
    // // rengeShift
    // view.getUint16(10, false);

    // tableDirectory
    var tableDirectory;
    try {
        // tableDirectoryの取得と各テーブルの初期化
        // 12 is offset after rengeShift
        tableDirectory = new TTFTableDirectory(view, 12, numTables);
    }
    catch (ex) {
        return false;
    }

    // 判断 每个 ttf 的 tag 是否存在
    // 不需要 全有
    var checkFun = 'some';
    var checkTables = ttfTables;

    // 若指定 tables
    // 需要全有
    if (opts.tables) {
        checkFun = 'every';
        checkTables = opts.tables;
    }

    return checkTables[checkFun](function (tag) {
        return tableDirectory.hasOwnProperty(tag);
    });

};
