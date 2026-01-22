import './skeleton.css';

import { type CSSProperties, forwardRef } from 'react';

import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { SkeletonStandAloneProps } from './types/skeleton';

/**
 * Standalone skeleton component for displaying loading placeholders.
 *
 * This component renders an animated skeleton loader with customizable dimensions
 * and styling. It's used to indicate content is loading.
 *
 * @example
 * ```tsx
 * <SkeletonStandAlone
 *   width="200px"
 *   height="50px"
 *   animation={true}
 * />
 * ```
 */
export const SkeletonStandAlone = forwardRef<
  HTMLDivElement,
  SkeletonStandAloneProps
>(
  (
    {
      cssClasses,
      cssShapeClasses,
      duration = '1.2s',
      height,
      width,
      ...props
    }: SkeletonStandAloneProps,
    ref,
  ): JSX.Element => {
    const customProps = pickCustomAttributes(props);

    return (
      <div
        ref={ref}
        className={classNames(
          'kbt-skeleton',
          cssClasses?.skeleton,
          cssShapeClasses?.skeleton,
        )}
        data-testid="skeleton"
        style={
          {
            '--skeleton-duration': duration,
            '--skeleton-height': height,
            '--skeleton-width': width,
          } as CSSProperties
        }
        {...customProps}
      />
    );
  },
);
