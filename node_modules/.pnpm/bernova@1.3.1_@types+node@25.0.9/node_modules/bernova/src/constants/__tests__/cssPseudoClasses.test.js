import { describe, it, expect } from 'vitest';
import { cssPseudoClasses } from '../cssPseudoClasses.js';

describe('cssPseudoClasses constants', () => {
  it('should include common interactive pseudo-classes', () => {
    expect(cssPseudoClasses).toHaveProperty('hover');
    expect(cssPseudoClasses).toHaveProperty('focus');
    expect(cssPseudoClasses).toHaveProperty('active');
    expect(cssPseudoClasses).toHaveProperty('visited');
  });

  it('should include form-related pseudo-classes', () => {
    expect(cssPseudoClasses).toHaveProperty('enabled');
    expect(cssPseudoClasses).toHaveProperty('disabled');
    expect(cssPseudoClasses).toHaveProperty('checked');
    expect(cssPseudoClasses).toHaveProperty('valid');
    expect(cssPseudoClasses).toHaveProperty('invalid');
    expect(cssPseudoClasses).toHaveProperty('required');
    expect(cssPseudoClasses).toHaveProperty('optional');
  });

  it('should include structural pseudo-classes', () => {
    expect(cssPseudoClasses).toHaveProperty('first_child');
    expect(cssPseudoClasses).toHaveProperty('last_child');
    expect(cssPseudoClasses).toHaveProperty('nth_child');
    expect(cssPseudoClasses).toHaveProperty('empty');
  });

  it('should have correct CSS pseudo-class names', () => {
    expect(cssPseudoClasses.hover).toBe('hover');
    expect(cssPseudoClasses.first_child).toBe('first-child');
    expect(cssPseudoClasses.last_child).toBe('last-child');
    expect(cssPseudoClasses.nth_child).toBe('nth-child');
    expect(cssPseudoClasses.read_only).toBe('read-only');
  });

  it('should convert underscores to hyphens in pseudo-class names', () => {
    // Test that underscore-separated names map to hyphen-separated CSS
    expect(cssPseudoClasses.placeholder_shown).toBe('placeholder-shown');
    expect(cssPseudoClasses.out_of_range).toBe('out-of-range');
    expect(cssPseudoClasses.user_invalid).toBe('user-invalid');
  });

  it('should be a comprehensive object with many pseudo-classes', () => {
    const pseudoClassCount = Object.keys(cssPseudoClasses).length;
    expect(pseudoClassCount).toBeGreaterThan(50); // Should have many pseudo-classes
  });
});
