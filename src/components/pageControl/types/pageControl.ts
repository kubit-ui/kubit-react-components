import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { ArrowsControlVariantStylesType, PageControlVariantStylesType } from './pageControlTheme';

/**
 * @deprecated `PageControlArrowControlType` is deprecated because `leftArrowControl` and `rightArrowControl` are deprecated.
 */
export type PageControlArrowControlType = IElementOrIcon;

export type ButtonControlAriaAttributes = Pick<
  React.AriaAttributes,
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-describedby'
  | 'aria-controls'
  | 'aria-expanded'
  | 'aria-pressed'
  | 'aria-disabled'
  | 'aria-hidden'
>;

export type ButtonControl = ButtonControlAriaAttributes & {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export type PageControlControlType = IElementOrIcon | ButtonControl;

export interface IPageControlStandAlone {
  styles: PageControlVariantStylesType;
  arrowsControlStyles?: ArrowsControlVariantStylesType;
  pages: number;
  dots: number;
  currentPosition: number;
  firstVisiblePosition: number;
  lastVisiblePosition: number;
  leftControl?: PageControlControlType;
  rightControl?: PageControlControlType;
  /**
   * @deprecated `leftArrowControl` is deprecated. Please use `leftControl` instead.
   */
  leftArrowControl?: PageControlArrowControlType;
  /**
   * @deprecated `rightArrowControl` is deprecated. Please use `rightControl` instead.
   */
  rightArrowControl?: PageControlArrowControlType;
  dataTestId?: string;
}

export interface PageControlType<V = undefined extends string ? unknown : string>
  extends Omit<
      IPageControlStandAlone,
      'styles' | 'arrowsControlStyles' | 'dots' | 'firstVisiblePosition' | 'lastVisiblePosition'
    >,
    Omit<
      CustomTokenTypes<PageControlVariantStylesType, undefined, ArrowsControlVariantStylesType>,
      'cts'
    > {
  maxDots?: number;
  arrowsControlVariant?: string;
  variant: V;
}
