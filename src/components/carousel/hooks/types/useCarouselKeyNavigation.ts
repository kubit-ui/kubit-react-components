export interface IUseCarouselKeyNavigationParams {
  rootContainerRef: React.RefObject<HTMLDivElement>;
  allowShiftRef: React.MutableRefObject<boolean>;
  circular: boolean;
  numPagesRef: React.MutableRefObject<number>;
  currentPageRef: React.MutableRefObject<number>;
  disabled?: boolean;
  changePage: ({
    animated,
    newPage,
  }: {
    newPage: number;
    animated?: boolean;
  }) => void;
}

export type IUseCarouselKeyNavigation = (
  params: IUseCarouselKeyNavigationParams,
) => void;
