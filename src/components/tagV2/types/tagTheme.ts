import type { CommonStyleType, IconTypes, TypographyTypes } from '@/types/index';

/**
 * Represents the styles for the Tag component.
 * @interface TagPropsStylesType
 */
export type TagPropsStylesType = {
  container?: CommonStyleType;
  icon?: IconTypes;
  label?: TypographyTypes;
};

/**
 * Represents the styles type for the Tag component, with support for different variants.
 * @template V - The type of variant.
 * @interface TagStylesType
 */
export type TagStylesType<V extends string | number | symbol> = {
  [variant in V]: TagPropsStylesType;
};
