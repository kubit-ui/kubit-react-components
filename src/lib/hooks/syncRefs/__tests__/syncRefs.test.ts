import { type MutableRefObject, createRef } from 'react';

import { syncInnerAndForwardedRef } from '../syncRefs';

describe('syncInnerAndForwardedRef', () => {
  it('should sync with function ref', () => {
    const innerRef = createRef<HTMLDivElement>();
    const mockElement = document.createElement('div');
    const mockForwardedRef = vi.fn();

    // Set the inner ref to mock element
    Object.defineProperty(innerRef, 'current', {
      value: mockElement,
      writable: true,
    });

    syncInnerAndForwardedRef({
      forwardedRef: mockForwardedRef,
      innerRef: innerRef as MutableRefObject<HTMLDivElement | null>,
    });

    expect(mockForwardedRef).toHaveBeenCalledWith(mockElement);
  });

  it('should sync with object ref', () => {
    const innerRef = createRef<HTMLDivElement>();
    const forwardedRef = createRef<HTMLDivElement>();
    const mockElement = document.createElement('div');

    // Set the inner ref to mock element
    Object.defineProperty(innerRef, 'current', {
      value: mockElement,
      writable: true,
    });

    syncInnerAndForwardedRef({
      forwardedRef: forwardedRef,
      innerRef: innerRef as MutableRefObject<HTMLDivElement | null>,
    });

    expect(forwardedRef.current).toBe(mockElement);
  });

  it('should handle null forwardedRef', () => {
    const innerRef = createRef<HTMLDivElement>();
    const mockElement = document.createElement('div');

    // Set the inner ref to mock element
    Object.defineProperty(innerRef, 'current', {
      value: mockElement,
      writable: true,
    });

    // Should not throw when forwardedRef is null
    expect(() => {
      syncInnerAndForwardedRef({
        forwardedRef: null,
        innerRef: innerRef as MutableRefObject<HTMLDivElement | null>,
      });
    }).not.toThrow();
  });
});
