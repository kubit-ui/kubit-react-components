import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { RadioButtonProps } from './types/radioButton';

import { RadioButtonStandAlone } from './radioButtonStandAlone';
import { getState } from './utils/state.utils';

/**
 * RadioButton component for single selection from multiple options.
 *
 * This component renders a styled radio input for use in forms and option groups.
 * It manages checked, disabled, and error states with appropriate visual feedback.
 *
 * @example
 * ```tsx
 * <RadioButton
 *   name="option"
 *   value="1"
 *   checked={selectedValue === "1"}
 *   onChange={(e) => setSelectedValue(e.target.value)}
 * />
 * ```
 */
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
