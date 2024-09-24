import { CommonStyleType, IconTypes, TypographyTypes } from '@/types';

export type ModalBaseStylesType = {
  footerVariant?: string;
  popoverVariant?: string;
  container?: CommonStyleType;
  headerContainer?: CommonStyleType;
  imageHeader?: IconTypes;
  title?: TypographyTypes;
  content?: CommonStyleType;
  closeButtonContainer?: CommonStyleType;
  closeButtonIcon?: IconTypes;
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
