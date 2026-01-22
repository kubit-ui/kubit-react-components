import CJS_COMPAT_NODE_URL_3ym3gv1txoi from 'node:url';
import CJS_COMPAT_NODE_PATH_3ym3gv1txoi from 'node:path';
import CJS_COMPAT_NODE_MODULE_3ym3gv1txoi from "node:module";

var __filename = CJS_COMPAT_NODE_URL_3ym3gv1txoi.fileURLToPath(import.meta.url);
var __dirname = CJS_COMPAT_NODE_PATH_3ym3gv1txoi.dirname(__filename);
var require = CJS_COMPAT_NODE_MODULE_3ym3gv1txoi.createRequire(import.meta.url);

// ------------------------------------------------------------
// end of CJS compatibility banner, injected by Storybook's esbuild configuration
// ------------------------------------------------------------
import "./chunk-P4K3OTNT.js";

// ../../node_modules/camelcase/index.js
var UPPERCASE = /[\p{Lu}]/u, LOWERCASE = /[\p{Ll}]/u, LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/u, SEPARATORS = /[_.\- ]+/, IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u, LEADING_SEPARATORS = new RegExp("^" + SEPARATORS.source), SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, "gu"), NUMBERS_AND_IDENTIFIER = new RegExp(String.raw`\d+` + IDENTIFIER.source, "gu"), preserveCamelCase = (string, toLowerCase, toUpperCase, preserveConsecutiveUppercase2) => {
  let isLastCharLower = !1, isLastCharUpper = !1, isLastLastCharUpper = !1, isLastLastCharPreserved = !1;
  for (let index = 0; index < string.length; index++) {
    let character = string[index];
    isLastLastCharPreserved = index > 2 ? string[index - 3] === "-" : !0, isLastCharLower && UPPERCASE.test(character) ? (string = string.slice(0, index) + "-" + string.slice(index), isLastCharLower = !1, isLastLastCharUpper = isLastCharUpper, isLastCharUpper = !0, index++) : isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character) && (!isLastLastCharPreserved || preserveConsecutiveUppercase2) ? (string = string.slice(0, index - 1) + "-" + string.slice(index - 1), isLastLastCharUpper = isLastCharUpper, isLastCharUpper = !1, isLastCharLower = !0) : (isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character, isLastLastCharUpper = isLastCharUpper, isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character);
  }
  return string;
}, preserveConsecutiveUppercase = (input, toLowerCase) => input.replace(LEADING_CAPITAL, (match) => toLowerCase(match)), processWithCasePreservation = (input, toLowerCase, preserveConsecutiveUppercase2) => {
  let result = "", previousWasNumber = !1, previousWasUppercase = !1, characters = [...input];
  for (let index = 0; index < characters.length; index++) {
    let character = characters[index], isUpperCase = UPPERCASE.test(character), nextCharIsUpperCase = index + 1 < characters.length && UPPERCASE.test(characters[index + 1]);
    previousWasNumber && /[\p{Alpha}]/u.test(character) ? (result += character, previousWasNumber = !1, previousWasUppercase = isUpperCase) : preserveConsecutiveUppercase2 && isUpperCase && (previousWasUppercase || nextCharIsUpperCase) ? (result += character, previousWasUppercase = !0) : /\d/.test(character) ? (result += character, previousWasNumber = !0, previousWasUppercase = !1) : SEPARATORS.test(character) ? (result += character, previousWasUppercase = !1) : (result += toLowerCase(character), previousWasNumber = !1, previousWasUppercase = !1);
  }
  return result;
}, postProcess = (input, toUpperCase, { capitalizeAfterNumber }) => {
  let transformNumericIdentifier = capitalizeAfterNumber ? (match, identifier, offset, string) => {
    let nextCharacter = string.charAt(offset + match.length);
    return SEPARATORS.test(nextCharacter) ? match : identifier ? match.slice(0, -identifier.length) + toUpperCase(identifier) : match;
  } : (match) => match;
  return input.replaceAll(NUMBERS_AND_IDENTIFIER, transformNumericIdentifier).replaceAll(
    SEPARATORS_AND_IDENTIFIER,
    (_, identifier) => toUpperCase(identifier)
  );
};
function camelCase(input, options) {
  if (!(typeof input == "string" || Array.isArray(input)))
    throw new TypeError("Expected the input to be `string | string[]`");
  if (options = {
    pascalCase: !1,
    preserveConsecutiveUppercase: !1,
    capitalizeAfterNumber: !0,
    ...options
  }, Array.isArray(input) ? input = input.map((element) => element.trim()).filter((element) => element.length > 0).join("-") : input = input.trim(), input.length === 0)
    return "";
  let leadingPrefix = input.match(/^[_$]*/)[0];
  if (input = input.slice(leadingPrefix.length), input.length === 0)
    return leadingPrefix;
  let toLowerCase = options.locale === !1 ? (string) => string.toLowerCase() : (string) => string.toLocaleLowerCase(options.locale), toUpperCase = options.locale === !1 ? (string) => string.toUpperCase() : (string) => string.toLocaleUpperCase(options.locale);
  return input.length === 1 ? SEPARATORS.test(input) ? leadingPrefix : leadingPrefix + (options.pascalCase ? toUpperCase(input) : toLowerCase(input)) : (input !== toLowerCase(input) && (input = preserveCamelCase(
    input,
    toLowerCase,
    toUpperCase,
    options.preserveConsecutiveUppercase
  )), input = input.replace(LEADING_SEPARATORS, ""), options.capitalizeAfterNumber ? input = options.preserveConsecutiveUppercase ? preserveConsecutiveUppercase(input, toLowerCase) : toLowerCase(input) : input = processWithCasePreservation(input, toLowerCase, options.preserveConsecutiveUppercase), options.pascalCase && input.length > 0 && (input = toUpperCase(input[0]) + input.slice(1)), leadingPrefix + postProcess(input, toUpperCase, options));
}
export {
  camelCase as default
};
