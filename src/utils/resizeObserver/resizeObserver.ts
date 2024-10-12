let ResizeObserver: {
  new (callback: ResizeObserverCallback): ResizeObserver;
  prototype: ResizeObserver;
};

// Avoid crashing in environments where ResizeObserver is not supported
if (typeof self !== 'undefined' && self.ResizeObserver) {
  ResizeObserver = self.ResizeObserver;
} else {
  // Define a minimal type for ResizeObserver polyfill
  class ResizeObserverPolyfill {
    callback;
    constructor(callback: ResizeObserverCallback) {
      this.callback = callback;
    }

    observe(_target: Element, _options?: ResizeObserverOptions): void {
      this.callback();
    }

    unobserve(_target: Element): void {
      // Do nothing
    }

    disconnect(): void {
      // Do nothing
    }
  }

  ResizeObserver = ResizeObserverPolyfill;
}
export { ResizeObserver };
