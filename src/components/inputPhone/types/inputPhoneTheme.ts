import { CSSProp } from 'styled-components';

import { IconHighlightedSizeType } from '@/components/iconHighlighted/types/size';
import {
  InputBasicStateProps,
  InputContentPosition,
  InputState,
} from '@/components/input/types/inputTheme';
import { CommonStyleType, IconTypes, TypographyTypes } from '@/types';

export type InputPhoneStateProps = InputBasicStateProps & {
  inputVariant?: string;
  affixContainer?: CommonStyleType;
  affixContainerPosition?: InputContentPosition;
  affix?: TypographyTypes;
  affixIcon?: IconTypes;
  affixIconContainer?: CommonStyleType;
  affixIconHighlighted?: {
    variant?: string;
    size?: IconHighlightedSizeType;
    backgroundColor?: string;
  };
  affixIconHighlightedContainer?: CommonStyleType;
  leftExtraStyles?: CSSProp;
  centerExtraStyles?: CSSProp;
  topExtraStyles?: CSSProp;
  bottomExtraStyles?: CSSProp;
};

export type InputPhoneStylesProps = {
  [state in InputState]?: InputPhoneStateProps;
};

export type InputPhoneVariantProps<V extends string | number | symbol> = {
  [variant in V]: InputPhoneStylesProps;
};
