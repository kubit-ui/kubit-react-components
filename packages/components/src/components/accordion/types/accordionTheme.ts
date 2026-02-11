import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

/**
 * Interface representing the styles for the container component.
 */
export interface AccordionStyleProps extends CssLibPropsType {
  accordion?: CssLibPropsType;
  _header?: CssLibPropsType;
  _headerButton?: CssLibPropsType;
  _content?: CssLibPropsType;
  _innerContent?: CssLibPropsType;
}

/**
 * Type representing the styles for different variants of the container component.
 *
 * @template Variant - The type of the variant keys.
 */
export type AccordionVariantStyles<Variant extends string> =
  AccordionStyleProps & {
    [key in Variant]: AccordionStyleProps;
  };
