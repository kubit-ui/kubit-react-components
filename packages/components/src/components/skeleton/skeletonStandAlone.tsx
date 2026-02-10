import './skeleton.css';

import { type CSSProperties, forwardRef, useMemo } from 'react';

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
      borderRadius = '',
      cssClasses,
      cssShapeClasses,
      duration = '1.2s',
      height = '20px',
      width = '100%',
      ...props
    }: SkeletonStandAloneProps,
    ref,
  ): JSX.Element => {
    const customProps = pickCustomAttributes(props);

    const dynamicVars = useMemo(() => {
      return cssClasses?.dynamic_values({
        $skeletonBorderRadius: borderRadius,
        $skeletonDuration: duration,
        $skeletonHeight: height,
        $skeletonWidth: width,
      }).object;
    }, [height, width, borderRadius, duration]);

    return (
      <div
        ref={ref}
        className={classNames(
          'kbt-skeleton',
          cssClasses?.skeleton,
          cssShapeClasses?.skeleton,
        )}
        data-testid="skeleton"
        style={dynamicVars}
        {...customProps}
      />
    );
  },
);
