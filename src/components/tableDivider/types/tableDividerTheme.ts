import { CommonStyleType } from '@/types';

export type TableDividerPropsStylesType = {
  container?: CommonStyleType;
};

export type TableDividerStylesTypeV2<P extends string | number | symbol> = {
  [variant in P]: TableDividerPropsStylesType;
};
