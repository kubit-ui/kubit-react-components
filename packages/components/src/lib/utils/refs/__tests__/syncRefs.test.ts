import { describe, expect, it, vi } from 'vitest';

import { syncInnerAndForwardedRef } from '../syncRefs';

describe('syncInnerAndForwardedRef', () => {
  it('should sync innerRef with forwardedRef when forwardedRef is an object', () => {
    const innerRef = { current: document.createElement('div') };
    const forwardedRef = { current: null };

    syncInnerAndForwardedRef({ forwardedRef, innerRef });

    expect(forwardedRef.current).toBe(innerRef.current);
  });

  it('should call forwardedRef function with innerRef.current when forwardedRef is a function', () => {
    const innerRef = { current: document.createElement('div') };
    const forwardedRef = vi.fn();

    syncInnerAndForwardedRef({ forwardedRef, innerRef });

    expect(forwardedRef).toHaveBeenCalledWith(innerRef.current);
  });

  it('should handle null forwardedRef', () => {
    const innerRef = { current: document.createElement('div') };
    const forwardedRef = null;

    expect(() => {
      syncInnerAndForwardedRef({ forwardedRef, innerRef });
    }).not.toThrow();
  });

  it('should handle undefined forwardedRef', () => {
    const innerRef = { current: document.createElement('div') };
    const forwardedRef = undefined;

    expect(() => {
      syncInnerAndForwardedRef({ forwardedRef, innerRef });
    }).not.toThrow();
  });

  it('should handle innerRef with null current', () => {
    const innerRef = { current: null };
    const forwardedRef = { current: document.createElement('div') };

    syncInnerAndForwardedRef({ forwardedRef, innerRef });

    expect(forwardedRef.current).toBe(null);
  });

  it('should handle function forwardedRef with null innerRef.current', () => {
    const innerRef = { current: null };
    const forwardedRef = vi.fn();

    syncInnerAndForwardedRef({ forwardedRef, innerRef });

    expect(forwardedRef).toHaveBeenCalledWith(null);
  });
});
