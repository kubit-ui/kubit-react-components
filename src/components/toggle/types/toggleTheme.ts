import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

/**
 * @description
 * Toggle variant props type
 */
export interface ToggleVariantStyleProps extends CssLibPropsType {
  _track?: CssLibPropsType;
  _thumb?: CssLibPropsType;
  _iconWrapper?: CssLibPropsType;
  _icon?: CssLibPropsType;
}

export type ToggleVariantStyles<Variant extends string> =
  ToggleVariantStyleProps & {
    [key in Variant]?: ToggleVariantStyleProps;
  };
