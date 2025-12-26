import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { DotStandAlone } from './dotStandAlone';
import type { DotProps } from './types/dot';

/**
 * Dot component for displaying a small badge or counter.
 *
 * Useful for showing notification counts, status indicators, or similar UI elements.
 * If the `number` prop exceeds `maxNumber`, it displays as `+maxNumber`.
 *
 * Accepts two generic type parameters for custom variant and size values, allowing flexible theming.
 *
 * @template Variant - Custom variant type for styling (e.g., "primary" | "secondary").
 * @template Size - Custom size type for sizing (e.g., "sm" | "md" | "lg").
 *
 * @example
 * ```tsx
 * <Dot number={5} maxNumber={9} variant="primary" size="md" />
 *
 * // With custom types:
 * type MyVariant = "success" | "error";
 * type MySize = "small" | "large";
 * <Dot<MyVariant, MySize> number={12} maxNumber={9} variant="success" size="large" />
 * ```
 */
export const Dot = forwardRef(
  <Variant extends string = string, Size extends string = string>(
    {
      additionalSizeClasses,
      additionalVariantClasses,
      maxNumber,
      number,
      size,
      variant,
      ...props
    }: DotProps<Variant, Size>,
    ref: React.ForwardedRef<HTMLSpanElement>,
  ): JSX.Element => {
    const cssVariantClasses = useClassName({
      additionalClassNames: additionalVariantClasses,
      component: 'DOT',
      variant,
    });

    const cssSizeClasses = useClassName({
      additionalClassNames: additionalSizeClasses,
      component: 'DOT',
      variant: size,
    });

    const formattedNumber =
      typeof number === 'number' && typeof maxNumber === 'number'
        ? number > maxNumber
          ? `+${maxNumber}`
          : number.toString()
        : undefined;

    return (
      <DotStandAlone
        {...props}
        ref={ref}
        cssSizeClasses={cssSizeClasses}
        cssVariantClasses={cssVariantClasses}
        formatedNumber={formattedNumber}
      />
    );
  },
);
