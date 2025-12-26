import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

/**
 * Interface representing the styles for the container component.
 */
export interface ContainerStyleProps extends CssLibPropsType {
  _header?: CssLibPropsType;
  _title?: CssLibPropsType;
  _content?: CssLibPropsType;
}

/**
 * Type representing the styles for different variants of the container component.
 *
 * @template Variant - The type of the variant keys.
 */
export type ContainerVariantStyles<Variant extends string> =
  ContainerStyleProps & {
    [key in Variant]: ContainerStyleProps;
  };
