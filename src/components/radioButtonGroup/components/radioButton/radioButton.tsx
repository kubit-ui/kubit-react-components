import * as React from 'react';

// styles
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';
import { VariantStyles } from '@/types/variantStyles';

import { RadioButtonGroupStylesType } from '../../types';
import { RadioButtonStandAlone } from './radioButtonStandAlone';
import { IRadioButton, IRadioButtonStandAlone } from './types';

const STYLES_NAME = 'RADIO_BUTTON_GROUP_STYLES';

const RadioButtonComponent = ({
  checked = false,
  styles: propsStyles,
  ...props
}: IRadioButton): JSX.Element => {
  const styles = useStyles<VariantStyles<RadioButtonGroupStylesType>>(STYLES_NAME, props.variant);

  return <RadioButtonStandAlone checked={checked} styles={propsStyles ?? styles} {...props} />;
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
