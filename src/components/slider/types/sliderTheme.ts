import { TooltipAlignType } from '@/components/tooltip';
import { CommonStyleType, IconTypes, TypographyTypes } from '@/types';

import { SliderStateType } from './state';

export type SliderIncDecButtonStylesType = {
  variant?: string;
  size?: string;
};

export type SliderStateStylesType = {
  container?: CommonStyleType;
  label?: TypographyTypes;
  thumb?: CommonStyleType;
  rightThumb?: CommonStyleType;
  thumbIcon?: IconTypes;
  rightThumbIcon?: IconTypes;
  innerThumbTooltip?: CommonStyleType;
  activeTrack?: CommonStyleType;
  inactiveTrack?: CommonStyleType;
  helperText?: TypographyTypes;
  incrementButton?: SliderIncDecButtonStylesType;
  decrementButton?: SliderIncDecButtonStylesType;
};

export type SliderVariableStatesType = {
  [key in SliderStateType]?: SliderStateStylesType;
};

/**
 * @description
 * Slider base styles type
 * @export
 * @interface SliderBaseStylesType
 */
export type SliderBaseStylesType = {
  labelContainer?: CommonStyleType;
  scaleContainer?: CommonStyleType;
  scaleOption?: CommonStyleType;
  buttonsTracksContainer?: CommonStyleType;
  tracksThumbsContainer?: CommonStyleType;
  tracksThumbsInnerContainer?: CommonStyleType;
  helperTextContainer?: CommonStyleType;
  helperTextLeftContainer?: CommonStyleType & TypographyTypes;
  helperTextRightContainer?: CommonStyleType & TypographyTypes;
  states?: SliderVariableStatesType;
  thumbExceedsTrack?: boolean;
  tooltip?: {
    variant?: string;
    align?: TooltipAlignType;
  };
};

/**
 * @description
 * Slider styles type
 * @export
 * @interface SliderStylesType
 */
export type SliderStylesType<P extends string | number | symbol> = {
  [key in P]?: SliderBaseStylesType;
};
