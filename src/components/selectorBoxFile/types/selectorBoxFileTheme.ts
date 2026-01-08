import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface SelectorBoxFileStyleProps extends CssLibPropsType {
  _header?: CssLibPropsType;
  _animationContainer?: CssLibPropsType;
  _topAnimationContainer?: CssLibPropsType;
  _leftAnimationContainer?: CssLibPropsType;
  _bottomAnimationContainer?: CssLibPropsType;
  _rightAnimationContainer?: CssLibPropsType;
  _borderAnimationContainer?: CssLibPropsType;
  _containerBoxContainer?: CssLibPropsType;
  _containerBoxIcon?: CssLibPropsType;
  _containerBoxTextsContainer?: CssLibPropsType;
  _containerBoxFilename?: CssLibPropsType;
  _containerBoxActionText?: CssLibPropsType;
  _containerBoxDescription?: CssLibPropsType;
  _actionIcon?: CssLibPropsType;
  _actionIconAndActionTextContainer?: CssLibPropsType;
  _containerActionContainer?: CssLibPropsType;
}

export type SelectorBoxFileVariantStyles<Variant extends string> =
  SelectorBoxFileStyleProps & {
    [key in Variant]?: SelectorBoxFileStyleProps;
  };
