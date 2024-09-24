import * as React from 'react';

import { DrawerControlled } from './drawerControlled';
import { IDrawerUncontrolled } from './types';

const DrawerUnControlledComponent = <V extends string | unknown>(
  { defaultOpen = true, closeIcon, popover, onOpenClose, ...props }: IDrawerUncontrolled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(defaultOpen);

  // Popover could close when pressing scape or clicking outside
  const handleCloseDrawer = () => {
    setOpen(prevOpen => {
      if (prevOpen) {
        onOpenClose?.(false);
      }
      return false;
    });
  };

  const handleCloseIconClick = e => {
    handleCloseDrawer();
    closeIcon?.onClick?.(e);
  };

  const handlePopoverCloseInternally = () => {
    handleCloseDrawer();
    popover?.onCloseInternally?.();
  };

  return (
    <DrawerControlled
      {...props}
      ref={ref}
      closeIcon={{ ...closeIcon, onClick: handleCloseIconClick }}
      open={open}
      popover={{ ...popover, onCloseInternally: handlePopoverCloseInternally }}
    />
  );
};

const DrawerUnControlled = React.forwardRef(DrawerUnControlledComponent) as <
  V extends string | unknown,
>(
  props: IDrawerUncontrolled<V> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { DrawerUnControlled };
