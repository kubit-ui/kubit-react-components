import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { TypographyTypes } from '@/types/styles/typography';

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
  dragIcon?: IconTypes;
  dragIconContainer?: CommonStyleType;
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
