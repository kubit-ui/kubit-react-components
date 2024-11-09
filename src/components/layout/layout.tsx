import React from 'react';

import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { LayoutStandAlone } from './layoutStandAlone';
import { ILayout, ILayoutStandAlone } from './types/layout';
import { LayoutVariantStylesType } from './types/layoutTheme';

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
