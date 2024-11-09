import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
// styles
import { TabsStandAlone } from './tabsStandAlone';
import { ITabsControlled, ITabsStandAlone } from './types/tabs';
import { TabsVariantStylesType } from './types/tabsTheme';

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
