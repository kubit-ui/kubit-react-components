import { forwardRef, useId } from 'react';

import { CustomComponent } from '@/lib/components/customComponent/customComponent';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { IAccordionStandAlone } from './types/accordion';

import { STATE } from './types/state';

/**
 * Standalone accordion component for displaying collapsible content sections.
 *
 * This component renders an expandable/collapsible section with a header and content area.
 * It manages ARIA attributes for accessibility and supports custom header components.
 *
 * @example
 * ```tsx
 * <AccordionStandAlone
 *   header="Section Title"
 *   expanded={true}
 *   onHeaderClick={() => {}}
 * >
 *   Section content
 * </AccordionStandAlone>
 * ```
 */
export const AccordionStandAlone = forwardRef<
  HTMLDivElement,
  IAccordionStandAlone
>(
  (
    {
      children,
      component = 'div',
      cssClasses,
      dataTestId = 'accordion',
      expanded,
      header,
      headerComponent = 'h3',
      onHeaderClick,
    }: IAccordionStandAlone,
    ref: React.ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const reactId = useId();
    const accordionId = `accordion-${reactId.replace(/:/g, '')}`;
    const contentId = `${accordionId}-content`;
    const customAttributes = {
      'data-state': expanded ? STATE.EXPANDED : STATE.COLLAPSED,
    };

    const customAttributesProps = pickCustomAttributes(customAttributes);

    return (
      <CustomComponent
        ref={ref}
        className={cssClasses?.accordion}
        component={component}
        data-testid={dataTestId}
        {...customAttributesProps}
      >
        <div>
          <CustomComponent
            className={cssClasses?.header}
            component={headerComponent}
            {...customAttributesProps}
          >
            <button
              aria-controls={contentId}
              aria-expanded={expanded}
              className={cssClasses?.headerbutton}
              data-testid={`${dataTestId}-header`}
              type="button"
              onClick={onHeaderClick}
              {...customAttributesProps}
            >
              {header}
            </button>
          </CustomComponent>
          <div
            data-kbt-accordion-content
            className={cssClasses?.content}
            data-testid={`${dataTestId}-content`}
            id={contentId}
            {...customAttributesProps}
          >
            <div
              data-kbt-accordion-content-inner
              className={cssClasses?.innercontent}
              {...customAttributesProps}
            >
              {children}
            </div>
          </div>
        </div>
      </CustomComponent>
    );
  },
);
