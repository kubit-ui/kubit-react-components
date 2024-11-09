import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { IllustrationTypes } from '@/types/styles/illustration';
import { TypographyTypes } from '@/types/styles/typography';

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
  dragIconContainer?: CommonStyleType;
  dragIcon?: IconTypes;
};

export type ModalStylesType<P extends string | number | symbol> = {
  [variant in P]?: ModalBaseStylesType;
};
