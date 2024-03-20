import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useMediaDevice } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { FunctionalitiesModuleStandAlone } from './functionalitiesModuleStandAlone';
import { IFunctionalitiesModuleControlled, IFunctionalitiesModuleStandAlone } from './types';
import { FunctionalitiesModuleVariantStylesType } from './types/functionalitiesModuleTheme';

const FunctionalitiesModuleControlledComponent = React.forwardRef(
  (
    props: IFunctionalitiesModuleControlled,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<FunctionalitiesModuleVariantStylesType>(
      STYLES_NAME.FUNCTIONALITIES_MODULE,
      props.variant,
      props.ctv
    );
    const device = useMediaDevice();

    return <FunctionalitiesModuleStandAlone {...props} ref={ref} device={device} styles={styles} />;
  }
);
FunctionalitiesModuleControlledComponent.displayName = 'FunctionalitiesModuleControlledComponent';

const FunctionalitiesModuleBoundary = (
  props: IFunctionalitiesModuleControlled,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <FunctionalitiesModuleStandAlone
          {...(props as unknown as IFunctionalitiesModuleStandAlone)}
          ref={ref}
        />
      </FallbackComponent>
    }
  >
    <FunctionalitiesModuleControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

export const FunctionalitiesModuleControlled = React.forwardRef(FunctionalitiesModuleBoundary);
