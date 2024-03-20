import { CommonStyleType, IconTypes } from '@/types';

import { CarouselArrowStateType } from './state';

export type CarouselPropsStylesType = {
  container?: CommonStyleType;
  arrowAndCarouselContainer?: CommonStyleType;
  leftArrowIcon?: IconTypes;
  rightArrowIcon?: IconTypes;
  leftArrowIconDisabled?: IconTypes;
  rightArrowIconDisabled?: IconTypes;
  carouselContainer?: CommonStyleType;
  content?: CommonStyleType;
  pageControlContainer?: CommonStyleType;
  pageControlAutomateContainer?: CommonStyleType;
} & {
  [state in CarouselArrowStateType]?: {
    arrowLeftIconContainer?: CommonStyleType;
    arrowLeftIconButtonContainer?: CommonStyleType;
    arrowRightIconContainer?: CommonStyleType;
    arrowRightIconButtonContainer?: CommonStyleType;
  };
};

/**
 * @description
 * interface for the carousel styles
 * @template  V
 * @interface CarouselStylesType
 */

export type CarouselStylesType<V extends string | number | symbol> = {
  [variant in V]: CarouselPropsStylesType;
};
