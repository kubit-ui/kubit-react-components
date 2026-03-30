import { type HTMLAttributes, type Ref, forwardRef } from 'react';

import { classNames } from '@/lib/utils/classNames/classNames';

import type { TooltipCssClasses } from '../types/tooltip';

interface ITriggerElement extends HTMLAttributes<HTMLElement> {
  asButton?: boolean;
  children: React.ReactNode;
  cssClasses?: TooltipCssClasses;
  isMobile: boolean;
  open?: boolean;
  tooltipId: string;
}

/**
 * @description
 * TriggerElement manages ARIA attributes and interactions for the tooltip trigger element.
 * It wraps the child element and adds appropriate ARIA attributes based on the context:
 * - Desktop: Uses tooltip pattern (aria-describedby)
 * - Mobile: Uses dialog pattern (aria-controls, aria-expanded, aria-haspopup)
 * - Can render as button (default) or div based on asButton prop
 *
 * @accessibility
 * When asButton is true, ARIA attributes are applied directly to the button wrapper.
 * When asButton is false, the wrapper renders as a div and ARIA attributes are NOT applied
 * because the children element is unknown (could be a button, link, icon, etc.) and we cannot
 * programmatically propagate ARIA attributes to it. In this case, the consumer is responsible
 * for ensuring the interactive child element has the appropriate ARIA attributes.
 */
export const TriggerElement = forwardRef<HTMLElement, ITriggerElement>(
  (
    {
      asButton = true,
      children,
      cssClasses,
      isMobile,
      open,
      tooltipId,
      ...props
    },
    ref,
  ) => {
    // When asButton is false, render as div without ARIA attributes
    // The consumer's children element should handle its own accessibility
    if (!asButton) {
      return (
        <div
          ref={ref as Ref<HTMLDivElement>}
          className={classNames('kbt-tooltip__trigger')}
          {...props}
        >
          {children}
        </div>
      );
    }

    // Apply ARIA attributes to the button wrapper
    const ariaAttributes: React.AriaAttributes = {
      'aria-describedby': tooltipId,
    };

    // Mobile mode: dialog pattern with full ARIA attributes
    if (isMobile) {
      ariaAttributes['aria-controls'] = tooltipId;
      ariaAttributes['aria-expanded'] = open;
      ariaAttributes['aria-haspopup'] = 'dialog';
    }

    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        className={classNames('kbt-tooltip__trigger')}
        type="button"
        {...ariaAttributes}
        {...props}
      >
        {children}
      </button>
    );
  },
);

TriggerElement.displayName = 'TriggerElement';
