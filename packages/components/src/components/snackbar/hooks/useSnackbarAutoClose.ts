import { useCallback, useEffect, useRef } from 'react';

import type { IUseSnackbarAutoClose } from './types/useSnackbarAutoClose';

export const useSnackbarAutoClose: IUseSnackbarAutoClose = ({
  closeTimeout,
  onClose,
  open,
}) => {
  const closeSnackbarTimeOut = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const hover = useRef(false);
  const focus = useRef(false);
  const lastFocusedElement = useRef<Element | null>(null);

  /**
   * Only start timeout if closeTimeOut is defined, and if the snackbar is not hovered or focused
   */
  const startCloseSnackbarTimeout = useCallback(() => {
    if (!closeTimeout || hover.current || focus.current) {
      return;
    }
    closeSnackbarTimeOut.current = setTimeout(() => {
      onClose?.();
    }, closeTimeout);
  }, [closeTimeout, onClose]);

  const clearCloseSnackbarTimeout = useCallback(() => {
    if (closeSnackbarTimeOut.current) {
      clearTimeout(closeSnackbarTimeOut.current);
    }
  }, []);

  useEffect(() => {
    if (open) {
      lastFocusedElement.current = document.activeElement;
      startCloseSnackbarTimeout();
    } else {
      clearCloseSnackbarTimeout();
    }
    return () => {
      clearCloseSnackbarTimeout();
    };
  }, [open, startCloseSnackbarTimeout]);

  const handleMouseEnter = useCallback(
    (_event: React.MouseEvent<HTMLDivElement>) => {
      hover.current = true;
      clearCloseSnackbarTimeout();
    },
    [clearCloseSnackbarTimeout],
  );

  const handleMouseLeave = useCallback(
    (_event: React.MouseEvent<HTMLDivElement>) => {
      hover.current = false;
      startCloseSnackbarTimeout();
    },
    [startCloseSnackbarTimeout],
  );

  const handleFocus = useCallback(
    (_event: React.FocusEvent<HTMLDivElement>) => {
      // There is not need of calling clear timeout if already focused
      if (focus.current) {
        return;
      }
      focus.current = true;
      clearCloseSnackbarTimeout();
    },
    [clearCloseSnackbarTimeout],
  );

  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      // If already focus and the next focusable element is an inner child,
      // there is no need of calling to start timeout again
      if (
        focus.current &&
        event.currentTarget.contains(event.relatedTarget as Node)
      ) {
        return;
      }
      focus.current = false;
      startCloseSnackbarTimeout();
    },
    [startCloseSnackbarTimeout],
  );

  return {
    handleBlur,
    handleFocus,
    handleMouseEnter,
    handleMouseLeave,
    lastFocusedElement,
  };
};
