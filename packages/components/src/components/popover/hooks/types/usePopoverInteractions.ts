interface IUsePopoverInteractionsParams {
  isVisible: boolean;
  popoverRef: React.RefObject<HTMLElement | null>;
  disableClickOverlayClose: boolean;
  disableEscapeClose: boolean;
  preventCloseOnClickElements?: Array<HTMLElement | null | undefined>;
  onClose?: () => void;
}

interface IUsePopoverInteractionsResponse {
  handleClickOutside: (event: MouseEvent) => void;
}

export type IUsePopoverInteractions = (
  params: IUsePopoverInteractionsParams,
) => IUsePopoverInteractionsResponse;
