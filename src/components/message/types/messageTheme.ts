import { CommonStyleType, IconTypes, IllustrationTypes, TypographyTypes } from '@/types';

export type MessagePropsThemeType = {
  container?: CommonStyleType;
  headerContainer?: CommonStyleType;
  headerContainerLargeMessage?: CommonStyleType;
  title?: TypographyTypes;
  contentContainer?: CommonStyleType;
  contentContainerLargeMessage?: CommonStyleType;
  description?: TypographyTypes;
  infoIcon?: IconTypes;
  closeIcon?: IconTypes;
  closeIconContainer?: CommonStyleType;
  actionButtonContainer?: CommonStyleType;
  actionButton?: {
    size?: string;
  };
  extraActionButtonContainer?: CommonStyleType;
  extraActionButton?: {
    size?: string;
  };
  illustration?: IllustrationTypes;
};

export type MessageStylesType<P extends string | number | symbol> = {
  [key in P]?: MessagePropsThemeType;
};
