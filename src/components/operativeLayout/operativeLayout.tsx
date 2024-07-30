import * as React from 'react';

import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { OperativeLayoutStandAlone } from './operativeLayoutStandAlone';
import {
  IOperativeLayout,
  IOperativeLayoutStandAlone,
  OperativeLayoutVariantStylesType,
} from './types';

const OPERATIVE_LAYOUT_STYLES = 'OPERATIVE_LAYOUT_STYLES';

const OperativeLayoutComponent = ({
  variant,
  maxWidthParentContainer,
  ctv,
  ...props
}: IOperativeLayout): JSX.Element => {
  const device = useMediaDevice();
  const styles = useStyles<OperativeLayoutVariantStylesType>(OPERATIVE_LAYOUT_STYLES, variant, ctv);
  const maxWidthToApply = maxWidthParentContainer || styles.maxWidthParentContainer;
  return (
    <OperativeLayoutStandAlone
      {...props}
      device={device}
      maxWidthToApply={maxWidthToApply}
      styles={styles}
    />
  );
};

/**
 *  @deprecated This component has been deprecated and will be removed in the next MAJOR release.
 */
export const OperativeLayout = (props: IOperativeLayout): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <OperativeLayoutStandAlone {...(props as unknown as IOperativeLayoutStandAlone)} />
      </FallbackComponent>
    }
  >
    <OperativeLayoutComponent {...props} />
  </ErrorBoundary>
);
