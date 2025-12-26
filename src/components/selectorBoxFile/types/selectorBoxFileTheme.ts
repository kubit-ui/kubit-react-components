import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface SelectorBoxFileStyleProps extends CssLibPropsType {
  _actionDescriptionContainer?: CssLibPropsType;
  _header?: CssLibPropsType;
  _titleSubtitleContainer?: CssLibPropsType;
  _title?: CssLibPropsType;
  _subtitle?: CssLibPropsType;
  _subtitleTooltipContainer?: CssLibPropsType;
  _descriptionContainer?: CssLibPropsType;
  _description?: CssLibPropsType;
  _tooltipIconContainer?: CssLibPropsType;
  _tooltipIcon?: CssLibPropsType;
  _errorMessageContainer?: CssLibPropsType;
  _errorMessageIcon?: CssLibPropsType;
  _errorMessage?: CssLibPropsType;
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

// $foreign?: {
//   buttonVariant?: object;
//   buttonSize?: object;
//   tooltip;
// };
export type SelectorBoxFileVariantStyles<Variant extends string> =
  SelectorBoxFileStyleProps & {
    [key in Variant]?: SelectorBoxFileStyleProps;
  };
