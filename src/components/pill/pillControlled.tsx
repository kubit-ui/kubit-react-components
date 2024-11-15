import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { PillStandAlone } from './pillStandAlone';
import { IPillControlled, IPillStandAlone } from './types/pill';
import { PillStylesType, PillVariantStylesType } from './types/pillTheme';

const PillControlledComponent = React.forwardRef(
  (props: IPillControlled, ref: React.ForwardedRef<HTMLDivElement>): React.JSX.Element => {
    const sizeStyles = useStyles<PillStylesType>(STYLES_NAME.PILL, props.size, props.ctv);
    const variantStyles: PillVariantStylesType = sizeStyles ? sizeStyles[props.variant] : {};

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = event => {
      props.onPillChange?.(event.target.checked, props.value || '');
    };

    return (
      <PillStandAlone {...props} ref={ref} styles={variantStyles} onPillChange={handleOnChange}>
        {props.children}
      </PillStandAlone>
    );
  }
);
PillControlledComponent.displayName = 'PillControlledComponent';

const PillBoundary = (
  props: IPillControlled,
  ref: React.ForwardedRef<HTMLDivElement>
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <PillStandAlone {...(props as unknown as IPillStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <PillControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @deprecated Try the new PillV2 component
 */
export const PillControlled = React.forwardRef(PillBoundary);
