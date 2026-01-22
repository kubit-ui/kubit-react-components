import { describe, expect, it } from 'vitest';

import { isValidHttpUrl } from '../isValidHttpUrl';

describe('isValidHttpUrl', () => {
  it('should return true for valid HTTP URLs', () => {
    expect(isValidHttpUrl('http://example.com')).toBe(true);
    expect(isValidHttpUrl('https://example.com')).toBe(true);
  });

  it('should return true for valid data URLs', () => {
    expect(isValidHttpUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==')).toBe(
      true,
    );
  });

  it('should return true for valid relative paths', () => {
    expect(isValidHttpUrl('/path/to/resource')).toBe(true);
    expect(isValidHttpUrl('./relative/path')).toBe(true);
    expect(isValidHttpUrl('../parent/path')).toBe(true);
  });

  it('should return false for invalid URLs', () => {
    expect(isValidHttpUrl('invalid-url')).toBe(false);
    expect(isValidHttpUrl('ftp://example.com')).toBe(false); // Unsupported protocol
    expect(isValidHttpUrl('')).toBe(false);
  });

  it('should return false for non-string inputs', () => {
    // @ts-expect-error Testing invalid input
    expect(isValidHttpUrl(123)).toBe(false);
    // @ts-expect-error Testing invalid input
    expect(isValidHttpUrl(null)).toBe(false);
    // @ts-expect-error Testing invalid input
    expect(isValidHttpUrl(undefined)).toBe(false);
  });
});
