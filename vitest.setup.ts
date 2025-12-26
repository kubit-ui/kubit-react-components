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
  (globalThis as typeof globalThis & { ResizeObserver: typeof ResizeObserver }).ResizeObserver = MockResizeObserver as typeof ResizeObserver;
});
