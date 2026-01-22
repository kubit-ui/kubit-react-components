import {
  type ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { ISnackbar } from './types/snackbar';

import { useSnackbarAutoClose } from './hooks/useSnackbarAutoClose';
import { SnackbarStandAlone } from './snackbarStandAlone';

/**
 * Snackbar component for displaying temporary notification messages.
 *
 * This component shows brief messages at the bottom or top of the screen.
 * It supports auto-close functionality with customizable timeout and pause on hover/focus.
 * Useful for showing feedback messages, alerts, or non-critical notifications.
 *
 * @example
 * ```tsx
 * <Snackbar
 *   open={isOpen}
 *   onClose={handleClose}
 *   closeTimeout={3000}
 * >
 *   Message sent successfully!
 * </Snackbar>
 * ```
 */
const SnackbarComponent = (
  { additionalClasses, closeTimeout, open = false, ...props }: ISnackbar,
  ref: ForwardedRef<HTMLDivElement> | undefined | null,
): JSX.Element => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'SNACKBAR',
  });

  const innerRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => innerRef?.current as HTMLDivElement, []);

  const { handleBlur, handleFocus, handleMouseEnter, handleMouseLeave } =
    useSnackbarAutoClose({
      closeTimeout,
      onClose: props.onClose,
      open,
    });

  return (
    <SnackbarStandAlone
      {...props}
      ref={innerRef}
      cssClasses={cssClasses}
      open={open}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export const Snackbar = forwardRef(SnackbarComponent);
