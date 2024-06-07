import { CSSProp } from 'styled-components';

import {
  InputBasicStateProps,
  InputContentPosition,
  InputState,
} from '@/components/input/types/inputTheme';
import { CommonStyleType, TypographyTypes } from '@/types';

export type InputCurrencyStateProps = InputBasicStateProps & {
  currencyNameContainer?: CommonStyleType & {
    marginLeftOrRightByIsOutAndPosition?: string;
  };
  currencyNameContainerPosition?: InputContentPosition;
  currencyName?: TypographyTypes;
  inputVariant?: string;
  leftExtraStyles?: CSSProp;
  centerExtraStyles?: CSSProp;
  rightExtraStyles?: CSSProp;
  topExtraStyles?: CSSProp;
  bottomExtraStyles?: CSSProp;
};

export type InputCurrencyStylesProps = {
  [state in InputState]?: InputCurrencyStateProps;
};

export type InputCurrencyStylesType<P extends string | number | symbol> = {
  [variant in P]: InputCurrencyStylesProps;
};
