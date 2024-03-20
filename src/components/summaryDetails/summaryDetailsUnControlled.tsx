import * as React from 'react';

import { SummaryDetailsControlled } from './summaryDetailsControlled';
import { ISummaryDetailsUnControlled } from './types';

const SummaryDetailsUnControlledComponent = <V extends string | unknown>(
  { open = false, onOpenClose, ...props }: React.PropsWithChildren<ISummaryDetailsUnControlled<V>>,
  ref: React.ForwardedRef<HTMLDetailsElement> | undefined | null
): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(open);

  const handleClick: React.MouseEventHandler<HTMLDetailsElement> = event => {
    event.preventDefault();
    const newOpenState = !isOpen;
    setIsOpen(newOpenState);
    onOpenClose?.(newOpenState, event);
  };

  return <SummaryDetailsControlled {...props} ref={ref} open={isOpen} onClick={handleClick} />;
};

const SummaryDetailsUnControlled = React.forwardRef(SummaryDetailsUnControlledComponent) as <
  V extends string | unknown,
>(
  props: React.PropsWithChildren<ISummaryDetailsUnControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDetailsElement> | undefined | null;
  }
) => ReturnType<typeof SummaryDetailsUnControlledComponent>;

export { SummaryDetailsUnControlled };
