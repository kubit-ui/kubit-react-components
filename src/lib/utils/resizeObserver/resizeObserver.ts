/**
 * A minimal polyfill for ResizeObserver to avoid crashing in environments where ResizeObserver is not supported.
 */
class ResizeObserverPolyfill {
  private callback: ResizeObserverCallback;

  /**
   * Creates an instance of ResizeObserverPolyfill.
   * @param {ResizeObserverCallback} callback - The callback to be invoked when an observed element is resized.
   */
  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }

  /**
   * Starts observing an element.
   * @param {Element} target - The element to observe.
   */
  observe(target: Element): void {
    this.callback([{ target } as ResizeObserverEntry], this);
  }

  /**
   * Stops observing an element.
   * @param {Element} target - The element to stop observing.
   */
  unobserve(): void {
    // Do nothing
  }

  /**
   * Disconnects the observer from all observed elements.
   */
  disconnect(): void {
    // Do nothing
  }
}

let ResizeObserver: {
  new (callback: ResizeObserverCallback): ResizeObserver;
  prototype: ResizeObserver;
};

if (typeof self !== 'undefined' && self.ResizeObserver) {
  ResizeObserver = self.ResizeObserver;
} else {
  ResizeObserver = ResizeObserverPolyfill as unknown as {
    new (callback: ResizeObserverCallback): ResizeObserver;
    prototype: ResizeObserver;
  };
}

export { ResizeObserver };
