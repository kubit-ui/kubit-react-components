import { TextDecorationType } from '@/components/text';
import { CommonStyleType, IconTypes, POSITIONS, TypographyTypes } from '@/types';

export type SnackbarProps = {
  actionButton?: {
    variant?: string;
    size?: string;
  };
  link?: {
    variant?: string;
    decoration?: TextDecorationType;
  };
  container?: CommonStyleType;
  iconTitleContainer?: CommonStyleType;
  icon?: IconTypes;
  title?: TypographyTypes;
  descriptionActionContainer?: CommonStyleType;
  description?: TypographyTypes;
  closeIcon?: IconTypes;
  popoverVariants?: {
    [pos in POSITIONS]?: string;
  };
};

export type SnakbarTypeStyleProps<T extends string | number | symbol = string> = {
  [type in T]?: SnackbarProps;
};

export type SnackbarStylesType<
  V extends string | number | symbol,
  T extends string | number | symbol,
> = {
  [variant in V]: SnakbarTypeStyleProps<T>;
};
