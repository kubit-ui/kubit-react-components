import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { OverlayProps } from './types/overlay';

import { OverlayStandAlone } from './overlayStandAlone';

/**
 * Overlay component for creating backdrop layers.
 *
 * This component renders a semi-transparent overlay layer, typically used
 * as a backdrop for modals, dialogs, or other overlays. It manages styling
 * through the design system and supports custom variants.
 *
 * @example
 * ```tsx
 * <Overlay variant="dark" onClick={handleClose} />
 * ```
 */
export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  ({ additionalClasses, variant, ...props }, ref): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'OVERLAY',
      variant,
    });

    return <OverlayStandAlone {...props} ref={ref} cssClasses={cssClasses} />;
  },
);
