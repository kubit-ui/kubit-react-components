import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useMediaDevice } from '@/lib/hooks/useMediaDevice/useMediaDevice';

import type { TabsUnControlledProps } from './types/tabs';

import { TabsStandAlone } from './tabsStandAlone';

/**
 * TabsControlled component for tab navigation with external state management.
 *
 * This component displays a set of tabs where the selected tab is controlled
 * externally via props. It's device-aware and adjusts behavior based on screen size.
 *
 * @example
 * ```tsx
 * <TabsControlled
 *   defaultSelectedTab="tab1"
 *   tabs={[
 *     { id: 'tab1', label: 'Tab 1' },
 *     { id: 'tab2', label: 'Tab 2' }
 *   ]}
 * />
 * ```
 */
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
