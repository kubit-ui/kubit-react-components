import { type PropsWithChildren, forwardRef } from 'react';

import type { CheckboxBaseUnControlledProps } from './types/checkboxBase';

import { CheckboxBaseControlled } from './checkboxBaseControlled';
import { useCheckbox } from './hooks/useCheckbox';

/**
 * CheckboxBaseUnControlled component with internal state management.
 *
 * This is a low-level uncontrolled checkbox that manages its own checked state.
 * It automatically handles toggle behavior and notifies via onChange callback.
 * Useful for checkboxes that don't require external state control.
 *
 * @example
 * ```tsx
 * <CheckboxBaseUnControlled
 *   checked={false}
 *   onChange={(e) => console.log(e.target.checked)}
 * />
 * ```
 */
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
