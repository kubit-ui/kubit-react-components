import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

/**
 * Interface representing the styles for the card component.
 */
export interface CardStyleProps extends CssLibPropsType {
  _header?: CssLibPropsType;
  _content?: CssLibPropsType;
  _footer?: CssLibPropsType;
  $pseudo?: {
    hover?: CssLibPropsType;
  };
}

/**
 * Type representing the styles for different variants of the card component.
 *
 * @template Variant - The type of the variant keys.
 */
export type CardVariantStyles<Variant extends string> = CardStyleProps & {
  [key in Variant]: CardStyleProps;
};
