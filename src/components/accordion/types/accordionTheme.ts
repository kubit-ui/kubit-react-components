import { CommonStyleType, IconTypes, TypographyTypes } from '@/types/styles';

/**
 * @description
 * interface for the accordion prop styles
 * @interface AccordionPropsStylesType
 * @extends {CommonStyleType}
 * @extends {IconTypes}
 * @extends {TypographyTypes}
 */
export type AccordionPropsStylesType = {
  container?: CommonStyleType;
  decorative?: CommonStyleType;
  headerExternalContainer?: CommonStyleType;
  headerInternalContainer?: CommonStyleType;
  headerMainContainer?: CommonStyleType;
  trigger?: CommonStyleType;
  link?: CommonStyleType;
  triggerIconContainer?: CommonStyleType;
  triggerIcon?: IconTypes;
  subHeader?: CommonStyleType;
  content?: CommonStyleType;
  panel?: CommonStyleType;
  footer?: CommonStyleType;
  titleContainer?: CommonStyleType;
  titleIconContainer?: CommonStyleType;
  title?: TypographyTypes;
  titleIcon?: IconTypes;
  headerRightContentContainer?: CommonStyleType;
  lineSeparatorContainer?: CommonStyleType & { variant?: string };
};

/**
 * @description
 * interface for the accordion styles
 * @template V
 * @interface AccordionStylesType
 */
export type AccordionStylesType<V extends string | number | symbol> = {
  [key in V]: AccordionPropsStylesType;
};
