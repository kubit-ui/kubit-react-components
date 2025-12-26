interface IUseSnackbarAutoCloseParams {
  open: boolean;
  closeTimeout?: number;
  onClose?: () => void;
}

interface IUseSnackbarAutoCloseResponse {
  handleMouseEnter: React.MouseEventHandler<HTMLDivElement>;
  handleMouseLeave: React.MouseEventHandler<HTMLDivElement>;
  handleFocus: React.FocusEventHandler<HTMLDivElement>;
  handleBlur: React.FocusEventHandler<HTMLDivElement>;
  lastFocusedElement: React.MutableRefObject<Element | null>;
}

export type IUseSnackbarAutoClose = (
  params: IUseSnackbarAutoCloseParams
) => IUseSnackbarAutoCloseResponse;
