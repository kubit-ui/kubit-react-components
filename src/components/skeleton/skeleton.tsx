import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { SkeletonProps } from './types/skeleton';

import { SkeletonStandAlone } from './skeletonStandAlone';

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
      component: 'SKELETON',
      variant: variant,
    });
    const cssShapeClasses = useClassName({
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
