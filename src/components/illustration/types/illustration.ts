import { IllustrationTypes } from '@/types';

type IllustrationAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-controls' | 'aria-checked' | 'aria-hidden'
>;

export interface IIllustrationStandAlone extends IllustrationAriaAttributes {
  altText?: string;
  height?: string;
  illustration: string;
  customIllustrationStyles?: IllustrationTypes;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLImageElement | SVGSVGElement>;
  width?: string;
  rotate?: string;
  transitionDuration?: string;
  dataTestId?: string;
  fileExtension?: string;
  tabIndex?: number;
  disabled?: boolean;
}

export type IIllustration = Omit<IIllustrationStandAlone, 'onKeyDown'>;
