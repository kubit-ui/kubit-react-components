import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { SkeletonProps } from './types/skeleton';

import { SkeletonStandAlone } from './skeletonStandAlone';

/**
 * Skeleton component for displaying loading placeholders.
 *
 * This component renders animated placeholder shapes while content is loading.
 * It supports different shapes (rectangle, circle, text) and variants for styling.
 * Useful for improving perceived performance by showing content structure during loading.
 *
 * @example
 * ```tsx
 * <Skeleton variant="rectangular" shapeVariant="image" />
 * <Skeleton variant="text" shapeVariant="heading" />
 * <Skeleton variant="circular" shapeVariant="avatar" />
 * ```
 */
export const Skeleton = forwardRef(
  (
    {
      additionalClasses,
      additionalShapeClasses,
      shapeVariant,
      variant,
      ...props
    }: SkeletonProps,
    ref: ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'SKELETON',
      variant: variant,
    });
    const cssShapeClasses = useClassName({
      additionalClassNames: additionalShapeClasses,
      component: 'SKELETON',
      variant: shapeVariant,
    });
    return (
      <SkeletonStandAlone
        {...props}
        ref={ref}
        cssClasses={cssClasses}
        cssShapeClasses={cssShapeClasses}
        shapeVariant={variant}
      />
    );
  },
);
