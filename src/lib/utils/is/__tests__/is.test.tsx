import { describe, expect, it } from 'vitest';

import { isReactNode } from '../isReactNode';
import { isString } from '../isString';
import { isValidHttpUrl } from '../isValidHttpUrl';

describe('isReactNode', () => {
  it('should return true for a valid React element', () => {
    const element = <div>Hello</div>;
    expect(isReactNode(element)).toBe(true);
  });

  it('should return false for non-React elements', () => {
    expect(isReactNode('string')).toBe(false);
    expect(isReactNode(123)).toBe(false);
    expect(isReactNode(null)).toBe(false);
    expect(isReactNode(undefined)).toBe(false);
    expect(isReactNode({})).toBe(false);
  });
});

describe('isString', () => {
  it('should return true for string primitives', () => {
    expect(isString('hello')).toBe(true);
  });

  it('should return true for String objects', () => {
    expect(isString(new String('hello'))).toBe(true);
  });

  it('should return false for non-string values', () => {
    expect(isString(123)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
  });
});

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
