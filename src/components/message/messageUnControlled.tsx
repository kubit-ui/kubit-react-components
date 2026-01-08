import {
  type MouseEventHandler,
  forwardRef,
  useCallback,
  useState,
} from 'react';

import type { MessageUnControlledProps } from './types/message';

import { MessageControlled } from './messageControlled';

/**
 * MessageUnControlled component with internal visibility state.
 *
 * This component renders a message that manages its own open/close state internally.
 * It displays by default and can be dismissed by the user via a close button.
 * Useful for notifications that don't require external state management.
 *
 * @example
 * ```tsx
 * <MessageUnControlled
 *   variant="info"
 *   title="Information"
 *   description="This is an informational message"
 *   defaultOpen={true}
 * />
 * ```
 */
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
