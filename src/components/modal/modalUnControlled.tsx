import {
  type KeyboardEventHandler,
  type PropsWithChildren,
  forwardRef,
  useEffect,
  useState,
} from 'react';

import { isKeyEscapePressed } from '../../lib/utils/keyboard/keyboard';
import { ModalControlled } from './modalControlled';
import type { ModalUnControlledProps } from './types/modal';

export const ModalUnControlled = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ModalUnControlledProps<string | undefined>>
>(
  (
    {
      closeButton,
      closeIcon,
      onClose,
      open: openProp,
      popover,
      variant,
      ...props
    },
    ref,
  ): JSX.Element => {
    const [open, setOpen] = useState(openProp);

    const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
      if (props?.blocked && isKeyEscapePressed(event.key)) {
        return event.stopPropagation();
      }
      return null;
    };

    useEffect(() => {
      setOpen(openProp);
    }, [openProp]);

    const handleClose = () => {
      setOpen(false);
      onClose?.();
    };

    const handleCloseIconClick = (e) => {
      handleClose();
      closeIcon?.onClick?.(e);
    };

    const handleCloseButtonClick = (e) => {
      handleClose();
      closeButton?.onClick?.(e);
    };

    return (
      <ModalControlled
        {...props}
        ref={ref}
        closeButton={
          closeButton && {
            ...closeButton,
            onClick: handleCloseButtonClick,
          }
        }
        closeIcon={{
          ...closeIcon,
          onClick: handleCloseIconClick,
        }}
        open={open}
        popover={{
          ...popover,
        }}
        variant={variant}
        onClose={onClose}
        onKeyDown={onKeyDown}
      />
    );
  },
);

export { ModalUnControlled as Modal };
