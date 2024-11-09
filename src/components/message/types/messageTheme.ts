import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { IllustrationTypes } from '@/types/styles/illustration';
import { TypographyTypes } from '@/types/styles/typography';

export type MessagePropsThemeType = {
  parentContainer?: CommonStyleType;
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
  buttonSectionContainer?: CommonStyleType;
  actionButtonContainer?: CommonStyleType;
  actionButton?: {
    size?: string;
  };
  extraActionButtonContainer?: CommonStyleType;
  extraActionButton?: {
    size?: string;
  };
  illustration?: IllustrationTypes;
  linkContainer?: CommonStyleType;
  linksContainer?: CommonStyleType;
};

export type MessageStylesType<P extends string | number | symbol> = {
  [key in P]?: MessagePropsThemeType;
};
