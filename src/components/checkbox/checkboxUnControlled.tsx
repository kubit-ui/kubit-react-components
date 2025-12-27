import { forwardRef } from 'react';

import type { CheckboxUnControlledProps } from './types/checkbox';

import { useCheckbox } from '../checkboxBase/hooks/useCheckbox';
import { CheckboxControlled } from './checkboxControlled';

export const CheckboxUnControlled = forwardRef(
  <Variant extends string = string>(
    {
      checked = false,
      disabled = false,
      error = false,
      onChange,
      required = false,
      ...props
    }: CheckboxUnControlledProps<Variant>,
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    const { handleToggleIsChecked, isChecked } = useCheckbox({
      disabled,
      initialChecked: checked,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      handleToggleIsChecked();
    };

    return (
      <CheckboxControlled
        {...props}
        ref={ref}
        checked={isChecked}
        disabled={disabled}
        error={error}
        required={required}
        onChange={handleChange}
      />
    );
  },
);
