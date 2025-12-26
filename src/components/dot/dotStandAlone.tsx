import { forwardRef } from 'react';

import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { DotStandAloneProps } from './types/dot';

/**
 * Low-level dot component for rendering a badge or indicator.
 *
 * This component is responsible for the visual rendering of a dot, badge, or counter.
 * It receives precomputed CSS classes and content, and renders a styled `<span>`.
 * Typically used internally by higher-level dot components.
 *
 * @example
 * ```tsx
 * <DotStandAlone
 *   cssSizeClasses={{ dot: "h-4 w-4" }}
 *   cssVariantClasses={{ dot: "bg-primary" }}
 *   formatedNumber="+9"
 * />
 * ```
 */
export const DotStandAlone = forwardRef<HTMLSpanElement, DotStandAloneProps>(
  (
    {
      cssSizeClasses,
      cssVariantClasses,
      formatedNumber,
      height,
      label,
      width,
      ...props
    },
    ref,
  ): JSX.Element => {
    const customProps = pickCustomAttributes(props);

    return (
      <span
        ref={ref}
        className={classNames(cssSizeClasses?.dot, cssVariantClasses?.dot)}
        data-testid="dot"
        style={height || width ? { height, width } : undefined}
        {...customProps}
      >
        {label}
        {formatedNumber}
      </span>
    );
  },
);
