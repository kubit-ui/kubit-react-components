import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface TooltipStyleProps extends CssLibPropsType {
  _tooltipExternalContainer?: CssLibPropsType;
  _tooltipInternalContainer?: CssLibPropsType;
  _headerContainer?: CssLibPropsType;
  _title?: CssLibPropsType;
  _paragraph?: CssLibPropsType;
  _paragraphContainer?: CssLibPropsType;
  _closeButtonIcon?: CssLibPropsType;
  _closeButtonContainer?: CssLibPropsType;
  _divider?: CssLibPropsType;
  _tooltipAsModal?: CssLibPropsType;
  _arrowContainer?: CssLibPropsType;
  _arrowSize?: CssLibPropsType;
  _arrowPosition?: CssLibPropsType;
  _tooltipAlignStyles?: CssLibPropsType;
  _arrow?: CssLibPropsType;
  _dragIconContainer?: CssLibPropsType;
  _dragIcon?: CssLibPropsType;
}

export type TooltipVariantStyles<Variant extends string> = TooltipStyleProps & {
  [key in Variant]?: TooltipStyleProps;
};
