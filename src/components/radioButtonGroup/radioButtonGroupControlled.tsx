import * as React from 'react';

// styles
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';
import { VariantStyles } from '@/types/variantStyles';

import { RadioButtonGroupStandAlone } from './radioButtonGroupStandAlone';
import {
  IRadioButtonGroupControlled,
  IRadioButtonGroupStandAlone,
  RadioButtonGroupStylesType,
} from './types';

const STYLES_NAME = 'RADIO_BUTTON_GROUP_STYLES';

const RadioButtonGroupControlledComponent = React.forwardRef(
  (
    { variant, ctv, ...props }: IRadioButtonGroupControlled,
    ref: React.ForwardedRef<HTMLFieldSetElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<VariantStyles<RadioButtonGroupStylesType>>(STYLES_NAME, variant, ctv);

    return <RadioButtonGroupStandAlone ref={ref} styles={styles} variant={variant} {...props} />;
  }
);
RadioButtonGroupControlledComponent.displayName = 'RadioButtonGroupControlledComponent';

const RadioButtonGroupBoundary = (
  props: IRadioButtonGroupControlled,
  ref: React.ForwardedRef<HTMLFieldSetElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <RadioButtonGroupStandAlone
          {...(props as unknown as IRadioButtonGroupStandAlone)}
          ref={ref}
        />
      </FallbackComponent>
    }
  >
    <RadioButtonGroupControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

export const RadioButtonGroupControlled = React.forwardRef(RadioButtonGroupBoundary);
