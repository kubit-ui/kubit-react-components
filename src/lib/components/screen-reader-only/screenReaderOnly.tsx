import { forwardRef } from 'react';

import type { ScreenReaderOnlyProps } from './types/screenReaderOnly';

import { ScreenReaderOnlyStandAlone } from './screenReaderOnlyStandAlone';

/**
 * ScreenReaderOnly component provides content that is only visible to screen readers.
 * This is a wrapper around ScreenReaderOnlyStandAlone that can be extended with additional logic.
 *
 * @example
 * ```tsx
 * <ScreenReaderOnly ariaLive="polite">
 *   Loading content...
 * </ScreenReaderOnly>
 * ```
 */
export const ScreenReaderOnly = forwardRef<
  HTMLSpanElement,
  ScreenReaderOnlyProps
>((props, ref) => {
  return <ScreenReaderOnlyStandAlone ref={ref} {...props} />;
});

ScreenReaderOnly.displayName = 'ScreenReaderOnly';
