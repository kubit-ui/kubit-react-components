import { forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { PageControlStandAloneProps } from './types/pageControl';

import { Controls } from './components/controls';

/**
 * Standalone page control component for carousel or pagination navigation.
 *
 * This component renders navigation controls (arrows and dots) for moving between pages or slides.
 * It supports custom arrow controls and visual indicators for the current page.
 *
 * @example
 * ```tsx
 * <PageControlStandAlone
 *   totalPages={5}
 *   currentPage={2}
 *   onPageChange={(page) => console.log(page)}
 * />
 * ```
 */
export const PageControlStandAlone = forwardRef<
  HTMLDivElement,
  PageControlStandAloneProps
>(
  (
    {
      cssArrowControlClasses,
      cssPageControlClasses,
      currentPosition,
      dots,
      firstVisiblePosition,
      isBullet,
      lastVisiblePosition,
      leftControl,
      pages,
      rightControl,
      ...props
    },
    ref,
  ) => {
    const dataTestId = props['data-testid'] || 'page-control';
    return (
      <div
        ref={ref}
        className={cssPageControlClasses?.page_control}
        data-testid={dataTestId}
      >
        {dots > 0 && (
          <>
            <Controls
              control={leftControl}
              cssArrowControlClasses={cssArrowControlClasses}
              cssPageControlClasses={cssPageControlClasses}
              currentPosition={currentPosition}
              data-testid={`${dataTestId}-left-control`}
              dots={dots}
              firstVisiblePosition={firstVisiblePosition}
              lastVisiblePosition={lastVisiblePosition}
              pages={pages}
              position="left"
            />
            <div className={cssPageControlClasses?.dotscontainer}>
              {isBullet && firstVisiblePosition > 0 && (
                <div
                  {...pickCustomAttributes({
                    'data-state': 'last',
                  })}
                  className={cssPageControlClasses?.pagedot}
                />
              )}
              {[...Array(dots)].map((_, _index) => {
                const index = _index + firstVisiblePosition;
                const state = index === currentPosition ? 'current' : 'default';
                const customAttributes = {
                  'data-state': state,
                };
                return (
                  <div
                    key={`Dot-middle--${index}`}
                    {...pickCustomAttributes(customAttributes)}
                    className={cssPageControlClasses?.pagedot}
                  />
                );
              })}
              {isBullet && (lastVisiblePosition ?? 0) < (pages ?? 0) - 1 && (
                <div
                  {...pickCustomAttributes({
                    'data-state': 'last',
                  })}
                  className={cssPageControlClasses?.pagedot}
                />
              )}
            </div>

            <Controls
              control={rightControl}
              cssArrowControlClasses={cssArrowControlClasses}
              cssPageControlClasses={cssPageControlClasses}
              currentPosition={currentPosition}
              data-testid={`${dataTestId}-right-control`}
              dots={dots}
              firstVisiblePosition={firstVisiblePosition}
              lastVisiblePosition={lastVisiblePosition}
              pages={pages}
              position="right"
            />
          </>
        )}
      </div>
    );
  },
);
