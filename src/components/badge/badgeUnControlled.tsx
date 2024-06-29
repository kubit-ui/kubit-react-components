import * as React from 'react';

import { BadgeControlled } from './badgeControlled';
import { IBadgeUnControlled } from './types/badge';

const BadgeUnControlledComponent = <
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
>(
  { hasDot = true, ...props }: IBadgeUnControlled<V, S>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  const onClick: React.MouseEventHandler<HTMLButtonElement> = event => {
    setOpen(!open);
    if (!open) {
      props.onClick?.(event);
    }
  };

  const handleOnPopoverCloseInternally = () => {
    setOpen(false);
  };

  const handleOnBadgeBlur: React.FocusEventHandler<HTMLDivElement> = event => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpen(false);
    }
  };

  return (
    <BadgeControlled
      {...props}
      ref={ref}
      hasDot={hasDot}
      open={open}
      popover={{
        ...props.popover,
        onCloseInternally: () => {
          props.popover.onCloseInternally?.();
          handleOnPopoverCloseInternally();
        },
      }}
      onBadgeBlur={handleOnBadgeBlur}
      onClick={onClick}
    />
  );
};

/**
 * @description
 * Badge component is a component that shows a badge with a number or a dot.
 * @param {React.PropsWithChildren<IBadgeUnControlled<V>>} props
 * @returns {JSX.Element}
 * @example
 * <BadgeUnControlled />
 * <BadgeUnControlled variant="primary" />
 * <BadgeUnControlled variant="primary" size="small" />
 */
const BadgeUnControlled = React.forwardRef(BadgeUnControlledComponent) as <
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
>(
  props: React.PropsWithChildren<IBadgeUnControlled<V, S>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { BadgeUnControlled };
