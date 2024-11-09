import { CommonStyleType } from '@/types/styles/commonStyle';

export type OverlayVariantStylesType = {
  container?: CommonStyleType;
};

export type OverlayStylesType<P extends string | number | symbol> = {
  [variant in P]?: OverlayVariantStylesType;
};
