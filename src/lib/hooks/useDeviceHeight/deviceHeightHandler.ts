// This file is part of the WIP vanilla JS version of the SOFTWEB web UI components.
// It is not intended for use in production and is subject to change.

/**
 * Creates a handler to manage the CSS variable `--100svh` dynamically based on the device's viewport height.
 * This is particularly useful for handling viewport height inconsistencies on mobile browsers.
 *
 * The handler:
 * - Sets the CSS variable `--100svh` to the appropriate value (`100svh` or `window.innerHeight`).
 * - Listens to the `resize` event to update the value dynamically.
 * - Provides a `destroy` method to clean up event listeners and timeouts when no longer needed.
 *
 * @returns An object with a `destroy` method to clean up resources.
 *
 * ## Example Usage
 * ```typescript
 * import { createDeviceHeightHandler } from './deviceHeightHandler';
 *
 * const handler = createDeviceHeightHandler();
 *
 * // Later, when the handler is no longer needed:
 * handler.destroy();
 * ```
 *
 * ## Notes
 * - On server-side rendering (SSR), the function returns a no-op `destroy` method.
 * - The CSS variable `--100svh` can be used in your stylesheets to represent the adjusted viewport height.
 */
export function createDeviceHeightHandler(): {
  destroy: () => void;
} {
  if (typeof window === 'undefined') {
    return {
      destroy: () => {
        // No-op for SSR
      },
    };
  }

  let timeout: ReturnType<typeof setTimeout> | null = null;

  const setVh = () => {
    let vh;
    if (!window.CSS?.supports) {
      vh = `${window.innerHeight}px`;
    } else {
      const supportSvh =
        window.CSS.supports('height: 100svh') ||
        window.CSS.supports('max-height: 100svh');
      vh = supportSvh ? '100svh' : `${window.innerHeight}px`;
    }
    document.documentElement.style.setProperty('--100svh', vh);
  };

  const debounceHeight = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(setVh, 250);
  };

  setVh();
  window.addEventListener('resize', debounceHeight);

  return {
    destroy() {
      window.removeEventListener('resize', debounceHeight);
      if (timeout) {
        clearTimeout(timeout);
      }
    },
  };
}
