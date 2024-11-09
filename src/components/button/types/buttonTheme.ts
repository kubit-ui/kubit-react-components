// External types
import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { PaddingTypes } from '@/types/styles/padding';
import { TypographyTypes } from '@/types/styles/typography';

import type { ButtonStateType } from './state';

/**
 * @description
 * Button size props type
 * @interface ButtonSizePropsType
 * @property {PaddingTypes} [key] - Padding of the button.
 * @property {TypographyTypes} [key] - Typography of the button.
 * @property {IconTypes} [icon] - Icon of the button.
 *
 */
export type ButtonSizePropsType = PaddingTypes &
  TypographyTypes & {
    icon?: IconTypes;
    gap?: string;
  };

/**
 * @description
 * Button variant styles type
 * @interface ButtonVariantStylesType
 * @property {CommonStyleType} [key] - Variant of the button.
 * @property {TypographyTypes} [key] - Variant of the button.
 * @property {boolean} [altVariant] - If true, the button will have an alternative variant.
 * @property {IconTypes} [icon] - Icon of the button.
 *
 */
export type ButtonVariantStylesType = CommonStyleType &
  TypographyTypes & {
    altVariant?: boolean;
    icon?: IconTypes;
  };

/**
 * @description
 * Button state key of type
 * @interface ButtonStateKeyOfType
 * @property {ButtonVariantStylesType} [key] - Variant of the button.
 *
 */
export type ButtonStateKeyOfType = { [key in ButtonStateType]?: ButtonVariantStylesType };

/**
 * @description
 * Button variant type
 * @enum {string}
 */
export type ButtonStylesVariantType<P extends string | number | symbol> = {
  [key in P]?: ButtonStateKeyOfType;
};

/**
 * @description
 * Button size type
 * @enum {string}
 */
export type ButtonStylesSizeType<S extends string | number | symbol> = {
  [key in S]?: ButtonSizePropsType;
};

/**
 * @description
 * Button styles type
 * @interface ButtonStylesType
 * @property {ButtonStylesVariantType} [variant] - Variant of the button.
 * @property {ButtonStylesSizeType} [size] - Size of the button.
 * @example
 * <Button variant={ButtonVariantType.PRIMARY} size={ButtonSizeType.SMALL} />
 */
export type ButtonStylesType<
  P extends string | number | symbol,
  S extends string | number | symbol,
> = ButtonStylesVariantType<P> & ButtonStylesSizeType<S>;
