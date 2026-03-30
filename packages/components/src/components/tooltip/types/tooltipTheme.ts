import type { CssLibPropsType } from "@/lib/types/cssGenerator/stylesTypes";

export interface TooltipStyleProps extends CssLibPropsType {
  _rootContainer?: CssLibPropsType;
  _hoverBridgeContainer?: CssLibPropsType;
  _mainContent?: CssLibPropsType;
  _overlay?: CssLibPropsType;
  _arrowElement?: CssLibPropsType;
  _popover?: CssLibPropsType;
}

export type TooltipVariantStyles<Variant extends string> = TooltipStyleProps & {
  [key in Variant]?: TooltipStyleProps;
};
