import { forwardRef } from 'react';

import { classNames } from '@/lib/utils/classNames/classNames';

import type { ProgressBarStandAloneProps } from './types/progressBar';

/**
 * Standalone progress bar component for displaying task or loading progress.
 *
 * This component renders a horizontal progress indicator showing a visual representation
 * of progress as a percentage from 0 to 100.
 *
 * @example
 * ```tsx
 * <ProgressBarStandalone
 *   progressCompleted={75}
 *   barAriaLabel="Loading progress"
 * />
 * ```
 */
export const ProgressBarStandalone = forwardRef<
  HTMLDivElement,
  ProgressBarStandAloneProps
>(
  (
    {
      barAriaLabel,
      color,
      cssSizeClasses,
      cssVariantClasses,
      progressAnimation,
      progressCompleted,
      ...props
    },
    ref,
  ) => {
    const dataTestId = props['data-testid'] || 'progress-bar';

    const barStyle: React.CSSProperties | undefined = {
      backgroundColor: color?.bar,
    };

    const progressBarStyle: React.CSSProperties | undefined = {
      backgroundColor: color?.progressBar,
      transition: `width ${progressAnimation?.duration} ${progressAnimation?.timingFunction}`,
      width: `${progressCompleted}%`,
    };

    return (
      <div
        ref={ref}
        className={cssVariantClasses?.progress_bar}
        data-testid={`${dataTestId}-progressbar`}
      >
        <div className={cssVariantClasses?.barcontainer}>
          <div
            aria-label={barAriaLabel}
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={progressCompleted}
            className={classNames(
              cssSizeClasses?.bar,
              cssVariantClasses?.bar,
            )}
            data-testid={dataTestId}
            role="progressbar"
            style={barStyle}
          />
          <div
            className={classNames(
              cssSizeClasses?.progressbar,
              cssVariantClasses?.progressbar,
            )}
            style={progressBarStyle}
          />
        </div>
      </div>
    );
  },
);
