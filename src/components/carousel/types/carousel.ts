import { IElementOrIcon } from '@/components/elementOrIcon';
import { IMediaProgressBar } from '@/components/mediaProgressBar';
import { IPageControlAutomateUnControlled } from '@/components/pageControlAutomate';
import { CustomTokenTypes } from '@/types';

import { CarouselAlignType } from './carouselAlign';
import { CarouselPropsStylesType } from './carouselTheme';

export const CAROUSEL_BUILD_SCREEN_READER_CURRENT_PAGE_KEY = '{{currentPage}}';
export const CAROUSEL_BUILD_SCREEN_READER_NUM_PAGES_KEY = '{{numPages}}';

export type CarouselMediaProgressBarType = Omit<
  IMediaProgressBar,
  'variant' | 'currentBar' | 'barsNum' | 'circular'
> & {
  variant?: string;
};

export type PageControlAutomateConfigType = Omit<
  IPageControlAutomateUnControlled,
  'currentBar' | 'playing' | 'mediaProgressBar'
> & {
  mediaProgressBar: CarouselMediaProgressBarType;
};

export interface ICarouselStandAlone {
  ['aria-labelledby']?: string;
  styles: CarouselPropsStylesType;
  carouselContainerRef: React.RefObject<HTMLDivElement>;
  carouselContentRef: React.RefObject<HTMLDivElement>;
  elements: JSX.Element[];
  numPages: number;
  circular?: boolean;
  centerMode?: boolean;
  extraPadding?: number;
  extraPaddingAsArrow?: boolean;
  currentPage: number;
  leftArrow?: IElementOrIcon;
  rightArrow?: IElementOrIcon;
  onLeftArrowClick?: React.MouseEventHandler<HTMLButtonElement>;
  onRightArrowClick?: React.MouseEventHandler<HTMLButtonElement>;
  hasPagination?: boolean;
  pageControlVariant?: string;
  pageControlArrowsControlVariant?: string;
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
  onTransition?: (active: boolean) => void;
  dataTestId?: string;
  displayArrowsOnCarousel?: boolean;
  disableSwipe?: boolean;
  allowModifySliceWidth?: boolean;
  pageControlAutomateConfig?: PageControlAutomateConfigType;
  onIndicatorChange?: (index: number) => void;
  onMediaButtonClick?: (
    playing: boolean,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onMouseOut?: React.MouseEventHandler<HTMLDivElement>;
  onMouseOver?: React.MouseEventHandler<HTMLDivElement>;
  playing?: boolean;
  centerExtremesWhenExtraPadding?: boolean;
  screenReaderText?: string;
}

export interface ICarouselControlled<V = undefined extends string ? unknown : string>
  extends Omit<ICarouselStandAlone, 'styles'>,
    Omit<CustomTokenTypes<CarouselPropsStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}

export interface ICarouselUnControlled<V = undefined extends string ? unknown : string>
  extends Omit<
    ICarouselControlled<V>,
    | 'currentPage'
    | 'carouselContainerRef'
    | 'carouselContentRef'
    | 'onKeyDown'
    | 'numPages'
    | 'onMediaButtonClick'
    | 'onIndicatorChange'
    | 'onMouseOut'
    | 'onMouseOver'
    | 'playing'
    | 'onLeftArrowClick'
    | 'onRightArrowClick'
  > {
  defaultPage?: number;
  numElementsPerPage?: number;
  numElementsToSlide?: number;
  onePageAlign?: CarouselAlignType;
  onPageChange?: (page: number) => void;
}
