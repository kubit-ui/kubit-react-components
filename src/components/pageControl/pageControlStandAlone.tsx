import * as React from 'react';

import { ArrowControlStandAlone } from './components';
import {
  DotsWrapper,
  LeftArrowControlWrapperStyled,
  PageControlContainer,
  PageControlDot,
  RightArrowControlWrapperStyled,
} from './pageControl.styled';
//types
import { IPageControlStandAlone, PageControlState } from './types';

const PageControlStandAloneComponent = (
  {
    pages,
    currentPosition,
    styles,
    dots,
    firstVisiblePosition,
    lastVisiblePosition,
    dataTestId,
    arrowsControlStyles,
    leftArrowControl,
    rightArrowControl,
  }: IPageControlStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  return (
    <PageControlContainer ref={ref} data-testid={dataTestId} styles={styles}>
      {dots > 0 && (
        <>
          {leftArrowControl && (
            <LeftArrowControlWrapperStyled arrowsControlStyles={arrowsControlStyles}>
              <ArrowControlStandAlone
                arrowsControlStyles={arrowsControlStyles}
                {...leftArrowControl}
              />
            </LeftArrowControlWrapperStyled>
          )}
          <DotsWrapper styles={styles}>
            {styles.isBullet && firstVisiblePosition > 0 ? (
              <PageControlDot state={PageControlState.LAST} styles={styles} />
            ) : null}
            {[...Array(dots)].map((_, _index) => {
              const index = _index + firstVisiblePosition;
              const state =
                index === currentPosition ? PageControlState.CURRENT : PageControlState.DEFAULT;

              return <PageControlDot key={`Dot-middle--${index}`} state={state} styles={styles} />;
            })}
            {styles.isBullet && lastVisiblePosition < pages - 1 && (
              <PageControlDot state={PageControlState.LAST} styles={styles} />
            )}
          </DotsWrapper>
          {rightArrowControl && (
            <RightArrowControlWrapperStyled arrowsControlStyles={arrowsControlStyles}>
              <ArrowControlStandAlone
                arrowsControlStyles={arrowsControlStyles}
                {...rightArrowControl}
              />
            </RightArrowControlWrapperStyled>
          )}
        </>
      )}
    </PageControlContainer>
  );
};

export const PageControlStandAlone = React.forwardRef(PageControlStandAloneComponent);
