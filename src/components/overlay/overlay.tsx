import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { OverlayStandAlone } from './overlayStandAlone';
import type { OverlayProps } from './types/overlay';

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
