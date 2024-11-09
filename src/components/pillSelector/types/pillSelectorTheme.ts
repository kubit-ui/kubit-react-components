import { CommonStyleType } from '@/types/styles/commonStyle';

type PillStyleType = CommonStyleType & {
  selected?: CommonStyleType;
};

export type PillSelectorStyles = {
  container?: CommonStyleType;
  pill?: PillStyleType;
  firstPill?: PillStyleType;
  lastPill?: PillStyleType;
  thumb?: CommonStyleType;
};

export type PillSelectorThemeType<V extends string | number | symbol> = {
  [variant in V]: PillSelectorStyles;
};
