import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface CardImageStyleProps extends CssLibPropsType {
  _imageContainer?: CssLibPropsType;
  _content?: CssLibPropsType;
  _textContainer?: CssLibPropsType;
  _titleContainer?: CssLibPropsType;
  _title?: CssLibPropsType;
  _descriptionContainer?: CssLibPropsType;
  _description?: CssLibPropsType;
  _linkContainer?: CssLibPropsType;
}

export type CardImageVariantStyles<Variant extends string> =
  CardImageStyleProps & {
    [key in Variant]?: CardImageStyleProps;
  };
