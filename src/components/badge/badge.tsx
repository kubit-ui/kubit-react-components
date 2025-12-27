import {
  type FocusEventHandler,
  type ForwardedRef,
  type MouseEvent,
  forwardRef,
  useState,
} from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { BadgeProps } from './types/badge';

import { BadgeStandAlone } from './badgeStandAlone';

/**
 * Badge component for displaying a small status indicator, label, or notification count.
 *
 * The `Badge` component supports custom variants and sizes via generic type parameters, allowing for flexible theming and sizing.
 * It can display a dot, handle click events, and manage its own active state for visual feedback.
 * Use this component to highlight statuses, notifications, or contextual information in your UI.
 *
 * This component accepts generic type parameters `<Variant extends string | undefined, Size extends string | undefined>`
 * to allow for custom variant and size values, enabling flexible theming and styling.
 *
 * @example
 * ```tsx
 * <Badge variant="success" size="sm">New</Badge>
 *
 * // With custom types:
 * type MyVariant = "success" | "warning";
 * type MySize = "sm" | "lg";
 * <Badge<MyVariant, MySize> variant="warning" size="lg">Alert</Badge>
 * ```
 */
export const Badge = forwardRef(
  <Variant extends string | undefined, Size extends string | undefined>(
    {
      additionalSizeClasses,
      additionalVariantClasses,
      hasDot = true,
      onClick,
      size,
      variant,
      ...props
    }: BadgeProps<Variant, Size>,
    ref: ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    const [active, setActive] = useState<boolean>(false);

    const cssVariantClasses = useClassName({
      component: 'BADGE',
      variant,
    });

    const cssSizeClasses = useClassName({
      component: 'BADGE',
      variant: size,
    });

    const handleIconClick = (e: MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      setActive((prev) => !prev);
    };

    const handleOnBadgeBlur: FocusEventHandler<HTMLButtonElement> = (event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setActive(false);
      }
    };

    return (
      <BadgeStandAlone
        {...props}
        ref={ref}
        active={active}
        cssSizeClasses={cssSizeClasses}
        cssVariantClasses={cssVariantClasses}
        hasDot={hasDot}
        onBadgeBlur={handleOnBadgeBlur}
        onClick={handleIconClick}
      />
    );
  },
);
