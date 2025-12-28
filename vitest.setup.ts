import '@testing-library/jest-dom';
import 'html-validate/vitest';
import { beforeAll, vi } from 'vitest';

// Mock de ResizeObserver para todos los tests
class MockResizeObserver {
  callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }

  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

beforeAll(() => {
  // Mock HTMLCanvasElement.getContext to avoid the error
  HTMLCanvasElement.prototype.getContext = function () {
    return null;
  };

  // Mock de ResizeObserver global - use the class directly as constructor
  (
    globalThis as typeof globalThis & { ResizeObserver: typeof ResizeObserver }
  ).ResizeObserver = MockResizeObserver as typeof ResizeObserver;

  // Mock getComputedStyle to support pseudo-elements (jsdom limitation)
  const originalGetComputedStyle = window.getComputedStyle;

  window.getComputedStyle = function (
    element: Element,
    pseudoElt?: string | null,
  ): CSSStyleDeclaration {
    // If pseudo-element is requested, return a Proxy that mimics CSSStyleDeclaration
    if (pseudoElt) {
      const mockStyle = {
        content: '""',
        display: 'inline',
        height: 'auto',
        position: 'static',
        width: 'auto',
      };

      // Create a Proxy to handle all possible CSS property accesses
      return new Proxy({} as CSSStyleDeclaration, {
        get(_target, prop: string | symbol) {
          if (prop === 'getPropertyValue') {
            return (propName: string) =>
              mockStyle[propName as keyof typeof mockStyle] || '';
          }
          if (prop === 'length') {
            return 0;
          }
          if (prop === 'cssText') {
            return '';
          }
          if (prop === 'parentRule') {
            return null;
          }
          if (prop === 'getPropertyPriority') {
            return () => '';
          }
          if (prop === 'item') {
            return () => '';
          }
          if (prop === 'removeProperty') {
            return () => '';
          }
          if (prop === 'setProperty') {
            return () => undefined;
          }
          if (prop === Symbol.iterator) {
            return function* () {
              // Empty iterator
            };
          }
          // Return empty string for any CSS property access
          return mockStyle[prop as keyof typeof mockStyle] || '';
        },
      });
    }

    // For regular elements, use original implementation
    return originalGetComputedStyle.call(this, element, pseudoElt);
  };

  // Suppress jsdom informational message about navigation
  // This appears when tests interact with links or window.location
  // It's not an error, just jsdom notifying about a limitation
  const originalStderrWrite = process.stderr.write.bind(process.stderr);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  process.stderr.write = ((
    chunk: any,
    encoding?: any,
    callback?: any,
  ): boolean => {
    const message = chunk?.toString() || '';
    if (message.includes('Not implemented: navigation to another Document')) {
      if (typeof encoding === 'function') {
        encoding();
      } else if (typeof callback === 'function') {
        callback();
      }
      return true;
    }
    return originalStderrWrite(chunk, encoding, callback);
  }) as typeof process.stderr.write;
});
