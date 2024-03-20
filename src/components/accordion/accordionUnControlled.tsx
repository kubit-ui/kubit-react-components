import * as React from 'react';

import { AccordionControlled } from './accordionControlled';
import type { IAccordion } from './types';

const AccordionUnControlledComponent = <V extends string | undefined>(
  { children, defaultOpen = false, triggerButton, onOpenClose, ...props }: IAccordion<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  const handleTriggerButtonClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    const newToggleState = !isOpen;
    setIsOpen(newToggleState);
    onOpenClose?.(newToggleState, e);
  };

  return (
    <AccordionControlled
      ref={ref}
      {...props}
      open={isOpen}
      triggerButton={{ ...triggerButton, onClick: handleTriggerButtonClick }}
    >
      {children}
    </AccordionControlled>
  );
};

/**
 * @description
 * Accordion component to show or hide content.
 * @param {React.PropsWithChildren<IAccordion<V>>} props
 * @returns {JSX.Element}
 */
const AccordionUnControlled = React.forwardRef(AccordionUnControlledComponent) as <
  V extends string | unknown,
>(
  props: React.PropsWithChildren<IAccordion<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof AccordionUnControlledComponent>;

export { AccordionUnControlled };
