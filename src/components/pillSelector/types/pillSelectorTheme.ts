import { CommonStyleType } from '@/types';

type PillStyleType = CommonStyleType & {
  selected?: CommonStyleType;
};

export type PillSelectorStyles = {
  container?: CommonStyleType;
  pill?: PillStyleType;
  firstPill?: PillStyleType;
  lastPill?: PillStyleType;
};

export type PillSelectorThemeType<V extends string | number | symbol> = {
  [variant in V]: PillSelectorStyles;
};
