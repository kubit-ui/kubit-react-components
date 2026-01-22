export interface IUseCarouselSwipeParams {
  viewerContainerRef: React.RefObject<HTMLDivElement>;
  contentContainerRef: React.RefObject<HTMLDivElement>;
  allowShiftRef: React.MutableRefObject<boolean>;
  circular: boolean;
  extraPadding: number;
  elements: JSX.Element[];
  numElementsPerPageRef?: React.MutableRefObject<number | undefined>;
  numPagesRef: React.MutableRefObject<number>;
  currentPageRef: React.MutableRefObject<number>;
  centerExtremesWhenExtraPadding: boolean;
  disabled?: boolean;
  changePage: ({
    animated,
    newPage,
  }: {
    newPage: number;
    animated?: boolean;
  }) => void;
}

export type IUseCarouselSwipe = (params: IUseCarouselSwipeParams) => void;
