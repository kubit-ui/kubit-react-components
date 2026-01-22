import type {
  CarouselChangePageFnType,
  CarouselOnePageAlignType,
} from '../../types/carousel';

export interface IUseCarouselParams {
  rootContainerRef: React.RefObject<HTMLDivElement>;
  viewerContainerRef: React.RefObject<HTMLDivElement>;
  contentContainerRef: React.RefObject<HTMLDivElement>;
  circular?: boolean;
  centerMode?: boolean;
  extraPadding?: number;
  elements: JSX.Element[];
  numElementsPerPage?: number;
  numElementsToSlide?: number;
  defaultPage?: number;
  onePageAlign?: CarouselOnePageAlignType;
  autoFitContainer?: boolean;
  allowModifySliceWidth?: boolean;
  centerExtremesWhenExtraPadding?: boolean;
  disabled?: boolean;
  onNumPagesChange?: (numPages: number) => void;
  onNumElementsPerPageChange?: (numElementsPerPage: number) => void;
  onPageChange?: (currentPage: number) => void;
}

export interface IUseCarouselResponse {
  changePage: CarouselChangePageFnType;
  allowShiftRef: React.MutableRefObject<boolean>;
  currentPageRef: React.MutableRefObject<number>;
  numElementsPerPageRef: React.MutableRefObject<number | undefined>;
  numPagesRef: React.MutableRefObject<number>;
}

export type IUseCarousel = (params: IUseCarouselParams) => IUseCarouselResponse;
