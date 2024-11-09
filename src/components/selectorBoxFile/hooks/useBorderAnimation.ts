import React from 'react';

import { SelectorBoxFileStateStylesType } from '../types/selectorBoxFileTheme';
import {
  getBottomBarWith,
  getLeftBarHeight,
  getRightBarHeight,
  getTopBarWith,
} from '../utils/animation.utils';

type ParamsType = {
  percentage: number;
  styles?: SelectorBoxFileStateStylesType;
  onAnimationCompleted?: () => void;
};

type ReturnType = {
  topRef?: React.ForwardedRef<HTMLDivElement>;
  rightRef?: React.ForwardedRef<HTMLDivElement>;
  bottomRef?: React.ForwardedRef<HTMLDivElement>;
  leftRef?: React.ForwardedRef<HTMLDivElement>;
};

const FIRST_QUARTER = 25;
const SECOND_QUARTER = 50;
const THIRD_QUARTER = 75;
const ZERO = 0;
const MAX = '100%';

const resetMeasure = (element: HTMLDivElement | null, measure: 'height' | 'width') => {
  if (element) {
    element.style.transition = 'none';
    // Force reflow to ensure the transition disabled is applied
    element.offsetHeight;
    element.style[measure] = '0%';
    element.style.removeProperty('transition');
  }
};

export const useBorderAnimation = ({ ...props }: ParamsType): ReturnType => {
  const topRef = React.useRef<HTMLDivElement>(null);
  const rightRef = React.useRef<HTMLDivElement>(null);
  const bottomRef = React.useRef<HTMLDivElement>(null);
  const leftRef = React.useRef<HTMLDivElement>(null);

  const [allowRightAnimation, setAllowRightAnimation] = React.useState(false);
  const [allowBottomAnimation, setAllowBottomAnimation] = React.useState(false);
  const [allowLeftAnimation, setAllowLeftAnimation] = React.useState(false);

  const handleTopAnimationStart = () => {
    if (props.percentage >= ZERO && topRef?.current) {
      topRef.current.style.width = `${getTopBarWith(props.percentage)}%`;
    }
  };

  const handleRightAnimationStart = () => {
    if (allowRightAnimation && props.percentage > FIRST_QUARTER && rightRef?.current) {
      rightRef.current.style.height = `${getRightBarHeight(props.percentage)}%`;
    }
  };

  const handleBottomAnimationStart = () => {
    if (allowBottomAnimation && props.percentage > SECOND_QUARTER && bottomRef?.current) {
      bottomRef.current.style.width = `${getBottomBarWith(props.percentage)}%`;
    }
  };

  const handleLeftAnimationStart = () => {
    if (allowLeftAnimation && props.percentage > THIRD_QUARTER && leftRef?.current) {
      leftRef.current.style.height = `${getLeftBarHeight(props.percentage)}%`;
    }
  };

  // Reset animation when the animation is completed
  const resetAnimation = () => {
    resetMeasure(topRef.current, 'width');
    resetMeasure(rightRef.current, 'height');
    resetMeasure(bottomRef.current, 'width');
    resetMeasure(leftRef.current, 'height');
    setAllowRightAnimation(false);
    setAllowBottomAnimation(false);
    setAllowLeftAnimation(false);
  };

  React.useEffect(() => {
    if (props.percentage === 0) {
      resetAnimation();
    } else if (props.percentage > 0) {
      handleTopAnimationStart();
      handleRightAnimationStart();
      handleBottomAnimationStart();
      handleLeftAnimationStart();
    }
  }, [props.percentage, allowRightAnimation, allowBottomAnimation, allowLeftAnimation]);

  React.useEffect(() => {
    // Add event listeners to handle animation end
    // and call onAnimationCompleted when the last animation is completed
    const handleTopTransitionEnd = () => {
      setAllowRightAnimation(topRef.current?.style.width === MAX);
    };
    const handleRightTransitionEnd = () => {
      setAllowBottomAnimation(rightRef.current?.style.height === MAX);
    };
    const handleBottomTransitionEnd = () => {
      setAllowLeftAnimation(bottomRef.current?.style.width === MAX);
    };
    const handleLeftTransitionEnd = () => {
      if (leftRef.current?.style.height === MAX) {
        props.onAnimationCompleted?.();
      }
    };

    topRef.current?.addEventListener('transitionend', handleTopTransitionEnd);
    rightRef.current?.addEventListener('transitionend', handleRightTransitionEnd);
    bottomRef.current?.addEventListener('transitionend', handleBottomTransitionEnd);
    leftRef.current?.addEventListener('transitionend', handleLeftTransitionEnd);
    return () => {
      topRef.current?.removeEventListener('transitionend', handleTopTransitionEnd);
      rightRef.current?.removeEventListener('transitionend', handleRightTransitionEnd);
      bottomRef.current?.removeEventListener('transitionend', handleBottomTransitionEnd);
      leftRef.current?.removeEventListener('transitionend', handleLeftTransitionEnd);
    };
  }, []);

  return {
    topRef,
    rightRef,
    bottomRef,
    leftRef,
  };
};
