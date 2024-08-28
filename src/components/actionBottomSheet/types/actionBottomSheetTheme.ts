import { CommonStyleType, IconTypes, TypographyTypes } from '@/types';

/**
 * @description
 * interface for the action bottom sheet variant styles
 * @interface ActionBottomSheetVariantStylesType
 * @template P
 */
export type ActionBottomSheetVariantStylesType = {
  container?: CommonStyleType;
  header?: CommonStyleType;
  controlContainer?: CommonStyleType;
  actionLinkContainer?: CommonStyleType;
  closeIconContainer?: CommonStyleType;
  closeIcon?: IconTypes;
  titleContainer?: CommonStyleType;
  titleContainerFont?: TypographyTypes;
  title?: TypographyTypes;
  headerContent?: CommonStyleType;
  content?: CommonStyleType;
  popoverVariant?: string;
};

/**
 * @description
 * interface for the action bottom sheet styles
 * @template P
 * @interface ActionBottomSheetStylesType
 */
export type ActionBottomSheetStylesType<P extends string | number | symbol> = {
  [key in P]?: ActionBottomSheetVariantStylesType;
};
