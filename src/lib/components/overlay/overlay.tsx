import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { OverlayProps } from './types/overlay';

import { OverlayStandAlone } from './overlayStandAlone';

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
