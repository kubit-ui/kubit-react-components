import * as React from 'react';

// styles
import { TabsControlled } from './tabsControlled';
import { ITabsUnControlled } from './types/tabs';

export const TabsUnControlledComponent = <V extends string | unknown>(
  { defaultSelectedTab = 0, onSelectTab, ...props }: ITabsUnControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const [selectedTab, setSelectedTab] = React.useState(defaultSelectedTab);

  const handleSelectTab = (tab: number) => {
    setSelectedTab(tab);
    onSelectTab?.(tab);
  };

  return (
    <TabsControlled {...props} ref={ref} selectedTab={selectedTab} onSelectTab={handleSelectTab} />
  );
};

const TabsUnControlled = React.forwardRef(TabsUnControlledComponent) as <
  V extends string | unknown,
>(
  props: React.PropsWithChildren<ITabsUnControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof TabsUnControlledComponent>;

export { TabsUnControlled };
