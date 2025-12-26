import { forwardRef } from 'react';

import { RenderIf } from '@/components/renderIf/renderIf';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import { Controls } from './components/controls';
import type { PageControlStandAloneProps } from './types/pageControl';

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
        <RenderIf condition={dots > 0}>
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
              <RenderIf condition={isBullet && firstVisiblePosition > 0}>
                <div
                  {...pickCustomAttributes({
                    'data-state': 'last',
                  })}
                  className={cssPageControlClasses?.pagedot}
                />
              </RenderIf>
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
              <RenderIf
                condition={
                  isBullet && (lastVisiblePosition ?? 0) < (pages ?? 0) - 1
                }
              >
                <div
                  {...pickCustomAttributes({
                    'data-state': 'last',
                  })}
                  className={cssPageControlClasses?.pagedot}
                />
              </RenderIf>
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
        </RenderIf>
      </div>
    );
  },
);
