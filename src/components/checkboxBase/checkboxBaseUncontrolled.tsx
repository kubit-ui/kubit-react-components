import { type PropsWithChildren, forwardRef } from 'react';

import type { CheckboxBaseUnControlledProps } from './types/checkboxBase';

import { CheckboxBaseControlled } from './checkboxBaseControlled';
import { useCheckbox } from './hooks/useCheckbox';

export const CheckboxBaseUnControlled = forwardRef(
  <Variant extends string = string>(
    {
      checked = false,
      disabled = false,
      onChange,
      ...props
    }: PropsWithChildren<CheckboxBaseUnControlledProps<Variant>>,
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
      <CheckboxBaseControlled
        ref={ref}
        {...props}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
      />
    );
  },
);
