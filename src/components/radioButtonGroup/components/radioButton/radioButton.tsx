import * as React from 'react';

// styles
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';
import { VariantStyles } from '@/types/variantStyles';

import { RadioButtonGroupStylesType } from '../../types';
import { getState, radioButtonState } from '../../utils';
import { RadioButtonStandAlone } from './radioButtonStandAlone';
import { IRadioButton, IRadioButtonStandAlone } from './types';

const STYLES_NAME = 'RADIO_BUTTON_GROUP_STYLES';

const RadioButtonComponent = ({
  checked = false,
  error = false,
  disabled = false,
  styles: propsStyles,
  state: propsState,
  ...props
}: IRadioButton): JSX.Element => {
  const styles = useStyles<VariantStyles<RadioButtonGroupStylesType>>(STYLES_NAME, props.variant);
  const state = getState(checked, disabled, error, propsState);
  // deprecated - use only `error`, `disabled` and `checked` props when `state` prop is removed from `RadioButton`
  const { isChecked, isDisabled, hasError } = radioButtonState(state);

  return (
    <RadioButtonStandAlone
      checked={isChecked}
      disabled={isDisabled}
      error={hasError}
      state={state}
      styles={propsStyles ?? styles}
      {...props}
    />
  );
};

export const RadioButton = (props: IRadioButton): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <RadioButtonStandAlone {...(props as IRadioButtonStandAlone)} />
      </FallbackComponent>
    }
  >
    <RadioButtonComponent {...props} />
  </ErrorBoundary>
);
