import * as React from 'react';

import { focusFirstDescendantV2 } from '@/utils/focusHandlers/focusHandlers';

import { SnackbarControlled } from './snackbarControlled';
import { ISnackbarUnControlled } from './types';

const SnackbarUnControlledComponent = <V extends string | unknown>(
  {
    open = false,
    variant,
    closeTimeout = 7000,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    ...props
  }: ISnackbarUnControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const closeSnackbarTimeOut = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const hover = React.useRef(false);
  const focus = React.useRef(false);
  const innerRef = React.useRef<HTMLDivElement>(null);
  const lastFocusedElement = React.useRef<Element | null>(null);

  React.useImperativeHandle(ref, () => innerRef?.current as HTMLDivElement, []);

  /**
   * Only start timeout if closeTimeOut is defined, and if the snackbar is not hovered or focused
   * @returns
   */
  const startCloseSnackbarTimeout = () => {
    if (!closeTimeout || hover.current || focus.current) {
      return;
    }
    closeSnackbarTimeOut.current = setTimeout(() => {
      props.onOpenClose?.(false);
    }, closeTimeout);
  };

  const clearCloseSnackbarTimeout = () => {
    if (closeSnackbarTimeOut.current) {
      clearTimeout(closeSnackbarTimeOut.current);
    }
  };

  React.useEffect(() => {
    if (open) {
      lastFocusedElement.current = document.activeElement;
      startCloseSnackbarTimeout();
    } else {
      clearCloseSnackbarTimeout();
    }
    return () => {
      clearCloseSnackbarTimeout();
    };
  }, [open]);

  const handleCloseButton: (_open: boolean) => React.MouseEventHandler<HTMLButtonElement> =
    _open => event => {
      props.onOpenClose?.(_open, event);
      // After manually closing the popover, focus the last focused element
      // If the last focused element is not available, focus the first focusable element
      if (
        lastFocusedElement.current instanceof HTMLElement &&
        document.contains(lastFocusedElement.current) &&
        document.body !== lastFocusedElement.current
      ) {
        lastFocusedElement.current.focus();
        return;
      }
      focusFirstDescendantV2({
        element: document.body,
        elementsToOmit: innerRef.current ? [innerRef.current] : [],
      });
    };

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseEnter?.(event);
    hover.current = true;
    clearCloseSnackbarTimeout();
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseLeave?.(event);
    hover.current = false;
    startCloseSnackbarTimeout();
  };

  const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
    onFocus?.(event);
    // There is not need of calling clear timeout if already focused
    if (focus.current) {
      return;
    }
    focus.current = true;
    clearCloseSnackbarTimeout();
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    onBlur?.(event);
    // If already focus and the next focusable element is an inner child,
    // there is no need of calling to start timeout again
    if (focus.current && event.currentTarget.contains(event.relatedTarget as Node)) {
      return;
    }
    focus.current = false;
    startCloseSnackbarTimeout();
  };

  return (
    <SnackbarControlled
      {...props}
      ref={innerRef}
      open={open}
      variant={variant}
      onBlur={handleBlur}
      onCloseButtonClick={handleCloseButton}
      onFocus={handleFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

const SnackbarUnControlled = React.forwardRef(SnackbarUnControlledComponent) as <
  V extends string | unknown,
>(
  props: React.PropsWithChildren<ISnackbarUnControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof SnackbarUnControlledComponent>;

export { SnackbarUnControlled };
