import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useMediaDevice, useStyles } from '@/hooks';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

// styles
import { TabsStandAlone } from './tabsStandAlone';
import { TabsVariantStylesType } from './types';
import { ITabsControlled, ITabsStandAlone } from './types/tabs';

const TabsControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    { ctv, ...props }: ITabsControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<TabsVariantStylesType, V>(
      STYLES_NAME.PRIMARY_TABS,
      props.variant,
      ctv
    );
    const device = useMediaDevice();

    return <TabsStandAlone {...props} ref={ref} device={device} styles={styles} />;
  }
);
TabsControlledComponent.displayName = 'TabsControlledComponent';

const PrimaryTabBoundary = <V extends string | unknown>(
  props: ITabsControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <TabsStandAlone {...(props as unknown as ITabsStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <TabsControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const TabsControlled = React.forwardRef(PrimaryTabBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<ITabsControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof PrimaryTabBoundary>;

export { TabsControlled };
