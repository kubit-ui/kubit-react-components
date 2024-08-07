import * as React from 'react';

import { useMediaDevice } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { LayoutStandAlone } from './layoutStandAlone';
import { ILayout, ILayoutStandAlone, LayoutVariantStylesType } from './types';

const LAYOUT_STYLES = 'LAYOUT_STYLES';

export const LayoutComponent = ({ variant, ctv, ...props }: ILayout): JSX.Element => {
  const styles = useStyles<LayoutVariantStylesType>(LAYOUT_STYLES, variant, ctv);
  const device = useMediaDevice();

  return <LayoutStandAlone styles={styles} {...props} device={device} />;
};

export const Layout = (props: ILayout): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <LayoutStandAlone {...(props as unknown as ILayoutStandAlone)} />
      </FallbackComponent>
    }
  >
    <LayoutComponent {...props} />
  </ErrorBoundary>
);
