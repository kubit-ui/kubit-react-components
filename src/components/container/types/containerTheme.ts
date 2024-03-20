import type { CommonStyleType, TypographyTypes } from '@/types/index';

/**
 * Represents the styles for the Container component.
 * @interface ContainerPropsStylesType
 * [element] _ [property] _ [measure]
 */

export type ContainerPropsStylesType = {
  parentContainer?: CommonStyleType;
  header?: CommonStyleType;
  title?: TypographyTypes;
  container: CommonStyleType;
};

/**
 * Represents the styles type for the Container component, with support for different variants.
 * @template P - The type of variant.
 * @interface ContainerStylesType
 */
export type ContainerStylesType<P extends string | number | symbol> = {
  [variant in P]: ContainerPropsStylesType;
};
