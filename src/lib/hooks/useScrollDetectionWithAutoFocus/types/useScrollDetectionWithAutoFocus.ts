export interface UseScrollDetectionWithAutoFocusParamsType {
  parentElementRef?: React.RefObject<HTMLElement>;
  disabled?: boolean;
}

export interface UseScrollDetectionWithAutoFocusReturnType {
  handleScrollDetection: (element: HTMLElement | null | undefined) => void;
  hasScroll: boolean;
}
