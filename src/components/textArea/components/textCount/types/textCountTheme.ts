import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface TextCountPropsStylesType extends CssLibPropsType {
  _letfText?: CssLibPropsType;
  _rightText?: CssLibPropsType;
}

export type TextCountStylesType<P extends string> = TextCountPropsStylesType & {
  [variant in P]: TextCountPropsStylesType;
};
