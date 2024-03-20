import { IElementOrIcon } from '@/components/elementOrIcon';
import { CustomTokenTypes } from '@/types';

import { ArrowsControlVariantStylesType, PageControlVariantStylesType } from './pageControlTheme';

export type PageControlArrowControlType = IElementOrIcon;
export interface IPageControlStandAlone {
  styles: PageControlVariantStylesType;
  arrowsControlStyles: ArrowsControlVariantStylesType;
  pages: number;
  dots: number;
  currentPosition: number;
  firstVisiblePosition: number;
  lastVisiblePosition: number;
  leftArrowControl?: PageControlArrowControlType;
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
  arrowsControlVariant: string;
  variant: V;
}
