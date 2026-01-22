import CJS_COMPAT_NODE_URL_3ym3gv1txoi from 'node:url';
import CJS_COMPAT_NODE_PATH_3ym3gv1txoi from 'node:path';
import CJS_COMPAT_NODE_MODULE_3ym3gv1txoi from "node:module";

var __filename = CJS_COMPAT_NODE_URL_3ym3gv1txoi.fileURLToPath(import.meta.url);
var __dirname = CJS_COMPAT_NODE_PATH_3ym3gv1txoi.dirname(__filename);
var require = CJS_COMPAT_NODE_MODULE_3ym3gv1txoi.createRequire(import.meta.url);

// ------------------------------------------------------------
// end of CJS compatibility banner, injected by Storybook's esbuild configuration
// ------------------------------------------------------------

// ../../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = process.env.NODE_ENV === "production", prefix = "Invariant failed";
function invariant(condition, message) {
  if (!condition) {
    if (isProduction)
      throw new Error(prefix);
    var provided = typeof message == "function" ? message() : message, value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
  }
}

// ../../node_modules/empathic/resolve.mjs
import { createRequire } from "node:module";
import { isAbsolute, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
function absolute(input, root) {
  return isAbsolute(input) ? input : resolve(root || ".", input);
}
function from(root, ident, silent) {
  try {
    let r = root instanceof URL || root.startsWith("file://") ? join(fileURLToPath(root), "noop.js") : join(absolute(root), "noop.js");
    return createRequire(r).resolve(ident);
  } catch (err) {
    if (!silent) throw err;
  }
}

// ../../node_modules/empathic/walk.mjs
import { dirname } from "node:path";
function up(base, options) {
  let { last, cwd } = options || {}, tmp = absolute(base, cwd), root = absolute(last || "/", cwd), prev, arr = [];
  for (; prev !== root && (arr.push(tmp), tmp = dirname(prev = tmp), tmp !== prev); )
    ;
  return arr;
}

// ../../node_modules/empathic/find.mjs
import { join as join2 } from "node:path";
import { existsSync, statSync } from "node:fs";
function up2(name, options) {
  let dir, tmp, start = options && options.cwd || "";
  for (dir of up(start, options))
    if (tmp = join2(dir, name), existsSync(tmp)) return tmp;
}
function any(names, options) {
  let dir, start = options && options.cwd || "", j = 0, len = names.length, tmp;
  for (dir of up(start, options))
    for (j = 0; j < len; j++)
      if (tmp = join2(dir, names[j]), existsSync(tmp)) return tmp;
}

// ../../node_modules/detect-indent/index.js
var INDENT_REGEX = /^(?:( )+|\t+)/, INDENT_TYPE_SPACE = "space";
function makeIndentsMap(string, ignoreSingleSpaces) {
  let indents = /* @__PURE__ */ new Map(), previousSize = 0, previousIndentType, key;
  for (let line of string.split(/\n/g)) {
    if (!line)
      continue;
    let indent, indentType, use, weight, entry, matches = line.match(INDENT_REGEX);
    if (matches === null)
      previousSize = 0, previousIndentType = "";
    else {
      if (indent = matches[0].length, indentType = matches[1] ? INDENT_TYPE_SPACE : "tab", ignoreSingleSpaces && indentType === INDENT_TYPE_SPACE && indent === 1)
        continue;
      indentType !== previousIndentType && (previousSize = 0), previousIndentType = indentType, use = 1, weight = 0;
      let indentDifference = indent - previousSize;
      if (previousSize = indent, indentDifference === 0)
        use = 0, weight = 1;
      else {
        let absoluteIndentDifference = indentDifference > 0 ? indentDifference : -indentDifference;
        key = encodeIndentsKey(indentType, absoluteIndentDifference);
      }
      entry = indents.get(key), entry = entry === void 0 ? [1, 0] : [entry[0] + use, entry[1] + weight], indents.set(key, entry);
    }
  }
  return indents;
}
function encodeIndentsKey(indentType, indentAmount) {
  return (indentType === INDENT_TYPE_SPACE ? "s" : "t") + String(indentAmount);
}
function decodeIndentsKey(indentsKey) {
  let type = indentsKey[0] === "s" ? INDENT_TYPE_SPACE : "tab", amount = Number(indentsKey.slice(1));
  return { type, amount };
}
function getMostUsedKey(indents) {
  let result, maxUsed = 0, maxWeight = 0;
  for (let [key, [usedCount, weight]] of indents)
    (usedCount > maxUsed || usedCount === maxUsed && weight > maxWeight) && (maxUsed = usedCount, maxWeight = weight, result = key);
  return result;
}
function makeIndentString(type, amount) {
  return (type === INDENT_TYPE_SPACE ? " " : "	").repeat(amount);
}
function detectIndent(string) {
  if (typeof string != "string")
    throw new TypeError("Expected a string");
  let indents = makeIndentsMap(string, !0);
  indents.size === 0 && (indents = makeIndentsMap(string, !1));
  let keyOfMostUsedIndent = getMostUsedKey(indents), type, amount = 0, indent = "";
  return keyOfMostUsedIndent !== void 0 && ({ type, amount } = decodeIndentsKey(keyOfMostUsedIndent), indent = makeIndentString(type, amount)), {
    amount,
    type,
    indent
  };
}

export {
  invariant,
  from,
  up,
  up2,
  any,
  detectIndent
};
