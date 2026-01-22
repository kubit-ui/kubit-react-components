var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// node_modules/pretty-format/node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "node_modules/pretty-format/node_modules/ansi-styles/index.js"(exports, module) {
    "use strict";
    var ANSI_BACKGROUND_OFFSET = 10;
    var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
    var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.gray = styles.color.blackBright;
      styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
      styles.color.grey = styles.color.blackBright;
      styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles, "codes", {
        value: codes,
        enumerable: false
      });
      styles.color.close = "\x1B[39m";
      styles.bgColor.close = "\x1B[49m";
      styles.color.ansi256 = wrapAnsi256();
      styles.color.ansi16m = wrapAnsi16m();
      styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
      styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
      Object.defineProperties(styles, {
        rgbToAnsi256: {
          value: (red, green, blue) => {
            if (red === green && green === blue) {
              if (red < 8) {
                return 16;
              }
              if (red > 248) {
                return 231;
              }
              return Math.round((red - 8) / 247 * 24) + 232;
            }
            return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
          },
          enumerable: false
        },
        hexToRgb: {
          value: (hex) => {
            const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
            if (!matches) {
              return [0, 0, 0];
            }
            let { colorString } = matches.groups;
            if (colorString.length === 3) {
              colorString = colorString.split("").map((character) => character + character).join("");
            }
            const integer = Number.parseInt(colorString, 16);
            return [
              integer >> 16 & 255,
              integer >> 8 & 255,
              integer & 255
            ];
          },
          enumerable: false
        },
        hexToAnsi256: {
          value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
          enumerable: false
        }
      });
      return styles;
    }
    Object.defineProperty(module, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/pretty-format/build/collections.js
var require_collections = __commonJS({
  "node_modules/pretty-format/build/collections.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printIteratorEntries = printIteratorEntries;
    exports.printIteratorValues = printIteratorValues;
    exports.printListItems = printListItems;
    exports.printObjectProperties = printObjectProperties;
    var getKeysOfEnumerableProperties = (object, compareKeys) => {
      const keys = Object.keys(object).sort(compareKeys);
      if (Object.getOwnPropertySymbols) {
        Object.getOwnPropertySymbols(object).forEach((symbol) => {
          if (Object.getOwnPropertyDescriptor(object, symbol).enumerable) {
            keys.push(symbol);
          }
        });
      }
      return keys;
    };
    function printIteratorEntries(iterator, config, indentation, depth, refs, printer, separator = ": ") {
      let result = "";
      let width = 0;
      let current = iterator.next();
      if (!current.done) {
        result += config.spacingOuter;
        const indentationNext = indentation + config.indent;
        while (!current.done) {
          result += indentationNext;
          if (width++ === config.maxWidth) {
            result += "\u2026";
            break;
          }
          const name = printer(current.value[0], config, indentationNext, depth, refs);
          const value = printer(current.value[1], config, indentationNext, depth, refs);
          result += name + separator + value;
          current = iterator.next();
          if (!current.done) {
            result += `,${config.spacingInner}`;
          } else if (!config.min) {
            result += ",";
          }
        }
        result += config.spacingOuter + indentation;
      }
      return result;
    }
    function printIteratorValues(iterator, config, indentation, depth, refs, printer) {
      let result = "";
      let width = 0;
      let current = iterator.next();
      if (!current.done) {
        result += config.spacingOuter;
        const indentationNext = indentation + config.indent;
        while (!current.done) {
          result += indentationNext;
          if (width++ === config.maxWidth) {
            result += "\u2026";
            break;
          }
          result += printer(current.value, config, indentationNext, depth, refs);
          current = iterator.next();
          if (!current.done) {
            result += `,${config.spacingInner}`;
          } else if (!config.min) {
            result += ",";
          }
        }
        result += config.spacingOuter + indentation;
      }
      return result;
    }
    function printListItems(list, config, indentation, depth, refs, printer) {
      let result = "";
      if (list.length) {
        result += config.spacingOuter;
        const indentationNext = indentation + config.indent;
        for (let i = 0; i < list.length; i++) {
          result += indentationNext;
          if (i === config.maxWidth) {
            result += "\u2026";
            break;
          }
          if (i in list) {
            result += printer(list[i], config, indentationNext, depth, refs);
          }
          if (i < list.length - 1) {
            result += `,${config.spacingInner}`;
          } else if (!config.min) {
            result += ",";
          }
        }
        result += config.spacingOuter + indentation;
      }
      return result;
    }
    function printObjectProperties(val, config, indentation, depth, refs, printer) {
      let result = "";
      const keys = getKeysOfEnumerableProperties(val, config.compareKeys);
      if (keys.length) {
        result += config.spacingOuter;
        const indentationNext = indentation + config.indent;
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const name = printer(key, config, indentationNext, depth, refs);
          const value = printer(val[key], config, indentationNext, depth, refs);
          result += `${indentationNext + name}: ${value}`;
          if (i < keys.length - 1) {
            result += `,${config.spacingInner}`;
          } else if (!config.min) {
            result += ",";
          }
        }
        result += config.spacingOuter + indentation;
      }
      return result;
    }
  }
});

// node_modules/pretty-format/build/plugins/AsymmetricMatcher.js
var require_AsymmetricMatcher = __commonJS({
  "node_modules/pretty-format/build/plugins/AsymmetricMatcher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _collections = require_collections();
    var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
    var asymmetricMatcher = typeof Symbol2 === "function" && Symbol2.for ? Symbol2.for("jest.asymmetricMatcher") : 1267621;
    var SPACE = " ";
    var serialize = (val, config, indentation, depth, refs, printer) => {
      const stringedValue = val.toString();
      if (stringedValue === "ArrayContaining" || stringedValue === "ArrayNotContaining") {
        if (++depth > config.maxDepth) {
          return `[${stringedValue}]`;
        }
        return `${stringedValue + SPACE}[${(0, _collections.printListItems)(val.sample, config, indentation, depth, refs, printer)}]`;
      }
      if (stringedValue === "ObjectContaining" || stringedValue === "ObjectNotContaining") {
        if (++depth > config.maxDepth) {
          return `[${stringedValue}]`;
        }
        return `${stringedValue + SPACE}{${(0, _collections.printObjectProperties)(val.sample, config, indentation, depth, refs, printer)}}`;
      }
      if (stringedValue === "StringMatching" || stringedValue === "StringNotMatching") {
        return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);
      }
      if (stringedValue === "StringContaining" || stringedValue === "StringNotContaining") {
        return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);
      }
      if (typeof val.toAsymmetricMatcher !== "function") {
        throw new Error(`Asymmetric matcher ${val.constructor.name} does not implement toAsymmetricMatcher()`);
      }
      return val.toAsymmetricMatcher();
    };
    exports.serialize = serialize;
    var test = (val) => val && val.$$typeof === asymmetricMatcher;
    exports.test = test;
    var plugin = {
      serialize,
      test
    };
    var _default = plugin;
    exports.default = _default;
  }
});

// node_modules/ansi-regex/index.js
var require_ansi_regex = __commonJS({
  "node_modules/ansi-regex/index.js"(exports, module) {
    "use strict";
    module.exports = ({ onlyFirst = false } = {}) => {
      const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
      ].join("|");
      return new RegExp(pattern, onlyFirst ? void 0 : "g");
    };
  }
});

// node_modules/pretty-format/build/plugins/ConvertAnsi.js
var require_ConvertAnsi = __commonJS({
  "node_modules/pretty-format/build/plugins/ConvertAnsi.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _ansiRegex = _interopRequireDefault(require_ansi_regex());
    var _ansiStyles = _interopRequireDefault(require_ansi_styles());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var toHumanReadableAnsi = (text) => text.replace((0, _ansiRegex.default)(), (match) => {
      switch (match) {
        case _ansiStyles.default.red.close:
        case _ansiStyles.default.green.close:
        case _ansiStyles.default.cyan.close:
        case _ansiStyles.default.gray.close:
        case _ansiStyles.default.white.close:
        case _ansiStyles.default.yellow.close:
        case _ansiStyles.default.bgRed.close:
        case _ansiStyles.default.bgGreen.close:
        case _ansiStyles.default.bgYellow.close:
        case _ansiStyles.default.inverse.close:
        case _ansiStyles.default.dim.close:
        case _ansiStyles.default.bold.close:
        case _ansiStyles.default.reset.open:
        case _ansiStyles.default.reset.close:
          return "</>";
        case _ansiStyles.default.red.open:
          return "<red>";
        case _ansiStyles.default.green.open:
          return "<green>";
        case _ansiStyles.default.cyan.open:
          return "<cyan>";
        case _ansiStyles.default.gray.open:
          return "<gray>";
        case _ansiStyles.default.white.open:
          return "<white>";
        case _ansiStyles.default.yellow.open:
          return "<yellow>";
        case _ansiStyles.default.bgRed.open:
          return "<bgRed>";
        case _ansiStyles.default.bgGreen.open:
          return "<bgGreen>";
        case _ansiStyles.default.bgYellow.open:
          return "<bgYellow>";
        case _ansiStyles.default.inverse.open:
          return "<inverse>";
        case _ansiStyles.default.dim.open:
          return "<dim>";
        case _ansiStyles.default.bold.open:
          return "<bold>";
        default:
          return "";
      }
    });
    var test = (val) => typeof val === "string" && !!val.match((0, _ansiRegex.default)());
    exports.test = test;
    var serialize = (val, config, indentation, depth, refs, printer) => printer(toHumanReadableAnsi(val), config, indentation, depth, refs);
    exports.serialize = serialize;
    var plugin = {
      serialize,
      test
    };
    var _default = plugin;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/DOMCollection.js
var require_DOMCollection = __commonJS({
  "node_modules/pretty-format/build/plugins/DOMCollection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _collections = require_collections();
    var SPACE = " ";
    var OBJECT_NAMES = ["DOMStringMap", "NamedNodeMap"];
    var ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/;
    var testName = (name) => OBJECT_NAMES.indexOf(name) !== -1 || ARRAY_REGEXP.test(name);
    var test = (val) => val && val.constructor && !!val.constructor.name && testName(val.constructor.name);
    exports.test = test;
    var isNamedNodeMap = (collection) => collection.constructor.name === "NamedNodeMap";
    var serialize = (collection, config, indentation, depth, refs, printer) => {
      const name = collection.constructor.name;
      if (++depth > config.maxDepth) {
        return `[${name}]`;
      }
      return (config.min ? "" : name + SPACE) + (OBJECT_NAMES.indexOf(name) !== -1 ? `{${(0, _collections.printObjectProperties)(isNamedNodeMap(collection) ? Array.from(collection).reduce((props, attribute) => {
        props[attribute.name] = attribute.value;
        return props;
      }, {}) : { ...collection }, config, indentation, depth, refs, printer)}}` : `[${(0, _collections.printListItems)(Array.from(collection), config, indentation, depth, refs, printer)}]`);
    };
    exports.serialize = serialize;
    var plugin = {
      serialize,
      test
    };
    var _default = plugin;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/lib/escapeHTML.js
var require_escapeHTML = __commonJS({
  "node_modules/pretty-format/build/plugins/lib/escapeHTML.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = escapeHTML;
    function escapeHTML(str) {
      return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  }
});

// node_modules/pretty-format/build/plugins/lib/markup.js
var require_markup = __commonJS({
  "node_modules/pretty-format/build/plugins/lib/markup.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printText = exports.printProps = exports.printElementAsLeaf = exports.printElement = exports.printComment = exports.printChildren = void 0;
    var _escapeHTML = _interopRequireDefault(require_escapeHTML());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var printProps = (keys, props, config, indentation, depth, refs, printer) => {
      const indentationNext = indentation + config.indent;
      const colors = config.colors;
      return keys.map((key) => {
        const value = props[key];
        let printed = printer(value, config, indentationNext, depth, refs);
        if (typeof value !== "string") {
          if (printed.indexOf("\n") !== -1) {
            printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation;
          }
          printed = `{${printed}}`;
        }
        return `${config.spacingInner + indentation + colors.prop.open + key + colors.prop.close}=${colors.value.open}${printed}${colors.value.close}`;
      }).join("");
    };
    exports.printProps = printProps;
    var printChildren = (children, config, indentation, depth, refs, printer) => children.map((child) => config.spacingOuter + indentation + (typeof child === "string" ? printText(child, config) : printer(child, config, indentation, depth, refs))).join("");
    exports.printChildren = printChildren;
    var printText = (text, config) => {
      const contentColor = config.colors.content;
      return contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close;
    };
    exports.printText = printText;
    var printComment = (comment, config) => {
      const commentColor = config.colors.comment;
      return `${commentColor.open}<!--${(0, _escapeHTML.default)(comment)}-->${commentColor.close}`;
    };
    exports.printComment = printComment;
    var printElement = (type, printedProps, printedChildren, config, indentation) => {
      const tagColor = config.colors.tag;
      return `${tagColor.open}<${type}${printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open}${printedChildren ? `>${tagColor.close}${printedChildren}${config.spacingOuter}${indentation}${tagColor.open}</${type}` : `${printedProps && !config.min ? "" : " "}/`}>${tagColor.close}`;
    };
    exports.printElement = printElement;
    var printElementAsLeaf = (type, config) => {
      const tagColor = config.colors.tag;
      return `${tagColor.open}<${type}${tagColor.close} \u2026${tagColor.open} />${tagColor.close}`;
    };
    exports.printElementAsLeaf = printElementAsLeaf;
  }
});

// node_modules/pretty-format/build/plugins/DOMElement.js
var require_DOMElement = __commonJS({
  "node_modules/pretty-format/build/plugins/DOMElement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _markup = require_markup();
    var ELEMENT_NODE = 1;
    var TEXT_NODE = 3;
    var COMMENT_NODE = 8;
    var FRAGMENT_NODE = 11;
    var ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;
    var testHasAttribute = (val) => {
      try {
        return typeof val.hasAttribute === "function" && val.hasAttribute("is");
      } catch {
        return false;
      }
    };
    var testNode = (val) => {
      const constructorName = val.constructor.name;
      const { nodeType, tagName } = val;
      const isCustomElement = typeof tagName === "string" && tagName.includes("-") || testHasAttribute(val);
      return nodeType === ELEMENT_NODE && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE && constructorName === "Text" || nodeType === COMMENT_NODE && constructorName === "Comment" || nodeType === FRAGMENT_NODE && constructorName === "DocumentFragment";
    };
    var test = (val) => {
      var _val$constructor;
      return (val === null || val === void 0 ? void 0 : (_val$constructor = val.constructor) === null || _val$constructor === void 0 ? void 0 : _val$constructor.name) && testNode(val);
    };
    exports.test = test;
    function nodeIsText(node) {
      return node.nodeType === TEXT_NODE;
    }
    function nodeIsComment(node) {
      return node.nodeType === COMMENT_NODE;
    }
    function nodeIsFragment(node) {
      return node.nodeType === FRAGMENT_NODE;
    }
    var serialize = (node, config, indentation, depth, refs, printer) => {
      if (nodeIsText(node)) {
        return (0, _markup.printText)(node.data, config);
      }
      if (nodeIsComment(node)) {
        return (0, _markup.printComment)(node.data, config);
      }
      const type = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();
      if (++depth > config.maxDepth) {
        return (0, _markup.printElementAsLeaf)(type, config);
      }
      return (0, _markup.printElement)(type, (0, _markup.printProps)(nodeIsFragment(node) ? [] : Array.from(node.attributes).map((attr) => attr.name).sort(), nodeIsFragment(node) ? {} : Array.from(node.attributes).reduce((props, attribute) => {
        props[attribute.name] = attribute.value;
        return props;
      }, {}), config, indentation + config.indent, depth, refs, printer), (0, _markup.printChildren)(Array.prototype.slice.call(node.childNodes || node.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
    };
    exports.serialize = serialize;
    var plugin = {
      serialize,
      test
    };
    var _default = plugin;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/Immutable.js
var require_Immutable = __commonJS({
  "node_modules/pretty-format/build/plugins/Immutable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _collections = require_collections();
    var IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
    var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
    var IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
    var IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
    var IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
    var IS_RECORD_SENTINEL = "@@__IMMUTABLE_RECORD__@@";
    var IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
    var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
    var IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
    var getImmutableName = (name) => `Immutable.${name}`;
    var printAsLeaf = (name) => `[${name}]`;
    var SPACE = " ";
    var LAZY = "\u2026";
    var printImmutableEntries = (val, config, indentation, depth, refs, printer, type) => ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : `${getImmutableName(type) + SPACE}{${(0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer)}}`;
    function getRecordEntries(val) {
      let i = 0;
      return {
        next() {
          if (i < val._keys.length) {
            const key = val._keys[i++];
            return {
              done: false,
              value: [key, val.get(key)]
            };
          }
          return {
            done: true,
            value: void 0
          };
        }
      };
    }
    var printImmutableRecord = (val, config, indentation, depth, refs, printer) => {
      const name = getImmutableName(val._name || "Record");
      return ++depth > config.maxDepth ? printAsLeaf(name) : `${name + SPACE}{${(0, _collections.printIteratorEntries)(getRecordEntries(val), config, indentation, depth, refs, printer)}}`;
    };
    var printImmutableSeq = (val, config, indentation, depth, refs, printer) => {
      const name = getImmutableName("Seq");
      if (++depth > config.maxDepth) {
        return printAsLeaf(name);
      }
      if (val[IS_KEYED_SENTINEL]) {
        return `${name + SPACE}{${val._iter || val._object ? (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer) : LAZY}}`;
      }
      return `${name + SPACE}[${val._iter || val._array || val._collection || val._iterable ? (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) : LAZY}]`;
    };
    var printImmutableValues = (val, config, indentation, depth, refs, printer, type) => ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : `${getImmutableName(type) + SPACE}[${(0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer)}]`;
    var serialize = (val, config, indentation, depth, refs, printer) => {
      if (val[IS_MAP_SENTINEL]) {
        return printImmutableEntries(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? "OrderedMap" : "Map");
      }
      if (val[IS_LIST_SENTINEL]) {
        return printImmutableValues(val, config, indentation, depth, refs, printer, "List");
      }
      if (val[IS_SET_SENTINEL]) {
        return printImmutableValues(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? "OrderedSet" : "Set");
      }
      if (val[IS_STACK_SENTINEL]) {
        return printImmutableValues(val, config, indentation, depth, refs, printer, "Stack");
      }
      if (val[IS_SEQ_SENTINEL]) {
        return printImmutableSeq(val, config, indentation, depth, refs, printer);
      }
      return printImmutableRecord(val, config, indentation, depth, refs, printer);
    };
    exports.serialize = serialize;
    var test = (val) => val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
    exports.test = test;
    var plugin = {
      serialize,
      test
    };
    var _default = plugin;
    exports.default = _default;
  }
});

// node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "node_modules/react-is/cjs/react-is.production.min.js"(exports) {
    "use strict";
    var b = Symbol.for("react.element");
    var c = Symbol.for("react.portal");
    var d = Symbol.for("react.fragment");
    var e = Symbol.for("react.strict_mode");
    var f = Symbol.for("react.profiler");
    var g = Symbol.for("react.provider");
    var h = Symbol.for("react.context");
    var k = Symbol.for("react.server_context");
    var l = Symbol.for("react.forward_ref");
    var m = Symbol.for("react.suspense");
    var n = Symbol.for("react.suspense_list");
    var p = Symbol.for("react.memo");
    var q = Symbol.for("react.lazy");
    var t = Symbol.for("react.offscreen");
    var u;
    u = Symbol.for("react.module.reference");
    function v(a) {
      if (typeof a === "object" && a !== null) {
        var r = a.$$typeof;
        switch (r) {
          case b:
            switch (a = a.type, a) {
              case d:
              case f:
              case e:
              case m:
              case n:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case h:
                  case l:
                  case q:
                  case p:
                  case g:
                    return a;
                  default:
                    return r;
                }
            }
          case c:
            return r;
        }
      }
    }
    exports.ContextConsumer = h;
    exports.ContextProvider = g;
    exports.Element = b;
    exports.ForwardRef = l;
    exports.Fragment = d;
    exports.Lazy = q;
    exports.Memo = p;
    exports.Portal = c;
    exports.Profiler = f;
    exports.StrictMode = e;
    exports.Suspense = m;
    exports.SuspenseList = n;
    exports.isAsyncMode = function() {
      return false;
    };
    exports.isConcurrentMode = function() {
      return false;
    };
    exports.isContextConsumer = function(a) {
      return v(a) === h;
    };
    exports.isContextProvider = function(a) {
      return v(a) === g;
    };
    exports.isElement = function(a) {
      return typeof a === "object" && a !== null && a.$$typeof === b;
    };
    exports.isForwardRef = function(a) {
      return v(a) === l;
    };
    exports.isFragment = function(a) {
      return v(a) === d;
    };
    exports.isLazy = function(a) {
      return v(a) === q;
    };
    exports.isMemo = function(a) {
      return v(a) === p;
    };
    exports.isPortal = function(a) {
      return v(a) === c;
    };
    exports.isProfiler = function(a) {
      return v(a) === f;
    };
    exports.isStrictMode = function(a) {
      return v(a) === e;
    };
    exports.isSuspense = function(a) {
      return v(a) === m;
    };
    exports.isSuspenseList = function(a) {
      return v(a) === n;
    };
    exports.isValidElementType = function(a) {
      return typeof a === "string" || typeof a === "function" || a === d || a === f || a === e || a === m || a === n || a === t || typeof a === "object" && a !== null && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || a.getModuleId !== void 0) ? true : false;
    };
    exports.typeOf = v;
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
          return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_is_production_min();
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/pretty-format/build/plugins/ReactElement.js
var require_ReactElement = __commonJS({
  "node_modules/pretty-format/build/plugins/ReactElement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var ReactIs = _interopRequireWildcard(require_react_is());
    var _markup = require_markup();
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    var getChildren = (arg, children = []) => {
      if (Array.isArray(arg)) {
        arg.forEach((item) => {
          getChildren(item, children);
        });
      } else if (arg != null && arg !== false) {
        children.push(arg);
      }
      return children;
    };
    var getType = (element) => {
      const type = element.type;
      if (typeof type === "string") {
        return type;
      }
      if (typeof type === "function") {
        return type.displayName || type.name || "Unknown";
      }
      if (ReactIs.isFragment(element)) {
        return "React.Fragment";
      }
      if (ReactIs.isSuspense(element)) {
        return "React.Suspense";
      }
      if (typeof type === "object" && type !== null) {
        if (ReactIs.isContextProvider(element)) {
          return "Context.Provider";
        }
        if (ReactIs.isContextConsumer(element)) {
          return "Context.Consumer";
        }
        if (ReactIs.isForwardRef(element)) {
          if (type.displayName) {
            return type.displayName;
          }
          const functionName = type.render.displayName || type.render.name || "";
          return functionName !== "" ? `ForwardRef(${functionName})` : "ForwardRef";
        }
        if (ReactIs.isMemo(element)) {
          const functionName = type.displayName || type.type.displayName || type.type.name || "";
          return functionName !== "" ? `Memo(${functionName})` : "Memo";
        }
      }
      return "UNDEFINED";
    };
    var getPropKeys = (element) => {
      const { props } = element;
      return Object.keys(props).filter((key) => key !== "children" && props[key] !== void 0).sort();
    };
    var serialize = (element, config, indentation, depth, refs, printer) => ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(getType(element), config) : (0, _markup.printElement)(getType(element), (0, _markup.printProps)(getPropKeys(element), element.props, config, indentation + config.indent, depth, refs, printer), (0, _markup.printChildren)(getChildren(element.props.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
    exports.serialize = serialize;
    var test = (val) => val != null && ReactIs.isElement(val);
    exports.test = test;
    var plugin = {
      serialize,
      test
    };
    var _default = plugin;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/ReactTestComponent.js
var require_ReactTestComponent = __commonJS({
  "node_modules/pretty-format/build/plugins/ReactTestComponent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _markup = require_markup();
    var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
    var testSymbol = typeof Symbol2 === "function" && Symbol2.for ? Symbol2.for("react.test.json") : 245830487;
    var getPropKeys = (object) => {
      const { props } = object;
      return props ? Object.keys(props).filter((key) => props[key] !== void 0).sort() : [];
    };
    var serialize = (object, config, indentation, depth, refs, printer) => ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(object.type, config) : (0, _markup.printElement)(object.type, object.props ? (0, _markup.printProps)(getPropKeys(object), object.props, config, indentation + config.indent, depth, refs, printer) : "", object.children ? (0, _markup.printChildren)(object.children, config, indentation + config.indent, depth, refs, printer) : "", config, indentation);
    exports.serialize = serialize;
    var test = (val) => val && val.$$typeof === testSymbol;
    exports.test = test;
    var plugin = {
      serialize,
      test
    };
    var _default = plugin;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/index.js
var require_build = __commonJS({
  "node_modules/pretty-format/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.DEFAULT_OPTIONS = void 0;
    exports.format = format;
    exports.plugins = void 0;
    var _ansiStyles = _interopRequireDefault(require_ansi_styles());
    var _collections = require_collections();
    var _AsymmetricMatcher = _interopRequireDefault(require_AsymmetricMatcher());
    var _ConvertAnsi = _interopRequireDefault(require_ConvertAnsi());
    var _DOMCollection = _interopRequireDefault(require_DOMCollection());
    var _DOMElement = _interopRequireDefault(require_DOMElement());
    var _Immutable = _interopRequireDefault(require_Immutable());
    var _ReactElement = _interopRequireDefault(require_ReactElement());
    var _ReactTestComponent = _interopRequireDefault(require_ReactTestComponent());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var toString = Object.prototype.toString;
    var toISOString = Date.prototype.toISOString;
    var errorToString = Error.prototype.toString;
    var regExpToString = RegExp.prototype.toString;
    var getConstructorName = (val) => typeof val.constructor === "function" && val.constructor.name || "Object";
    var isWindow = (val) => typeof window !== "undefined" && val === window;
    var SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
    var NEWLINE_REGEXP = /\n/gi;
    var PrettyFormatPluginError = class extends Error {
      constructor(message, stack) {
        super(message);
        this.stack = stack;
        this.name = this.constructor.name;
      }
    };
    function isToStringedArrayType(toStringed) {
      return toStringed === "[object Array]" || toStringed === "[object ArrayBuffer]" || toStringed === "[object DataView]" || toStringed === "[object Float32Array]" || toStringed === "[object Float64Array]" || toStringed === "[object Int8Array]" || toStringed === "[object Int16Array]" || toStringed === "[object Int32Array]" || toStringed === "[object Uint8Array]" || toStringed === "[object Uint8ClampedArray]" || toStringed === "[object Uint16Array]" || toStringed === "[object Uint32Array]";
    }
    function printNumber(val) {
      return Object.is(val, -0) ? "-0" : String(val);
    }
    function printBigInt(val) {
      return String(`${val}n`);
    }
    function printFunction(val, printFunctionName) {
      if (!printFunctionName) {
        return "[Function]";
      }
      return `[Function ${val.name || "anonymous"}]`;
    }
    function printSymbol(val) {
      return String(val).replace(SYMBOL_REGEXP, "Symbol($1)");
    }
    function printError(val) {
      return `[${errorToString.call(val)}]`;
    }
    function printBasicValue(val, printFunctionName, escapeRegex, escapeString) {
      if (val === true || val === false) {
        return `${val}`;
      }
      if (val === void 0) {
        return "undefined";
      }
      if (val === null) {
        return "null";
      }
      const typeOf = typeof val;
      if (typeOf === "number") {
        return printNumber(val);
      }
      if (typeOf === "bigint") {
        return printBigInt(val);
      }
      if (typeOf === "string") {
        if (escapeString) {
          return `"${val.replace(/"|\\/g, "\\$&")}"`;
        }
        return `"${val}"`;
      }
      if (typeOf === "function") {
        return printFunction(val, printFunctionName);
      }
      if (typeOf === "symbol") {
        return printSymbol(val);
      }
      const toStringed = toString.call(val);
      if (toStringed === "[object WeakMap]") {
        return "WeakMap {}";
      }
      if (toStringed === "[object WeakSet]") {
        return "WeakSet {}";
      }
      if (toStringed === "[object Function]" || toStringed === "[object GeneratorFunction]") {
        return printFunction(val, printFunctionName);
      }
      if (toStringed === "[object Symbol]") {
        return printSymbol(val);
      }
      if (toStringed === "[object Date]") {
        return isNaN(+val) ? "Date { NaN }" : toISOString.call(val);
      }
      if (toStringed === "[object Error]") {
        return printError(val);
      }
      if (toStringed === "[object RegExp]") {
        if (escapeRegex) {
          return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        return regExpToString.call(val);
      }
      if (val instanceof Error) {
        return printError(val);
      }
      return null;
    }
    function printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON) {
      if (refs.indexOf(val) !== -1) {
        return "[Circular]";
      }
      refs = refs.slice();
      refs.push(val);
      const hitMaxDepth = ++depth > config.maxDepth;
      const min = config.min;
      if (config.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === "function" && !hasCalledToJSON) {
        return printer(val.toJSON(), config, indentation, depth, refs, true);
      }
      const toStringed = toString.call(val);
      if (toStringed === "[object Arguments]") {
        return hitMaxDepth ? "[Arguments]" : `${min ? "" : "Arguments "}[${(0, _collections.printListItems)(val, config, indentation, depth, refs, printer)}]`;
      }
      if (isToStringedArrayType(toStringed)) {
        return hitMaxDepth ? `[${val.constructor.name}]` : `${min ? "" : !config.printBasicPrototype && val.constructor.name === "Array" ? "" : `${val.constructor.name} `}[${(0, _collections.printListItems)(val, config, indentation, depth, refs, printer)}]`;
      }
      if (toStringed === "[object Map]") {
        return hitMaxDepth ? "[Map]" : `Map {${(0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer, " => ")}}`;
      }
      if (toStringed === "[object Set]") {
        return hitMaxDepth ? "[Set]" : `Set {${(0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer)}}`;
      }
      return hitMaxDepth || isWindow(val) ? `[${getConstructorName(val)}]` : `${min ? "" : !config.printBasicPrototype && getConstructorName(val) === "Object" ? "" : `${getConstructorName(val)} `}{${(0, _collections.printObjectProperties)(val, config, indentation, depth, refs, printer)}}`;
    }
    function isNewPlugin(plugin) {
      return plugin.serialize != null;
    }
    function printPlugin(plugin, val, config, indentation, depth, refs) {
      let printed;
      try {
        printed = isNewPlugin(plugin) ? plugin.serialize(val, config, indentation, depth, refs, printer) : plugin.print(val, (valChild) => printer(valChild, config, indentation, depth, refs), (str) => {
          const indentationNext = indentation + config.indent;
          return indentationNext + str.replace(NEWLINE_REGEXP, `
${indentationNext}`);
        }, {
          edgeSpacing: config.spacingOuter,
          min: config.min,
          spacing: config.spacingInner
        }, config.colors);
      } catch (error) {
        throw new PrettyFormatPluginError(error.message, error.stack);
      }
      if (typeof printed !== "string") {
        throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`);
      }
      return printed;
    }
    function findPlugin(plugins2, val) {
      for (let p = 0; p < plugins2.length; p++) {
        try {
          if (plugins2[p].test(val)) {
            return plugins2[p];
          }
        } catch (error) {
          throw new PrettyFormatPluginError(error.message, error.stack);
        }
      }
      return null;
    }
    function printer(val, config, indentation, depth, refs, hasCalledToJSON) {
      const plugin = findPlugin(config.plugins, val);
      if (plugin !== null) {
        return printPlugin(plugin, val, config, indentation, depth, refs);
      }
      const basicResult = printBasicValue(val, config.printFunctionName, config.escapeRegex, config.escapeString);
      if (basicResult !== null) {
        return basicResult;
      }
      return printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON);
    }
    var DEFAULT_THEME = {
      comment: "gray",
      content: "reset",
      prop: "yellow",
      tag: "cyan",
      value: "green"
    };
    var DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);
    var DEFAULT_OPTIONS = {
      callToJSON: true,
      compareKeys: void 0,
      escapeRegex: false,
      escapeString: true,
      highlight: false,
      indent: 2,
      maxDepth: Infinity,
      maxWidth: Infinity,
      min: false,
      plugins: [],
      printBasicPrototype: true,
      printFunctionName: true,
      theme: DEFAULT_THEME
    };
    exports.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
    function validateOptions(options) {
      Object.keys(options).forEach((key) => {
        if (!Object.prototype.hasOwnProperty.call(DEFAULT_OPTIONS, key)) {
          throw new Error(`pretty-format: Unknown option "${key}".`);
        }
      });
      if (options.min && options.indent !== void 0 && options.indent !== 0) {
        throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
      }
      if (options.theme !== void 0) {
        if (options.theme === null) {
          throw new Error('pretty-format: Option "theme" must not be null.');
        }
        if (typeof options.theme !== "object") {
          throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`);
        }
      }
    }
    var getColorsHighlight = (options) => DEFAULT_THEME_KEYS.reduce((colors, key) => {
      const value = options.theme && options.theme[key] !== void 0 ? options.theme[key] : DEFAULT_THEME[key];
      const color = value && _ansiStyles.default[value];
      if (color && typeof color.close === "string" && typeof color.open === "string") {
        colors[key] = color;
      } else {
        throw new Error(`pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`);
      }
      return colors;
    }, /* @__PURE__ */ Object.create(null));
    var getColorsEmpty = () => DEFAULT_THEME_KEYS.reduce((colors, key) => {
      colors[key] = {
        close: "",
        open: ""
      };
      return colors;
    }, /* @__PURE__ */ Object.create(null));
    var getPrintFunctionName = (options) => {
      var _options$printFunctio;
      return (_options$printFunctio = options === null || options === void 0 ? void 0 : options.printFunctionName) !== null && _options$printFunctio !== void 0 ? _options$printFunctio : DEFAULT_OPTIONS.printFunctionName;
    };
    var getEscapeRegex = (options) => {
      var _options$escapeRegex;
      return (_options$escapeRegex = options === null || options === void 0 ? void 0 : options.escapeRegex) !== null && _options$escapeRegex !== void 0 ? _options$escapeRegex : DEFAULT_OPTIONS.escapeRegex;
    };
    var getEscapeString = (options) => {
      var _options$escapeString;
      return (_options$escapeString = options === null || options === void 0 ? void 0 : options.escapeString) !== null && _options$escapeString !== void 0 ? _options$escapeString : DEFAULT_OPTIONS.escapeString;
    };
    var getConfig = (options) => {
      var _options$callToJSON, _options$indent, _options$maxDepth, _options$maxWidth, _options$min, _options$plugins, _options$printBasicPr;
      return {
        callToJSON: (_options$callToJSON = options === null || options === void 0 ? void 0 : options.callToJSON) !== null && _options$callToJSON !== void 0 ? _options$callToJSON : DEFAULT_OPTIONS.callToJSON,
        colors: options !== null && options !== void 0 && options.highlight ? getColorsHighlight(options) : getColorsEmpty(),
        compareKeys: typeof (options === null || options === void 0 ? void 0 : options.compareKeys) === "function" ? options.compareKeys : DEFAULT_OPTIONS.compareKeys,
        escapeRegex: getEscapeRegex(options),
        escapeString: getEscapeString(options),
        indent: options !== null && options !== void 0 && options.min ? "" : createIndent((_options$indent = options === null || options === void 0 ? void 0 : options.indent) !== null && _options$indent !== void 0 ? _options$indent : DEFAULT_OPTIONS.indent),
        maxDepth: (_options$maxDepth = options === null || options === void 0 ? void 0 : options.maxDepth) !== null && _options$maxDepth !== void 0 ? _options$maxDepth : DEFAULT_OPTIONS.maxDepth,
        maxWidth: (_options$maxWidth = options === null || options === void 0 ? void 0 : options.maxWidth) !== null && _options$maxWidth !== void 0 ? _options$maxWidth : DEFAULT_OPTIONS.maxWidth,
        min: (_options$min = options === null || options === void 0 ? void 0 : options.min) !== null && _options$min !== void 0 ? _options$min : DEFAULT_OPTIONS.min,
        plugins: (_options$plugins = options === null || options === void 0 ? void 0 : options.plugins) !== null && _options$plugins !== void 0 ? _options$plugins : DEFAULT_OPTIONS.plugins,
        printBasicPrototype: (_options$printBasicPr = options === null || options === void 0 ? void 0 : options.printBasicPrototype) !== null && _options$printBasicPr !== void 0 ? _options$printBasicPr : true,
        printFunctionName: getPrintFunctionName(options),
        spacingInner: options !== null && options !== void 0 && options.min ? " " : "\n",
        spacingOuter: options !== null && options !== void 0 && options.min ? "" : "\n"
      };
    };
    function createIndent(indent) {
      return new Array(indent + 1).join(" ");
    }
    function format(val, options) {
      if (options) {
        validateOptions(options);
        if (options.plugins) {
          const plugin = findPlugin(options.plugins, val);
          if (plugin !== null) {
            return printPlugin(plugin, val, getConfig(options), "", 0, []);
          }
        }
      }
      const basicResult = printBasicValue(val, getPrintFunctionName(options), getEscapeRegex(options), getEscapeString(options));
      if (basicResult !== null) {
        return basicResult;
      }
      return printComplexValue(val, getConfig(options), "", 0, []);
    }
    var plugins = {
      AsymmetricMatcher: _AsymmetricMatcher.default,
      ConvertAnsi: _ConvertAnsi.default,
      DOMCollection: _DOMCollection.default,
      DOMElement: _DOMElement.default,
      Immutable: _Immutable.default,
      ReactElement: _ReactElement.default,
      ReactTestComponent: _ReactTestComponent.default
    };
    exports.plugins = plugins;
    var _default = format;
    exports.default = _default;
  }
});

// src/utils.ts
var import_pretty_format = __toESM(require_build(), 1);
import chalk from "chalk";
var {
  AsymmetricMatcher,
  DOMCollection,
  DOMElement,
  Immutable,
  ReactElement,
  ReactTestComponent
} = import_pretty_format.plugins;
var PLUGINS = [
  ReactTestComponent,
  ReactElement,
  DOMElement,
  DOMCollection,
  Immutable,
  AsymmetricMatcher
];
var DIM_COLOR = chalk.dim;
var EXPECTED_COLOR = chalk.green;
var RECEIVED_COLOR = chalk.red;
var SPACE_SYMBOL = "\xB7";
function stringify(object, maxDepth = 10, maxWidth = 10) {
  let MAX_LENGTH = 1e4;
  let result;
  try {
    result = (0, import_pretty_format.format)(object, {
      maxDepth,
      maxWidth,
      min: true,
      plugins: PLUGINS
    });
  } catch {
    result = (0, import_pretty_format.format)(object, {
      callToJSON: false,
      maxDepth,
      maxWidth,
      min: true,
      plugins: PLUGINS
    });
  }
  if (result.length >= MAX_LENGTH && maxDepth > 1) {
    return stringify(object, Math.floor(maxDepth / 2), maxWidth);
  }
  if (result.length >= MAX_LENGTH && maxWidth > 1) {
    return stringify(object, maxDepth, Math.floor(maxWidth / 2));
  }
  return result;
}
function replaceTrailingSpaces(text) {
  return text.replace(/\s+$/gm, (spaces) => SPACE_SYMBOL.repeat(spaces.length));
}
function printReceived(object) {
  return RECEIVED_COLOR(replaceTrailingSpaces(stringify(object)));
}
function matcherHint(matcherName, received = "received", expected = "expected", options = {}) {
  const {
    comment = "",
    expectedColor = EXPECTED_COLOR,
    isDirectExpectCall = false,
    isNot = false,
    promise = "",
    receivedColor = RECEIVED_COLOR,
    secondArgument = "",
    secondArgumentColor = EXPECTED_COLOR
  } = options;
  let hint = "";
  let dimString = "expect";
  if (!isDirectExpectCall && received !== "") {
    hint += DIM_COLOR(`${dimString}(`) + receivedColor(received);
    dimString = ")";
  }
  if (promise !== "") {
    hint += DIM_COLOR(`${dimString}.`) + promise;
    dimString = "";
  }
  if (isNot) {
    hint += `${DIM_COLOR(`${dimString}.`)}not`;
    dimString = "";
  }
  if (matcherName.includes(".")) {
    dimString += matcherName;
  } else {
    hint += DIM_COLOR(`${dimString}.`) + matcherName;
    dimString = "";
  }
  if (expected === "") {
    dimString += "()";
  } else {
    hint += DIM_COLOR(`${dimString}(`) + expectedColor(expected);
    if (secondArgument) {
      hint += DIM_COLOR(", ") + secondArgumentColor(secondArgument);
    }
    dimString = ")";
  }
  if (comment !== "") {
    dimString += ` // ${comment}`;
  }
  if (dimString !== "") {
    hint += DIM_COLOR(dimString);
  }
  return hint;
}
function isHTMLString(html) {
  return typeof html === "string" && /(<([^>]+)>)/i.test(html);
}
function isHTMLElement(html) {
  return !!html && typeof html === "object" && typeof html.tagName === "string";
}

export {
  printReceived,
  matcherHint,
  isHTMLString,
  isHTMLElement
};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
