import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface ModalStyleProps extends CssLibPropsType {
  _headerContainer?: CssLibPropsType;
  _headerContentContainer?: CssLibPropsType;
  _title?: CssLibPropsType;
  _titleContainer?: CssLibPropsType;
  _titleHiddenContainer?: CssLibPropsType;
  _content?: CssLibPropsType;
  _closeButtonIcon?: CssLibPropsType;
  _closeButtonContainer?: CssLibPropsType;
  _footer?: CssLibPropsType;
  _dragIconContainer?: CssLibPropsType;
  _dragIcon?: CssLibPropsType;
}

export type ModalVariantStyles<Variant extends string> = ModalStyleProps & {
  [key in Variant]: ModalStyleProps;
};
