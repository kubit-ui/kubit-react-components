import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { ProgressBarProps } from './types/progressBar';

import { ProgressBarStandalone } from './progressBarStandAlone';

/**
 * ProgressBar component for displaying progress indicators.
 *
 * This component visualizes completion progress with customizable variants and sizes.
 * It displays a filled bar representing the percentage of progress completed.
 * Useful for showing loading states, task completion, or any measurable progress.
 *
 * Accepts generic type parameters `<Variant, Size>` for custom styling values.
 *
 * @example
 * ```tsx
 * <ProgressBar variant="primary" size="md" percentProgressCompleted={60} />
 *
 * // With custom types:
 * type MyVariant = "success" | "warning";
 * <ProgressBar<MyVariant> variant="success" percentProgressCompleted={100} />
 * ```
 */
export const ProgressBar = forwardRef(
  <
    Variant extends string | undefined = undefined extends string | unknown
      ? string | undefined
      : string | unknown,
    Size = undefined extends string | unknown
      ? string | undefined
      : string | unknown,
  >(
    {
      additionalSizeClasses,
      additionalVariantClasses,
      percentProgressCompleted,
      size,
      variant,
      ...props
    }: ProgressBarProps<Variant, Size>,
    ref: ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    const cssVariantClasses = useClassName({
      additionalClassNames: additionalVariantClasses,
      component: 'PROGRESS_BAR',
      variant,
    });

    const cssSizeClasses = useClassName({
      additionalClassNames: additionalSizeClasses,
      component: 'PROGRESS_BAR',
      variant: size as string,
    });

    // Avoid values not included in 0 - 100
    const progressCompleted = !percentProgressCompleted
      ? 0
      : Math.min(Math.max(percentProgressCompleted, 0), 100);

    return (
      <ProgressBarStandalone
        {...props}
        ref={ref}
        cssSizeClasses={cssSizeClasses}
        cssVariantClasses={cssVariantClasses}
        progressCompleted={progressCompleted}
      />
    );
  },
);
