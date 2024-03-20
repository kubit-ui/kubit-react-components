import * as React from 'react';

import { useCheckbox } from '@/hooks/useCheckbox/useCheckbox';

import { CheckboxControlled } from './checkboxControlled';
import { ICheckboxUnControlled } from './types/';

const CheckboxUnControlledComponent = <V extends string | unknown>(
  {
    disabled = false,
    error = false,
    required = false,
    checked = false,
    onChange,
    ...props
  }: ICheckboxUnControlled<V>,
  ref?: React.ForwardedRef<HTMLInputElement> | undefined | null
): JSX.Element => {
  const { isChecked, handleToggleIsChecked } = useCheckbox({
    initialChecked: checked,
    disabled,
  });

  return (
    <CheckboxControlled
      {...props}
      ref={ref}
      checked={isChecked}
      disabled={disabled}
      error={error}
      required={required}
      variant={props.variant}
      onChange={e =>
        onChange
          ? (() => {
              onChange(e);
              handleToggleIsChecked();
            })()
          : handleToggleIsChecked()
      }
    />
  );
};

/**
 * @description
 * Checkbox component is a input component that can be used to select one or more options from a list of options.
 * It can be used to create a list of options that can be selected.
 * @param {React.PropsWithChildren<ICheckboxUnControlled<V>>} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <Checkbox variant="checkbox" />
 */
const CheckboxUnControlled = React.forwardRef(CheckboxUnControlledComponent) as <V extends string>(
  props: React.PropsWithChildren<ICheckboxUnControlled<V>> & {
    ref?: React.ForwardedRef<HTMLInputElement> | undefined | null;
  }
) => ReturnType<typeof CheckboxUnControlledComponent>;

export { CheckboxUnControlled };
