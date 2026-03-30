import { type ForwardedRef, forwardRef, useMemo, useRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { PageControlProps } from './types/pageControl';
import type { PageControlDirectionType } from './types/pageControlStates';

import {
  calcFirstLastVisiblePosition,
  getPositionWithIn,
} from './helper/positions';
import { PageControlStandAlone } from './pageControlStandAlone';

/**
 * PageControl component for pagination/slide navigation indicators.
 *
 * This component displays navigation dots or bullets with arrow controls for
 * paginated content like carousels. It handles position tracking, visibility
 * of dots, and direction-based navigation.
 *
 * @example
 * ```tsx
 * <PageControl
 *   pages={10}
 *   currentPosition={3}
 *   onPageChange={(page) => console.log(page)}
 *   isBullet
 * />
 * ```
 */
export const PageControl = forwardRef(
  <Variant extends string>(
    {
      additionalArrowControlClasses,
      additionalPageControlClasses,
      arrowsControlVariant,
      currentPosition: propsCurrentPosition,
      isBullet = false,
      maxDots = 5,
      pages,
      variant,
      ...props
    }: PageControlProps<Variant>,
    ref: ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    const cssArrowControlClasses = useClassName({
      additionalClassNames: additionalArrowControlClasses,
      component: 'PAGE_CONTROL',
      variant: arrowsControlVariant,
    });
    const cssPageControlClasses = useClassName({
      additionalClassNames: additionalPageControlClasses,
      component: 'PAGE_CONTROL',
      variant: variant,
    });
    const lastPosition = useRef<number>(0);
    const direction = useMemo(() => {
      let res = 'forth';
      if (propsCurrentPosition < lastPosition.current) {
        res = 'back';
      }
      lastPosition.current = propsCurrentPosition;
      return res;
    }, [propsCurrentPosition]) as PageControlDirectionType;
    const dots = pages > maxDots ? maxDots : pages;
    const currentPosition = getPositionWithIn(propsCurrentPosition, pages);
    const { firstVisiblePosition, lastVisiblePosition } =
      calcFirstLastVisiblePosition({
        currentPosition,
        direction,
        dots,
        isBullet,
        pages: pages,
      });
    return (
      <PageControlStandAlone
        ref={ref}
        cssArrowControlClasses={cssArrowControlClasses}
        cssPageControlClasses={cssPageControlClasses}
        currentPosition={currentPosition}
        dots={dots}
        firstVisiblePosition={firstVisiblePosition}
        isBullet={isBullet}
        lastVisiblePosition={lastVisiblePosition}
        pages={0}
        {...props}
      />
    );
  },
);
