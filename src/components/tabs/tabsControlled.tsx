import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useMediaDevice } from '@/lib/hooks/useMediaDevice/useMediaDevice';

import { TabsStandAlone } from './tabsStandAlone';
import type { TabsUnControlledProps } from './types/tabs';

export const TabsControlled = forwardRef(
  <Variant extends string>(
    { additionalClasses, variant, ...props }: TabsUnControlledProps<Variant>,
    ref: ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'TABS',
      variant,
    });

    const device = useMediaDevice();

    return (
      <TabsStandAlone
        {...props}
        ref={ref}
        cssClasses={cssClasses}
        device={device}
        selectedTab={props.defaultSelectedTab}
      />
    );
  },
);
