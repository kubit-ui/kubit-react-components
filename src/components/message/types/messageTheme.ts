import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface MessageStyleProps extends CssLibPropsType {
  _container?: CssLibPropsType;
  _headerContainer?: CssLibPropsType;
  _headerContainerLargeMessage?: CssLibPropsType;
  _title?: CssLibPropsType;
  _titleContainer?: CssLibPropsType;
  _contentContainer?: CssLibPropsType;
  _contentContainerLargeMessage?: CssLibPropsType;
  _description?: CssLibPropsType;
  _infoIcon?: CssLibPropsType;
  _closeIcon?: CssLibPropsType;
  _buttonSectionContainer?: CssLibPropsType;
  _actionButtonContainer?: CssLibPropsType;
  _extraActionButtonContainer?: CssLibPropsType;
  _illustration?: CssLibPropsType;
  _linkContainer?: CssLibPropsType;
  _linksContainer?: CssLibPropsType;
}
// actionButton?: ButtonSizeCssClasses;
// extraActionButton?: ButtonSizeCssClasses;

export type MessageVariantStyles<Variant extends string> = MessageStyleProps & {
  [key in Variant]: MessageStyleProps;
};
