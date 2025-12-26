import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { ProgressBarStandalone } from './progressBarStandAlone';
import type { ProgressBarProps } from './types/progressBar';

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
