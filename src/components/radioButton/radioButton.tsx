import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { RadioButtonProps } from './types/radioButton';

import { RadioButtonStandAlone } from './radioButtonStandAlone';
import { getState } from './utils/state.utils';

export const RadioButton = ({
  additionalClasses,
  checked = false,
  cssClasses: propsStyles,
  disabled = false,
  error = false,
  variant,
  ...props
}: RadioButtonProps): JSX.Element => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'RADIO_BUTTON',
    variant: variant,
  });

  const state = getState(checked, disabled, error);

  return (
    <RadioButtonStandAlone
      cssClasses={propsStyles ?? cssClasses}
      state={state}
      {...props}
      checked={checked}
      disabled={disabled}
      error={error}
    />
  );
};
