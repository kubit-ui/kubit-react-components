import { forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { OverlayStandAloneProps } from './types/overlay';

export const OverlayStandAlone = forwardRef<
  HTMLDivElement,
  OverlayStandAloneProps
>(({ cssClasses, ...props }, ref): JSX.Element => {
  const customProps = pickCustomAttributes(props);
  return (
    <div
      ref={ref}
      className={cssClasses?.overlay}
      data-testid="overlay"
      {...props}
      {...customProps}
      {...customProps}
    />
  );
});
