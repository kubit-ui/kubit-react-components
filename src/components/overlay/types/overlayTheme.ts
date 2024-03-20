import { CommonStyleType } from '@/types';

export type OverlayVariantStylesType = {
  container?: CommonStyleType;
};

export type OverlayStylesType<P extends string | number | symbol> = {
  [variant in P]?: OverlayVariantStylesType;
};
