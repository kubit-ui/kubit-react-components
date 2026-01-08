import {
  type MouseEventHandler,
  forwardRef,
  useCallback,
  useState,
} from 'react';

import { AlertControlled } from './alertControlled';
import type { AlertUnControlledProps } from './types/alert';

/**
 * AlertUnControlled component with internal visibility state.
 *
 * This component renders an alert that manages its own open/close state internally.
 * It displays by default and can be dismissed by the user via a close button.
 * Useful for notifications that don't require external state management.
 *
 * @example
 * ```tsx
 * <AlertUnControlled
 *   variant="info"
 *   content={{ content: "This is an informational alert" }}
 *   defaultOpen={true}
 *   closeIcon={{ icon: <CloseIcon /> }}
 * />
 * ```
 */
export const AlertUnControlled = forwardRef<
  HTMLDivElement,
  AlertUnControlledProps<string>
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
    <AlertControlled
      {...props}
      ref={ref}
      closeIcon={
        closeIcon ? { ...closeIcon, onClick: handleCloseButton } : undefined
      }
      open={open}
    />
  );
});

export { AlertUnControlled as Alert };
