import { forwardRef, useImperativeHandle, useRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { AccordionStandAlone } from './accordionStandAlone';
import { useAccordionContentOverflow } from './hooks/useAccordionContentOverflow';
import { useAccordionInertContent } from './hooks/useAccordionInertContent';
import type { IAccordionControlled } from './types/accordion';

/**
 * `AccordionControlled` is a React functional component that provides a controlled accordion behavior.
 * It relies on the `expanded` prop to determine its expanded/collapsed state, making it suitable for use
 * in scenarios where the parent component manages the accordion's state.
 *
 * This component wraps the `AccordionStandAlone` component and applies additional CSS classes
 * based on the provided `variant` and `additionalClasses` props.
 *
 * @typeParam Variant - The type of the value associated with the accordion. It can be a `string` or `undefined`.
 *
 * @returns {JSX.Element} A JSX element representing the controlled accordion.
 *
 * @example
 * ```tsx
 * import { AccordionControlled } from './AccordionControlled';
 *
 * const Example = () => {
 *   const [isExpanded, setIsExpanded] = useState(false);
 *
 *   const handleToggle = () => {
 *     setIsExpanded((prev) => !prev);
 *   };
 *
 *   return (
 *     <AccordionControlled
 *       expanded={isExpanded}
 *       variant="primary"
 *       additionalClasses={{ root: 'custom-class' }}
 *       onHeaderClick={handleToggle}
 *     >
 *       <div>Accordion Content</div>
 *     </AccordionControlled>
 *   );
 * };
 * ```
 */
export const AccordionControlled = forwardRef(
  <Variant extends string | undefined>(
    {
      additionalClasses,
      children,
      expanded,
      variant,
      ...props
    }: IAccordionControlled<Variant>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    // Generate CSS classes based on the provided variant and additional classes
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'ACCORDION',
      variant,
    });

    const innerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => {
      return innerRef.current as HTMLDivElement;
    }, []);

    useAccordionContentOverflow({
      expanded,
      ref: innerRef,
    });

    useAccordionInertContent({
      expanded,
      ref: innerRef,
    });

    return (
      <AccordionStandAlone
        ref={innerRef}
        cssClasses={cssClasses}
        expanded={expanded}
        {...props}
      >
        {children}
      </AccordionStandAlone>
    );
  },
);
