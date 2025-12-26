import { useEffect, useRef } from 'react';

/**
 * Custom React hook to dynamically set a CSS variable for the device's viewport height.
 *
 * @returns `void`
 *
 * @remarks
 * - This hook calculates the device's viewport height and sets it as a CSS variable (`--100svh`) on the `document.documentElement`.
 * - It also sets another CSS variable (`--100dvh`) for the dynamic viewport height, which is useful for browsers that support the `dvh` unit (dynamic viewport height).
 * - It ensures compatibility with browsers that support the `svh` or `dvh` unit (small or dynamic viewport height) and falls back to `window.innerHeight` or `document.documentElement.clientHeight` for older browsers.
 * - The hook listens for window resize events and updates the CSS variable with a debounced function to avoid excessive recalculations.
 * - This is particularly useful for handling viewport height issues on mobile devices, where the browser's UI (e.g., address bar) can affect the visible height.
 *
 * @example
 * ```typescript
 * import { useDeviceHeight } from './useDeviceHeight';
 *
 * const App = () => {
 *   useDeviceHeight();
 *
 *   return (
 *     <div style={{ height: 'var(--100svh)' }}>
 *       <p>This div will always match the device's viewport height.</p>
 *     </div>
 *   );
 * };
 * ```
 */
export const useDeviceHeight = (): void => {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setVh = () => {
    let svh, dvh;
    if (!window.CSS.supports) {
      dvh = `${window.innerHeight}px`;
      svh = `${document.documentElement.clientHeight}px`;
    } else {
      const supportDvh =
        window.CSS.supports('height: 100dvh') ||
        window.CSS.supports('max-height: 100dvh');
      dvh = supportDvh ? '100dvh' : `${window.innerHeight}px`;
      const supportSvh =
        window.CSS.supports('height: 100svh') ||
        window.CSS.supports('max-height: 100svh');
      svh = supportSvh
        ? '100svh'
        : `${document.documentElement.clientHeight}px`;
    }
    document.documentElement.style.setProperty('--100dvh', dvh);
    document.documentElement.style.setProperty('--100svh', svh);
  };

  const debounceHeight = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      setVh();
    }, 250);
  };

  useEffect(() => {
    setVh();
    window.addEventListener('resize', debounceHeight);
    return () => {
      window.removeEventListener('resize', debounceHeight);
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);
};
