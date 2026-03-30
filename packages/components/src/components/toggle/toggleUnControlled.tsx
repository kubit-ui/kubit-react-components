import { type ForwardedRef, forwardRef, useState } from 'react';

import type { ToggleUncontrolledProps } from './types/toggle';

import { ToggleControlled } from './toggleControlled';

/**
 * Toggle uncontrolled component with generic variant support.
 *
 * This component manages its own internal state and supports custom variants
 * through generic type parameters. It's useful when you don't need to control
 * the toggle state externally.
 *
 * ### Generics
 * - `<Variant extends string | undefined>`: Allows you to define custom variant types for theming.
 *
 * @example
 * ```tsx
 * <ToggleUncontrolled
 *   variant="REGULAR"
 *   defaultChecked={false}
 *   onToggle={(checked) => console.log(checked)}
 * />
 *
 * // With custom variant type:
 * type MyVariant = "primary" | "secondary";
 * <ToggleUncontrolled<MyVariant>
 *   variant="primary"
 *   defaultChecked={true}
 *   onToggle={(checked) => console.log(checked)}
 * />
 * ```
 *
 * @param props - `ToggleUncontrolledProps<Variant>` include:
 *
 * - defaultChecked: boolean - Initial toggle state
 * - onToggle: function - Callback when toggle state changes (receives current state)
 * - variant: Variant - Toggle variant
 * - disabled: boolean - Whether toggle is disabled
 * - rightIcon/leftIcon: objects - Icons to show when on/off
 */
export const ToggleUncontrolled = forwardRef(
  <Variant extends string | undefined>(
    {
      defaultChecked = false,
      onToggle,
      variant,
      ...props
    }: ToggleUncontrolledProps<Variant>,
    ref: ForwardedRef<HTMLButtonElement> | undefined | null,
  ): JSX.Element => {
    // Internal state management for uncontrolled mode
    const [internalChecked, setInternalChecked] = useState(defaultChecked);

    // Handle toggle change - update internal state and call external callback
    const handleToggle = (newChecked: boolean) => {
      setInternalChecked(newChecked);
      onToggle?.(newChecked);
    };

    return (
      <ToggleControlled
        {...props}
        ref={ref}
        checked={internalChecked}
        variant={variant}
        onToggle={handleToggle}
      />
    );
  },
);

ToggleUncontrolled.displayName = 'ToggleUncontrolled';
