import React from 'react';

import { ArrowControlStandAlone } from './components/arrowControlStandAlone';
import { ButtonControlStandAlone } from './components/buttonControlStandAlone';
import { isIElementOrIcon } from './helper/controlType';
import {
  DotsWrapper,
  LeftArrowControlWrapperStyled,
  PageControlContainer,
  PageControlDot,
  RightArrowControlWrapperStyled,
} from './pageControl.styled';
import { IPageControlStandAlone } from './types/pageControl';
import { PageControlState } from './types/pageControlStates';

const PageControlStandAloneComponent = (
  { dataTestId = 'page-control', ...props }: IPageControlStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  return (
    <PageControlContainer ref={ref} data-testid={dataTestId} styles={props.styles}>
      {props.dots > 0 && (
        <>
          {props.leftControl && !isIElementOrIcon(props.leftControl) && (
            <ButtonControlStandAlone
              {...props.leftControl}
              buttonControlStyles={props.styles.leftButtonControl}
              dataTestId={`${dataTestId}-left-control`}
            />
          )}
          {((props.arrowsControlStyles && isIElementOrIcon(props.leftControl)) ||
            (props.arrowsControlStyles && props.leftArrowControl)) && (
            <LeftArrowControlWrapperStyled arrowsControlStyles={props.arrowsControlStyles}>
              <ArrowControlStandAlone
                arrowsControlStyles={props.arrowsControlStyles}
                {...props.leftControl}
                {...props.leftArrowControl}
              />
            </LeftArrowControlWrapperStyled>
          )}
          <DotsWrapper styles={props.styles}>
            {props.styles.isBullet && props.firstVisiblePosition > 0 ? (
              <PageControlDot state={PageControlState.LAST} styles={props.styles} />
            ) : null}
            {[...Array(props.dots)].map((_, _index) => {
              const index = _index + props.firstVisiblePosition;
              const state =
                index === props.currentPosition
                  ? PageControlState.CURRENT
                  : PageControlState.DEFAULT;

              return (
                <PageControlDot key={`Dot-middle--${index}`} state={state} styles={props.styles} />
              );
            })}
            {props.styles.isBullet && props.lastVisiblePosition < props.pages - 1 && (
              <PageControlDot state={PageControlState.LAST} styles={props.styles} />
            )}
          </DotsWrapper>
          {props.rightControl && !isIElementOrIcon(props.rightControl) && (
            <ButtonControlStandAlone
              {...props.rightControl}
              buttonControlStyles={props.styles.rightButtonControl}
              dataTestId={`${dataTestId}-right-control`}
            />
          )}
          {((props.arrowsControlStyles && isIElementOrIcon(props.rightControl)) ||
            (props.arrowsControlStyles && props.rightArrowControl)) && (
            <RightArrowControlWrapperStyled arrowsControlStyles={props.arrowsControlStyles}>
              <ArrowControlStandAlone
                arrowsControlStyles={props.arrowsControlStyles}
                {...props.rightControl}
                {...props.rightArrowControl}
              />
            </RightArrowControlWrapperStyled>
          )}
        </>
      )}
    </PageControlContainer>
  );
};

export const PageControlStandAlone = React.forwardRef(PageControlStandAloneComponent);
