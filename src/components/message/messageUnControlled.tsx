import {
  type MouseEventHandler,
  forwardRef,
  useCallback,
  useState,
} from 'react';

import type { MessageUnControlledProps } from './types/message';

import { MessageControlled } from './messageControlled';

export const MessageUnControlled = forwardRef<
  HTMLDivElement,
  MessageUnControlledProps<string>
>(({ closeIcon, defaultOpen = true, ...props }, ref) => {
  const [open, setOpen] = useState(defaultOpen);

  /**
   * Handles the close button click event.
   *
   * @param {MouseEvent<HTMLButtonElement>} event - The mouse event triggered by clicking the close button.
   */
  const handleCloseButton = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      setOpen(false);
      closeIcon?.onClick?.(event);
    },
    [closeIcon],
  );

  return (
    <MessageControlled
      {...props}
      ref={ref}
      closeIcon={
        closeIcon ? { ...closeIcon, onClick: handleCloseButton } : undefined
      }
      open={open}
    />
  );
});

export { MessageUnControlled as Message };
