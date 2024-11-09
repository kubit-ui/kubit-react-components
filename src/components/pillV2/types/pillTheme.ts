import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { TypographyTypes } from '@/types/styles/typography';

import { PillStateType } from './pillStateType';

export type PillPropsStylesType = {
  rootContainer?: CommonStyleType;
  contentContainer?: CommonStyleType;
  leftIcon?: IconTypes;
  label?: TypographyTypes;
  rightIcon?: IconTypes;
  input?: CommonStyleType;
};

export type PillSizePropsStylesType = {
  [state in PillStateType]?: PillPropsStylesType;
};

export type PillVariantPropsStylesType = {
  [size in string]?: PillSizePropsStylesType;
};

export type PillStylesType = {
  [variant in string]: PillVariantPropsStylesType;
};

export { PillPropsStylesType as PillPropsStylesTypeV2 };
export { PillVariantPropsStylesType as PillVariantPropsStylesTypeV2 };
export { PillSizePropsStylesType as PillSizePropsStylesTypeV2 };
export { PillStylesType as PillStylesTypeV2 };
