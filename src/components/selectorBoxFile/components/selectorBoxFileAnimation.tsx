import React from 'react';

import { useBorderAnimation } from '../hooks/useBorderAnimation';
import {
  AnimationContainerStyled,
  BorderContainerStyled,
  BottomAnimationStyled,
  LeftAnimationStyled,
  RightAnimationStyled,
  TopAnimationStyled,
} from '../selectorBoxFile.styled';
import { SelectorBoxFilePropsStylesType } from '../types/selectorBoxFileTheme';
import { SelectorBoxFileStateType } from '../types/state';
import { ISelectorBoxFileContainerBox } from './selectorBoxFileContainerBox';

interface ISelectorBoxFileAnimation {
  state: SelectorBoxFileStateType;
  styles: SelectorBoxFilePropsStylesType;
  percentage: number;
  focus: boolean;
  dataTestId?: string;
  onAnimationCompleted?: () => void;
}

export const SelectorBoxFileAnimation = ({
  ...props
}: React.PropsWithChildren<ISelectorBoxFileAnimation>): JSX.Element => {
  const { topRef, rightRef, bottomRef, leftRef } = useBorderAnimation({
    percentage: props.percentage,
    styles: props.styles?.states?.[props.state],
    onAnimationCompleted: props.onAnimationCompleted,
  });

  const animationContainer = props.styles?.states?.[props.state]?.animationContainer;
  const topAnimationContainer = props.styles?.states?.[props.state]?.topAnimationContainer;
  const rightAnimationContainer = props.styles?.states?.[props.state]?.rightAnimationContainer;
  const bottomAnimationContainer = props.styles?.states?.[props.state]?.bottomAnimationContainer;
  const leftAnimationContainer = props.styles?.states?.[props.state]?.leftAnimationContainer;

  const childrenWithProps = React.Children.map(props.children, child => {
    if (React.isValidElement<ISelectorBoxFileContainerBox>(child)) {
      return React.cloneElement(child, { focus: props.focus });
    }
    return child;
  });

  return animationContainer ? (
    <AnimationContainerStyled
      data-focus={props.focus}
      data-testid={`${props.dataTestId}-animations`}
      state={props.state}
      styles={props.styles}
    >
      {/* Animation containers */}
      {topAnimationContainer && (
        <TopAnimationStyled ref={topRef} state={props.state} styles={props.styles} />
      )}
      {rightAnimationContainer && (
        <RightAnimationStyled ref={rightRef} state={props.state} styles={props.styles} />
      )}
      {bottomAnimationContainer && (
        <BottomAnimationStyled ref={bottomRef} state={props.state} styles={props.styles} />
      )}
      {leftAnimationContainer && (
        <LeftAnimationStyled ref={leftRef} state={props.state} styles={props.styles} />
      )}
      <BorderContainerStyled state={props.state} styles={props.styles}>
        {props.children}
      </BorderContainerStyled>
    </AnimationContainerStyled>
  ) : (
    <>{childrenWithProps}</>
  );
};
