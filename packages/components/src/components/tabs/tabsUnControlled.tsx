import { type ForwardedRef, forwardRef, useState } from 'react';

import type { TabsUnControlledProps } from './types/tabs';

import { TabsControlled } from './tabsControlled';

/**
 * TabsUnControlled component with internal tab selection state.
 *
 * This component renders a tab navigation that manages the selected tab internally.
 * It starts with a default selected tab and updates automatically on user interaction.
 * Useful when you don't need to control tab selection from a parent component.
 *
 * @example
 * ```tsx
 * <TabsUnControlled
 *   defaultSelectedTab={0}
 *   tabs={[
 *     { id: 'tab1', label: 'Tab 1' },
 *     { id: 'tab2', label: 'Tab 2' }
 *   ]}
 *   onSelectTab={(index) => console.log(index)}
 * />
 * ```
 */
export const TabsUnControlled = forwardRef(function <
  Variant extends string | undefined,
>(
  {
    defaultSelectedTab = 0,
    onSelectTab,
    ...props
  }: TabsUnControlledProps<Variant>,
  ref: ForwardedRef<HTMLDivElement>,
): JSX.Element {
  const [selectedTab, setSelectedTab] = useState(defaultSelectedTab);

  const handleSelectTab = (tab: number) => {
    setSelectedTab(tab);
    onSelectTab?.(tab);
  };

  return (
    <TabsControlled
      {...props}
      ref={ref}
      defaultSelectedTab={selectedTab}
      onSelectTab={handleSelectTab}
    />
  );
});

export { TabsUnControlled as Tabs };
