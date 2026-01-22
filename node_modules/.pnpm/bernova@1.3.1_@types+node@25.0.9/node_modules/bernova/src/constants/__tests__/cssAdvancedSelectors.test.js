import { describe, it, expect } from 'vitest';
import { cssAdvancedSelectors } from '../cssAdvancedSelectors.js';

describe('cssAdvancedSelectors constants', () => {
  it('should have all required selector types', () => {
    expect(cssAdvancedSelectors).toHaveProperty('adjacent');
    expect(cssAdvancedSelectors).toHaveProperty('child');
    expect(cssAdvancedSelectors).toHaveProperty('descendant');
    expect(cssAdvancedSelectors).toHaveProperty('near');
    expect(cssAdvancedSelectors).toHaveProperty('concat');
    expect(cssAdvancedSelectors).toHaveProperty('column');
  });

  it('should have correct CSS combinator values', () => {
    expect(cssAdvancedSelectors.adjacent).toBe(' + ');
    expect(cssAdvancedSelectors.child).toBe(' > ');
    expect(cssAdvancedSelectors.descendant).toBe(' ');
    expect(cssAdvancedSelectors.near).toBe(' ~ ');
    expect(cssAdvancedSelectors.concat).toBe('');
    expect(cssAdvancedSelectors.column).toBe(' || ');
  });

  it('should be immutable object structure', () => {
    expect(Object.keys(cssAdvancedSelectors)).toHaveLength(6);
  });

  it('should have proper spacing for combinators', () => {
    // Adjacent and near should have spaces around operators
    expect(cssAdvancedSelectors.adjacent).toMatch(/^\s\+\s$/);
    expect(cssAdvancedSelectors.near).toMatch(/^\s~\s$/);

    // Child should have spaces around operator
    expect(cssAdvancedSelectors.child).toMatch(/^\s>\s$/);

    // Descendant should be just a space
    expect(cssAdvancedSelectors.descendant).toBe(' ');
  });
});
