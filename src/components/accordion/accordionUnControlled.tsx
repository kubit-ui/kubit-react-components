import { type MouseEventHandler, forwardRef, useState } from 'react';

import { AccordionControlled } from './accordionControlled';
import type { IAccordionUnControlled } from './types/accordion';

/**
 * `AccordionUnControlled` is a React functional component that provides an uncontrolled accordion behavior.
 * It manages its own expanded/collapsed state internally using React's `useState` hook.
 *
 * This component wraps the `AccordionControlled` component and provides it with the necessary props
 * to handle the expanded state and header click events.
 *
 * @typeParam Variant - The type of the value associated with the accordion. It can be a `string` or `undefined`.
 * @returns {JSX.Element} A JSX element representing the uncontrolled accordion.
 *
 * @example
 * ```tsx
 * import { Accordion } from './AccordionUnControlled';
 *
 * const Example = () => {
 *   const handleExpandCollapse = (expanded: boolean, event: React.MouseEvent<HTMLButtonElement>) => {
 *     console.log('Accordion expanded:', expanded);
 *   };
 *
 *   return (
 *     <Accordion defaultExpanded={true} onExpandCollapse={handleExpandCollapse}>
 *       <div>Accordion Content</div>
 *     </Accordion>
 *   );
 * };
 * ```
 */
const AccordionUnControlled = forwardRef(
  <Variant extends string | undefined>(
    {
      children,
      defaultExpanded = false,
      onExpandCollapse,
      ...props
    }: IAccordionUnControlled<Variant>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const [expanded, setExpanded] = useState(defaultExpanded);

    /**
     * Handles the click event on the accordion header.
     * Toggles the expanded state and invokes the `onExpandCollapse` callback if provided.
     *
     * @param {React.MouseEvent<HTMLButtonElement>} e - The click event.
     */
    const handleHeaderClick: MouseEventHandler<HTMLButtonElement> = (e) => {
      setExpanded(!expanded);
      onExpandCollapse?.(!expanded, e);
    };

    return (
      <AccordionControlled
        ref={ref}
        {...props}
        expanded={expanded}
        onHeaderClick={handleHeaderClick}
      >
        {children}
      </AccordionControlled>
    );
  },
);

export { AccordionUnControlled as Accordion };
