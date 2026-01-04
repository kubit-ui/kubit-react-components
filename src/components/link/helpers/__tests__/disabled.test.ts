import { describe, expect, it } from 'vitest';

import { disabledLink } from '../disabled';

describe('disabledLink', () => {
  it('should return undefined role when disabled is false and no role provided', () => {
    const result = disabledLink(false);
    expect(result).toEqual({ role: undefined });
  });

  it('should return "link" role when disabled is true and no role provided', () => {
    const result = disabledLink(true);
    expect(result).toEqual({ role: 'link' });
  });

  it('should return custom role when disabled is false and role provided', () => {
    const result = disabledLink(false, 'button');
    expect(result).toEqual({ role: 'button' });
  });

  it('should return custom role when disabled is true and role provided', () => {
    const result = disabledLink(true, 'button');
    expect(result).toEqual({ role: 'button' });
  });

  it('should handle different AriaRole types', () => {
    const roles = [
      'navigation',
      'banner',
      'complementary',
      'contentinfo',
    ] as const;

    roles.forEach((role) => {
      const result = disabledLink(true, role);
      expect(result).toEqual({ role });
    });
  });
});
