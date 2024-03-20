import { InputBasicStateProps, InputState } from '@/components/input/types/inputTheme';
import { CommonStyleType } from '@/types';

export type InputCounterStateProps = InputBasicStateProps & {
  inputVariant?: string;
  textCountVariant?: string;
  textCountTextVariant?: string;
  textCountLeftWeight?: number;
  textCountLeftColor?: string;
  textCountRightWeight?: number;
  textCountRightColor?: string;
  textCounterContainer?: CommonStyleType;
};

export type InputCounterStylesProps = {
  [state in InputState]?: InputCounterStateProps;
};

export type InputCounterStylesType<V extends string | number | symbol> = {
  [variant in V]: InputCounterStylesProps;
};
