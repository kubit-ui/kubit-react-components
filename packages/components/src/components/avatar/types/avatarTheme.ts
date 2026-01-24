import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface BackgroundColorAvatarStylesProps {
  ['color-default']?: {
    backgroundColor?: string;
    contentColor?: string;
    borderColor?: string;
  };
  ['color-red']?: {
    backgroundColor?: string;
    contentColor?: string;
    borderColor?: string;
  };
  ['color-white']?: {
    backgroundColor?: string;
    contentColor?: string;
    borderColor?: string;
  };
}

export interface AvatarStylesProps extends CssLibPropsType {
  _initials?: CssLibPropsType;
  _icon?: CssLibPropsType;
  _dot?: CssLibPropsType;
}

export type AvatarSizeStyles<Size extends string> = AvatarStylesProps &
  Record<Size, AvatarStylesProps | undefined>;
