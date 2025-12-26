import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface BadgeVariantStylesType extends CssLibPropsType {
  _button?: CssLibPropsType;
  _dot?: CssLibPropsType;
  _dotContainer?: CssLibPropsType;
  _icon?: CssLibPropsType;
  _labelContainer?: CssLibPropsType;
  _label?: CssLibPropsType;
  _labelIcon?: CssLibPropsType;
}

export interface BadgeSizePropsType extends CssLibPropsType {
  _icon?: CssLibPropsType;
  _label?: CssLibPropsType;
}

export type BadgeStylesStatesStyles<P extends string> =
  BadgeVariantStylesType & {
    [key in P]?: BadgeVariantStylesType;
  };

export type BadgeStylesSizeType<S extends string> = BadgeSizePropsType & {
  [key in S]?: BadgeSizePropsType;
};

export type BadgeStylesType<
  P extends string,
  S extends string,
> = BadgeStylesStatesStyles<P> & BadgeStylesSizeType<S>;
