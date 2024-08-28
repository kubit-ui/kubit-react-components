import * as React from 'react';
import { useEffect, useState } from 'react';

import { isKeyEscapePressed } from '@/utils';

import { ModalControlled } from './modalControlled';
import { IModalUnControlled } from './types';

const ModalUnControlledComponent = <V extends string | unknown>(
  { variant, onClose, closeIcon, closeButton, popover, ...props }: IModalUnControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const [open, setOpen] = useState(props.open);

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = event => {
    if (props?.blocked && isKeyEscapePressed(event.key)) {
      return event.stopPropagation();
    }
  };

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  const handleCloseIconClick = e => {
    handleClose();
    closeIcon?.onClick?.(e);
  };

  const handlecloseButtonClick = e => {
    handleClose();
    closeButton?.onClick?.(e);
  };

  const handlePopoverCloseInternally = () => {
    handleClose();
    popover?.onCloseInternally?.();
  };

  return (
    <ModalControlled
      {...props}
      ref={ref}
      closeButton={closeButton && { ...closeButton, onClick: handlecloseButtonClick }}
      closeIcon={{ ...closeIcon, onClick: handleCloseIconClick }}
      open={open}
      popover={{ ...popover, onCloseInternally: handlePopoverCloseInternally }}
      variant={variant}
      onKeyDown={onKeyDown}
    />
  );
};

const ModalUnControlled = React.forwardRef(ModalUnControlledComponent) as <
  V extends string | unknown,
>(
  props: React.PropsWithChildren<IModalUnControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof ModalUnControlledComponent>;

export { ModalUnControlled };
