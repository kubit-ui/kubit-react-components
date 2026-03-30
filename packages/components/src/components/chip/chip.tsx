import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { STATES } from '@/lib/types/states/states';

import type { ChipProps } from './types/chip';

import { ChipStandAlone } from './chipStandAlone';

/**
 * Chip component for displaying a small, customizable label or tag.
 *
 * This component renders a chip with optional icon, close button, and custom content.
 * It is useful for displaying tags, categories, filters, or interactive pills in lists and forms.
 * The chip supports custom variants and states for flexible theming and styling.
 *
 * Internally, it computes CSS classes using a custom hook and delegates rendering to {@link ChipStandAlone}.
 *
 * This component accepts a generic type parameter `<Variant extends string>` to allow for custom variant values,
 * enabling flexible theming and styling.
 *
 * @example
 * ```tsx
 * <Chip>Active</Chip>
 *
 * // With a custom variant type:
 * type MyVariant = "primary" | "secondary";
 * <Chip<MyVariant> variant="primary">Primary chip</Chip>
 * ```
 */
export const Chip = forwardRef(
  <Variant extends string = string>(
    {
      additionalClasses,
      state = STATES.DEFAULT,
      variant,
      ...props
    }: ChipProps<Variant>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'CHIP',
      variant,
    });

    return (
      <ChipStandAlone
        {...props}
        ref={ref}
        cssClasses={cssClasses}
        state={state}
      />
    );
  },
);
