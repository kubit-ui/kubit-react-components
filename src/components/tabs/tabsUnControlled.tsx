import { type ForwardedRef, forwardRef, useState } from 'react';

import type { TabsUnControlledProps } from './types/tabs';

import { TabsControlled } from './tabsControlled';

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
