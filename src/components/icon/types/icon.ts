import { IconTypes } from '@/types/styles/icon';

export interface IIconComplex {
  id?: string;
  color?: string;
  height?: string;
  width?: string;
  emptyAltText?: boolean;
  altText?: string;
  icon: string;
  dataTestId?: string;
  rotate?: string;
  transitionDuration?: string;
  twistAnimationTransformValue?: string | null | undefined;
  customIconStyles?: IconTypes;
  moveRound?: string;
}

type IconAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-controls' | 'aria-checked' | 'aria-hidden' | 'aria-haspopup'
>;

export interface IIconStandAlone extends IconAriaAttributes {
  id?: string;
  altText?: string;
  color?: string;
  height?: string;
  icon: string;
  linearIcon?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLImageElement | SVGSVGElement>;
  width?: string;
  rotate?: string;
  transitionDuration?: string;
  dataTestId?: string;
  disabled?: boolean;
  fileExtension?: string;
  tabIndex?: number;
  twistAnimationTransformValue?: string | null | undefined;
  complex?: boolean;
  customIconStyles?: IconTypes;
  title?: string;
}

export type IIcon = Omit<IIconStandAlone, 'onKeyDown'> & {
  screenReaderText?: string;
};
