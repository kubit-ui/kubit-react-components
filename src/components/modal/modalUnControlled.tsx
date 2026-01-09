import {
  type KeyboardEventHandler,
  type PropsWithChildren,
  forwardRef,
  useEffect,
  useState,
} from 'react';

import { processIconProp } from '@/lib/utils/process/processCommonProp';

import type { ModalUnControlledProps } from './types/modal';

import { ESCAPE } from '../../lib/constants/keyboardKeys/keyboardKeys';
import { isKeyPressed } from '../../lib/utils/keyboard/keyboard';
import { ModalControlled } from './modalControlled';

/**
 * ModalUnControlled component with internal state management.
 *
 * This component renders a modal that manages its own open/close state internally.
 * It automatically syncs with prop changes and handles keyboard interactions.
 * Useful when you don't need external control over the modal's visibility.
 *
 * @example
 * ```tsx
 * <ModalUnControlled
 *   open={true}
 *   onClose={() => console.log('closed')}
 * >
 *   Modal content
 * </ModalUnControlled>
 * ```
 */
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
      if (props?.blocked && isKeyPressed(event.key, ...ESCAPE.key)) {
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
      processIconProp(closeIcon)?.onClick?.(e);
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
          ...processIconProp(closeIcon),
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
