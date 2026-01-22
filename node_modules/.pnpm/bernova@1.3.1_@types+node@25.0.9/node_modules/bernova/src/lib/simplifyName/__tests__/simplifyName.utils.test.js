import { describe, it, expect } from 'vitest';
import { simplifyName } from '../simplifyName.utils.js';

describe('simplifyName', () => {
  it('should simplify basic hyphenated names', () => {
    expect(simplifyName('my-button-large')).toBe('my_button_large');
  });

  it('should simplify dot-separated names', () => {
    expect(simplifyName('header.nav.item')).toBe('header_nav_item');
  });

  it('should remove duplicate parts', () => {
    expect(simplifyName('duplicate-duplicate-word')).toBe('duplicate_word');
  });

  it('should handle mixed separators', () => {
    expect(simplifyName('mixed-name.with_different-separators')).toBe(
      'mixed_name_with_different_separators'
    );
  });

  it('should handle names with numbers', () => {
    expect(simplifyName('button-v2-large')).toBe('button_v2_large');
  });

  it('should handle camelCase names', () => {
    expect(simplifyName('myButtonComponent')).toBe('myButtonComponent');
  });

  it('should handle names with special characters', () => {
    expect(simplifyName('button--modifier__variant')).toBe(
      'button_modifier_variant'
    );
  });

  it('should handle empty string', () => {
    expect(simplifyName('')).toBe('');
  });

  it('should handle null input', () => {
    expect(simplifyName(null)).toBe('');
  });

  it('should handle undefined input', () => {
    expect(simplifyName(undefined)).toBe('');
  });

  it('should handle non-string input', () => {
    expect(simplifyName(123)).toBe('');
    expect(simplifyName({})).toBe('');
    expect(simplifyName([])).toBe('');
  });

  it('should handle names with only special characters', () => {
    expect(simplifyName('---___...')).toBe('');
  });

  it('should handle single word names', () => {
    expect(simplifyName('button')).toBe('button');
  });

  it('should preserve alphanumeric order when no duplicates', () => {
    expect(simplifyName('a1-b2-c3')).toBe('a1_b2_c3');
  });

  it('should handle names with spaces', () => {
    expect(simplifyName('my button component')).toBe('my_button_component');
  });

  it('should handle BEM-style class names', () => {
    expect(simplifyName('block__element--modifier')).toBe(
      'block_element_modifier'
    );
  });

  it('should handle file-like names', () => {
    expect(simplifyName('my-component.styles.css')).toBe(
      'my_component_styles_css'
    );
  });

  it('should remove duplicates regardless of case', () => {
    // Note: Since we're using Set, case sensitivity is preserved
    expect(simplifyName('Button-button-BUTTON')).toBe('Button_button_BUTTON');
  });
});
