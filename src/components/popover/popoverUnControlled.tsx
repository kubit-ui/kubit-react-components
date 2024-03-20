import * as React from 'react';

import { PopoverControlled } from './popoverControlled';
import type { IPopoverUnControlled } from './types';

const PopoverUnControlledComponent = (
  props: IPopoverUnControlled,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const [open, setOpen] = React.useState(props.open);

  return (
    <PopoverControlled {...props} ref={ref} open={open} onCloseInternally={() => setOpen(false)} />
  );
};

export const PopoverUnControlled = React.forwardRef(PopoverUnControlledComponent);
