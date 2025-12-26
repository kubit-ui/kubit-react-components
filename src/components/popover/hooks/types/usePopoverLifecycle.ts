interface IUsePopoverLifecycleParams {
  animationExitDuration?: number | string;
  disableAnimations?: boolean;
  open?: boolean;
  disableAutoFocusFirstDescendant?: boolean;
  disableScrollBackground?: boolean;
  disableAutoFocusFirstDescendantAfterClose?: boolean;
  disableRestoreFocusAfterClose?: boolean;
  preventScrollOnCloseFocus?: boolean;
  popoverContainerRef?: React.ForwardedRef<HTMLElement> | null;
}
export interface IUsePopoverLifecycleResponse {
  isClosing: boolean;
  isVisible: boolean;
  popoverRef: React.RefObject<HTMLElement>;
  handleInnerRef: (node: HTMLElement | null) => void;
}

export type IUsePopoverLifecycle = (
  params: IUsePopoverLifecycleParams,
) => IUsePopoverLifecycleResponse;
