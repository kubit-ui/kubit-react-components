import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { TypographyTypes } from '@/types/styles/typography';

export type ModalBaseStylesType = {
  footerVariant?: string;
  popoverVariant?: string;
  container?: CommonStyleType;
  headerContainer?: CommonStyleType;
  headerContentContainer?: CommonStyleType;
  imageHeader?: IconTypes;
  title?: TypographyTypes;
  titleContainer?: CommonStyleType;
  content?: CommonStyleType;
  closeButtonIcon?: IconTypes;
  closeButtonContainer?: CommonStyleType;
  footer?: CommonStyleType;
  closeButton?: {
    buttonVariant?: string;
  };
  dragIconContainer?: CommonStyleType;
  dragIcon?: IconTypes;
};

export type ModalStylesType<P extends string | number | symbol> = {
  [variant in P]?: ModalBaseStylesType;
};
