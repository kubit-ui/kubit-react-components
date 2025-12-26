import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { ToggleStandalone } from './toggleStandAlone';
import type { ToggleProps } from './types/toggle';

/**
 * Toggle controlled component with generic variant support.
 *
 * This component supports custom variants through generic type parameters,
 * allowing you to extend the toggle's appearance for your design system.
 * It handles state management through the checked prop and onToggle callback.
 *
 * ### Generics
 * - `<Variant extends string | undefined>`: Allows you to define custom variant types for theming.
 *
 * @example
 * ```tsx
 * <ToggleControlled
 *   variant="REGULAR"
 *   checked={isToggled}
 *   onToggle={setIsToggled}
 * />
 *
 * // With custom variant type:
 * type MyVariant = "primary" | "secondary";
 * <ToggleControlled<MyVariant>
 *   variant="primary"
 *   checked={isToggled}
 *   onToggle={setIsToggled}
 * />
 * ```
 *
 * @param props - `ToggleControlledProps<Variant>` include:
 *
 * - checked: boolean - Current toggle state
 * - onToggle: function - Callback when toggle state changes
 * - variant: Variant - Toggle variant
 * - disabled: boolean - Whether toggle is disabled
 * - rightIcon/leftIcon: objects - Icons to show when on/off
 */
export const ToggleControlled = forwardRef(
  <Variant extends string | undefined>(
    {
      additionalVariantClasses,
      checked,
      onClick,
      onToggle,
      variant,
      ...props
    }: ToggleProps<Variant>,
    ref: ForwardedRef<HTMLButtonElement> | undefined | null,
  ): JSX.Element => {
    // Generate CSS classes for variant styling
    const cssClasses = useClassName({
      additionalClassNames: additionalVariantClasses,
      component: 'TOGGLE',
      variant: variant,
    });

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const newChecked = !checked;
      onToggle?.(newChecked);
      onClick?.(event);
    };

    return (
      <ToggleStandalone
        {...props}
        ref={ref}
        checked={checked}
        cssClasses={cssClasses}
        onClick={handleClick}
      />
    );
  },
);

ToggleControlled.displayName = 'ToggleControlled';
