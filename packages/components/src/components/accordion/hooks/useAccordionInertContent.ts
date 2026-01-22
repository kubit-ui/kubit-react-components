import { type RefObject, useEffect } from 'react';

interface UseAccordionInertContentParamsType {
  ref: RefObject<HTMLDivElement>;
  expanded: boolean;
}

/**
 * Custom hook to handle if the inner accordion content should be inert based on the expanded state.
 *
 * @param {Object} params - The parameters for the hook.
 * @param {RefObject<HTMLElement>} params.ref - A reference to the accordion container element.
 * @param {boolean} params.expanded - A boolean indicating whether the accordion is expanded or collapsed.
 *
 * @returns {void}
 */
export const useAccordionInertContent = ({
  expanded,
  ref,
}: UseAccordionInertContentParamsType): void => {
  useEffect(() => {
    const accordionContent = ref.current?.querySelector(
      '[data-kbt-accordion-content]',
    );
    if (!(accordionContent instanceof HTMLElement)) {
      return;
    }
    if (expanded) {
      accordionContent.removeAttribute('inert');
    } else {
      accordionContent.setAttribute('inert', '');
    }
  }, [expanded]);
};
