import { CommonStyleType, IconTypes, IllustrationTypes, TypographyTypes } from '@/types';

export type ModalBaseStylesType = {
  footerVariant?: string;
  popoverVariant?: string;
  container?: CommonStyleType;
  headerContainer?: CommonStyleType;
  imageContainer?: CommonStyleType;
  imageIllustrationHeader?: IllustrationTypes;
  imageHeader?: IconTypes;
  title?: TypographyTypes;
  content?: CommonStyleType;
  closeButtonContainer?: CommonStyleType;
  closeButtonIcon?: IconTypes;
  footer?: CommonStyleType;
  closeButton?: {
    buttonVariant?: string;
  };
};

export type ModalStylesType<P extends string | number | symbol> = {
  [variant in P]?: ModalBaseStylesType;
};
