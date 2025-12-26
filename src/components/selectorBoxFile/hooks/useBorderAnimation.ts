import { type ForwardedRef, useEffect, useRef, useState } from 'react';

import {
  getBottomBarWith,
  getLeftBarHeight,
  getRightBarHeight,
  getTopBarWith,
} from '../utils/animation/animation';

interface ParamsType {
  percentage: number;
  onAnimationCompleted?: () => void;
}

interface ReturnType {
  topRef?: ForwardedRef<HTMLDivElement>;
  rightRef?: ForwardedRef<HTMLDivElement>;
  bottomRef?: ForwardedRef<HTMLDivElement>;
  leftRef?: ForwardedRef<HTMLDivElement>;
}

const FIRST_QUARTER = 25;
const SECOND_QUARTER = 50;
const THIRD_QUARTER = 75;
const ZERO = 0;
const MAX = '100%';

const resetMeasure = (
  element: HTMLDivElement | null,
  measure: 'height' | 'width',
) => {
  if (element) {
    element.style.transition = 'none';
    // Force reflow to ensure the transition disabled is applied
    element.style[measure] = '0%';
    element.style.removeProperty('transition');
  }
};

export const useBorderAnimation = ({ ...props }: ParamsType): ReturnType => {
  const topRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const [allowRightAnimation, setAllowRightAnimation] = useState(false);
  const [allowBottomAnimation, setAllowBottomAnimation] = useState(false);
  const [allowLeftAnimation, setAllowLeftAnimation] = useState(false);

  const handleTopAnimationStart = () => {
    if (props.percentage >= ZERO && topRef?.current) {
      topRef.current.style.width = `${getTopBarWith(props.percentage)}%`;
    }
  };

  const handleRightAnimationStart = () => {
    if (
      allowRightAnimation &&
      props.percentage > FIRST_QUARTER &&
      rightRef?.current
    ) {
      rightRef.current.style.height = `${getRightBarHeight(props.percentage)}%`;
    }
  };

  const handleBottomAnimationStart = () => {
    if (
      allowBottomAnimation &&
      props.percentage > SECOND_QUARTER &&
      bottomRef?.current
    ) {
      bottomRef.current.style.width = `${getBottomBarWith(props.percentage)}%`;
    }
  };

  const handleLeftAnimationStart = () => {
    if (
      allowLeftAnimation &&
      props.percentage > THIRD_QUARTER &&
      leftRef?.current
    ) {
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

  useEffect(() => {
    if (props.percentage === 0) {
      resetAnimation();
    } else if (props.percentage > 0) {
      handleTopAnimationStart();
      handleRightAnimationStart();
      handleBottomAnimationStart();
      handleLeftAnimationStart();
    }
  }, [
    props.percentage,
    allowRightAnimation,
    allowBottomAnimation,
    allowLeftAnimation,
  ]);

  useEffect(() => {
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
    rightRef.current?.addEventListener(
      'transitionend',
      handleRightTransitionEnd,
    );
    bottomRef.current?.addEventListener(
      'transitionend',
      handleBottomTransitionEnd,
    );
    leftRef.current?.addEventListener('transitionend', handleLeftTransitionEnd);
    return () => {
      topRef.current?.removeEventListener(
        'transitionend',
        handleTopTransitionEnd,
      );
      rightRef.current?.removeEventListener(
        'transitionend',
        handleRightTransitionEnd,
      );
      bottomRef.current?.removeEventListener(
        'transitionend',
        handleBottomTransitionEnd,
      );
      leftRef.current?.removeEventListener(
        'transitionend',
        handleLeftTransitionEnd,
      );
    };
  }, []);

  return {
    bottomRef,
    leftRef,
    rightRef,
    topRef,
  };
};
