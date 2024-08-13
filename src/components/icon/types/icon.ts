import { IconTypes } from '@/types/index';

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
  'aria-label' | 'aria-controls' | 'aria-checked' | 'aria-hidden'
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
}

export type IIcon = Omit<IIconStandAlone, 'onKeyDown'> & {
  screenReaderText?: string;
};
