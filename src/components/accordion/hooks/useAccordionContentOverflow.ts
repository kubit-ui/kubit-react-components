import { type RefObject, useEffect, useRef } from 'react';

interface UseAccordionContentOverflowParamsType {
  ref: RefObject<HTMLDivElement>;
  expanded: boolean;
}

/**
 * Custom hook to handle the accordion content overflow behaviour based on the expanded state.
 *
 * @param {Object} params - The parameters for the hook.
 * @param {RefObject<HTMLElement>} params.ref - A reference to the accordion container element.
 * @param {boolean} params.expanded - A boolean indicating whether the accordion is expanded or collapsed.
 *
 * @returns {void}
 */
export const useAccordionContentOverflow = ({
  expanded,
  ref,
}: UseAccordionContentOverflowParamsType): void => {
  const expandedRef = useRef(expanded);

  useEffect(() => {
    const accordionContent = ref.current?.querySelector(
      '[data-kbt-accordion-content]',
    );
    const accordionContentInner = accordionContent?.querySelector(
      '[data-kbt-accordion-content-inner]',
    );

    if (
      !(accordionContent instanceof HTMLElement) ||
      !(accordionContentInner instanceof HTMLElement)
    ) {
      return;
    }

    // First render
    if (expandedRef.current === expanded) {
      const overflow = expanded ? 'visible' : 'hidden';
      accordionContent.style.overflow = overflow;
      accordionContentInner.style.overflow = overflow;
      return;
    }

    expandedRef.current = expanded;

    // If expanded state changes, accordion content should be hidden until the animation is done and expanded
    accordionContent.style.overflow = 'hidden';
    accordionContentInner.style.overflow = 'hidden';
  }, [expanded]);

  // Animation end listeners
  useEffect(() => {
    const handleTransitionEnd = (e: TransitionEvent) => {
      const accordionContent = ref.current?.querySelector(
        '[data-kbt-accordion-content]',
      );
      const accordionContentInner = accordionContent?.querySelector(
        '[data-kbt-accordion-content-inner]',
      );

      if (
        !(accordionContent instanceof HTMLElement) ||
        !(accordionContentInner instanceof HTMLElement) ||
        // make sure the transition is because of the accordion content
        !(e.target === accordionContent)
      ) {
        return;
      }
      // If the animation ends and accordion is expanded, set overflow content to visible
      if (expandedRef.current) {
        accordionContent.style.overflow = 'visible';
        accordionContentInner.style.overflow = 'visible';
      }
    };
    ref.current?.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      ref.current?.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);
};
