/**
 * CSS Advanced Selectors for Bernova
 *
 * Defines CSS selector combinators that enable advanced targeting of elements.
 * These selectors allow for complex CSS relationships and precise element selection.
 *
 * @example
 * // Using adjacent selector: targets next sibling
 * { $advancedSelectors: [{ adjacent: { color: 'red' }, $target: '.item' }] }
 * // Generates: .parent + .item { color: red; }
 */
const cssAdvancedSelectors = {
  /** Adjacent sibling selector - targets the immediately following sibling */
  adjacent: ' + ',

  /** Direct child selector - targets only direct children */
  child: ' > ',

  /** Descendant selector - targets all nested descendants */
  descendant: ' ',

  /** General sibling selector - targets all following siblings */
  near: ' ~ ',

  /** Concatenation - combines selectors without space */
  concat: '',

  /** Column combinator - targets elements in table columns (CSS4) */
  column: ' || ',
};

module.exports = { cssAdvancedSelectors };
