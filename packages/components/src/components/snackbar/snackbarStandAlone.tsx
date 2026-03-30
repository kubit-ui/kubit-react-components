import { forwardRef } from 'react';

import { classNames } from '@/lib/utils/classNames/classNames';

import type { ISnackbarStandAlone } from './types/snackbar';

import { Popover } from '../popover/popover';

/**
 * Standalone snackbar component for displaying temporary notifications.
 *
 * This component renders a notification message that appears at the bottom or top
 * of the screen, typically with auto-dismiss behavior.
 *
 * @example
 * ```tsx
 * <SnackbarStandAlone
 *   open={true}
 *   onClose={() => {}}
 * >
 *   Operation successful
 * </SnackbarStandAlone>
 * ```
 */
const SnackbarStandAloneComponent = (
  {
    children,
    cssVariantClasses,
    onClose,
    open,
    popover,
    ...props
  }: ISnackbarStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null,
): JSX.Element | null => {
  return (
    <Popover
      disableClickOverlayClose
      disableEscapeClose
      component="div"
      open={open}
      onClose={onClose}
      {...popover}
    >
      <div
        ref={ref}
        className={classNames(cssVariantClasses?.container)}
        data-testid="snackbar"
        {...props}
      >
        {children}
      </div>
    </Popover>
  );
};

export const SnackbarStandAlone = forwardRef(SnackbarStandAloneComponent);
