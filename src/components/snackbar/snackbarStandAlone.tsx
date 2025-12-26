import { forwardRef } from 'react';

import { classNames } from '@/lib/utils/classNames/classNames';

import { Popover } from '../popover/popover';
import type { ISnackbarStandAlone } from './types/snackbar';

const SnackbarStandAloneComponent = (
  {
    children,
    cssClasses,
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
        className={classNames(cssClasses?.container)}
        data-testid="snackbar"
        {...props}
      >
        {children}
      </div>
    </Popover>
  );
};

export const SnackbarStandAlone = forwardRef(SnackbarStandAloneComponent);
