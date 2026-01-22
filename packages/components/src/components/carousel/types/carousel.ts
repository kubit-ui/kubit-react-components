import type { ScreenReaderOnlyProps } from '@/lib/components/screen-reader-only/types/screenReaderOnly';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

export const CAROUSEL_BUILD_SCREEN_READER_CURRENT_PAGE_KEY = '{{currentPage}}';
export const CAROUSEL_BUILD_SCREEN_READER_NUM_PAGES_KEY = '{{numPages}}';

type CarouselCssClasses = ComponentSelected<
  ComponentsTypesComponents['CAROUSEL']
>;

export type CarouselOnePageAlignType = 'left' | 'right' | 'center';

export type CarouselScreenReaderOnlyType = Omit<
  ScreenReaderOnlyProps,
  'children'
> & {
  content: string;
};

export interface ICarouselStandAlone extends DataAttributes {
  cssClasses?: CarouselCssClasses;
  viewerContainerRef: React.RefObject<HTMLDivElement>;
  contentContainerRef: React.RefObject<HTMLDivElement>;
  elements: JSX.Element[];
  screenReaderOnly?: CarouselScreenReaderOnlyType;
  allowModifySliceWidth?: boolean;
  centerMode?: boolean;
  // containers
  rootContainer?: React.HTMLAttributes<HTMLDivElement>;
  viewerContainer?: React.HTMLAttributes<HTMLDivElement>;
  contentContainer?: React.HTMLAttributes<HTMLDivElement>;
  disabled?: boolean;
}

export interface ICarousel extends Omit<
  ICarouselStandAlone,
  'cssClasses' | 'viewerContainerRef' | 'contentContainerRef'
> {
  ref?: React.Ref<CarouselRefType>;
  variant?: string;
  additionalClasses?: Partial<CarouselCssClasses>;
  circular?: boolean;
  numElementsPerPage?: number;
  numElementsToSlide?: number;
  defaultPage?: number;
  extraPadding?: number;
  centerExtremesWhenExtraPadding?: boolean;
  onePageAlign?: CarouselOnePageAlignType;
  autoFitContainer?: boolean;
  onNumPagesChange?: (numPages: number) => void;
  onNumElementsPerPageChange?: (numElementsPerPage: number) => void;
  onPageChange?: (currentPage: number) => void;
}

export type CarouselChangePageFnType = ({
  animated,
  newPage,
}: {
  newPage: number;
  animated?: boolean;
}) => void;

export type CarouselRefType = HTMLDivElement & {
  changePage: CarouselChangePageFnType;
  allowShiftRef: React.MutableRefObject<boolean>;
  currentPageRef: React.MutableRefObject<number>;
  numElementsPerPageRef: React.MutableRefObject<number | undefined>;
  numPagesRef: React.MutableRefObject<number>;
};
