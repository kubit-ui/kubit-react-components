import { forwardRef } from 'react';

import type { CheckboxUnControlledProps } from './types/checkbox';

import { useCheckbox } from '../checkboxBase/hooks/useCheckbox';
import { CheckboxControlled } from './checkboxControlled';

/**
 * CheckboxUnControlled component with internal state management.
 *
 * This component renders a checkbox that manages its own checked state internally.
 * Useful when you don't need to control the checkbox state from a parent component.
 * It automatically handles toggle behavior on user interaction.
 *
 * @example
 * ```tsx
 * <CheckboxUnControlled
 *   checked={false}
 *   onChange={(e) => console.log(e.target.checked)}
 *   label="Remember me"
 * />
 * ```
 */
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
