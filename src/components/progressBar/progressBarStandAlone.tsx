import { forwardRef } from 'react';

import { classNames } from '@/lib/utils/classNames/classNames';

import type { ProgressBarStandAloneProps } from './types/progressBar';

import { Slider } from '../slider/slider';

const SLIDER_MAX_VALUE = 1000;
const SLIDER_MIN_VALUE = 0;
const SLIDER_PERCENTAGE_CONVERSION = 10;

/**
 * Standalone progress bar component for displaying task or loading progress.
 *
 * This component renders a horizontal progress indicator using an internal slider.
 * It displays progress as a percentage from 0 to 100.
 *
 * @example
 * ```tsx
 * <ProgressBarStandalone
 *   progress={75}
 *   label="Loading..."
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
      onChange,
      onDragEnd,
      onDragStart,
      progressAnimation,
      progressCompleted,
      tooltip,
      useAsSlider = false,
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
          {useAsSlider ? (
            <Slider
              additionalClasses={cssVariantClasses?.slider}
              ariaLabel={barAriaLabel}
              max={SLIDER_MAX_VALUE}
              min={SLIDER_MIN_VALUE}
              tooltip={tooltip}
              type="continuous"
              value={progressCompleted * SLIDER_PERCENTAGE_CONVERSION}
              onChange={(newValue: number | number[]) => {
                if (onChange && !Array.isArray(newValue)) {
                  // in order to return a value 0 - 100
                  onChange(newValue / SLIDER_PERCENTAGE_CONVERSION);
                }
              }}
              onDragEnd={onDragEnd}
              onDragStart={onDragStart}
            />
          ) : (
            <>
              <div
                className={classNames(
                  cssSizeClasses?.bar,
                  cssVariantClasses?.bar,
                )}
                data-testid={dataTestId}
                style={barStyle}
              />
              <div
                className={classNames(
                  cssSizeClasses?.progressbar,
                  cssVariantClasses?.progressbar,
                )}
                style={progressBarStyle}
              />
            </>
          )}
        </div>
      </div>
    );
  },
);
