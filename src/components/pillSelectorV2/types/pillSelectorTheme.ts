import { CommonStyleType } from '@/types/styles/commonStyle';

export type PillSelectorPropsStylesType = {
  rootContainer?: CommonStyleType;
  pill?: {
    variant?: string;
    size?: string;
  };
};

export type PillSelectorVariantPropsStylesType = {
  [size in string]?: PillSelectorPropsStylesType;
};

export type PillSelectorStylesType = {
  [variant in string]: PillSelectorVariantPropsStylesType;
};
