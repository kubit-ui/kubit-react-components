import * as React from 'react';

import { ActionBottomSheetControlled } from './actionBottomSheetControlled';
import { ActionBottomSheetUnControlledType } from './types';

export const ActionBottomSheetUnControlledComponent = <V extends string | unknown>(
  { open = false, popover, closeIcon, ...props }: ActionBottomSheetUnControlledType<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const [_open, setOpen] = React.useState(open);

  const handleCloseIconClick: React.MouseEventHandler<HTMLButtonElement> = event => {
    setOpen(false);
    closeIcon?.onClick?.(event);
  };

  const handlePopoverCloseInternally = () => {
    setOpen(false);
    popover?.onCloseInternally?.();
  };

  return (
    <ActionBottomSheetControlled
      {...props}
      ref={ref}
      closeIcon={{ ...closeIcon, onClick: handleCloseIconClick }}
      open={_open}
      popover={{ ...popover, onCloseInternally: handlePopoverCloseInternally }}
    />
  );
};

/**
 * @description
 * ActionBottomSheetUnControlled component is a controlled action bottom sheet that use a Popover component to show the content.
 * @param {React.PropsWithChildren<ActionBottomSheetUnControlledType<V>>} props
 * @returns {JSX.Element}
 */
const ActionBottomSheetUnControlled = React.forwardRef(ActionBottomSheetUnControlledComponent) as <
  V extends string | unknown,
>(
  props: React.PropsWithChildren<ActionBottomSheetUnControlledType<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof ActionBottomSheetUnControlledComponent>;

export { ActionBottomSheetUnControlled };
