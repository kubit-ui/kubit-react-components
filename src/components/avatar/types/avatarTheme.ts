import { CommonStyleType, IconTypes, TypographyTypes } from '@/types/styles';

import { AvatarBackgroundColor, AvatarContentType } from './content';

export type BackgroundColorAvatarStylesType = {
  [AvatarBackgroundColor.COLOR_DEFAULT]?: {
    backgroundColor?: string;
    contentColor?: string;
    borderColor?: string;
  };
  [AvatarBackgroundColor.COLOR_RED]?: {
    backgroundColor?: string;
    contentColor?: string;
    borderColor?: string;
  };
  [AvatarBackgroundColor.COLOR_WHITE]?: {
    backgroundColor?: string;
    contentColor?: string;
    borderColor?: string;
  };
};

export type AvatarContentStylesType = {
  linkContainer?: CommonStyleType;
  avatarContainer?: CommonStyleType;
  initials?: TypographyTypes;
  containerBackgroundColor?: BackgroundColorAvatarStylesType;
  containerBorderWidth?: string;
  avatar?: IconTypes;
};

export type AvatarSizeStylesType = {
  [Key in AvatarContentType]?: AvatarContentStylesType;
};

/**
 * @description
 * interface for the action bottom sheet styles
 * @template P
 * @interface ActionBottomSheetStylesType
 */
export type AvatarStylesType<P extends string | number | symbol> = {
  [key in P]?: AvatarSizeStylesType;
};
