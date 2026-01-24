import {
  type FocusEventHandler,
  type ForwardedRef,
  forwardRef,
  useState,
} from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { TextAreaProps } from './types/textArea';

import { TextAreaStandAlone } from './textAreaStandAlone';
import { getState } from './utils/state.utils';

const TEXT_AREA = 'TEXT_AREA';

/**
 * TextArea component for multi-line text input.
 *
 * This component provides a styled textarea with support for labels, error states,
 * character counting, and focus management. It handles internal focus state and
 * applies appropriate styling based on filled and error states.
 *
 * @example
 * ```tsx
 * <TextArea
 *   label="Comments"
 *   placeholder="Enter your comments"
 *   maxLength={500}
 *   error="Required field"
 * />
 * ```
 */
export const TextArea = forwardRef(function <
  Variant extends string | undefined,
>(
  {
    additionalClasses,
    disabled = false,
    error = false,
    labelInsideTextArea = false,
    onBlur,
    onFocus,
    value,
    variant,
    ...props
  }: TextAreaProps<Variant>,
  ref: ForwardedRef<HTMLDivElement>,
): JSX.Element {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: TEXT_AREA,
    variant,
  });
  const [active, setActive] = useState(false);

  const _onFocus: FocusEventHandler<HTMLTextAreaElement> = (event) => {
    if (labelInsideTextArea) {
      const target = event?.target as HTMLElement;
      const parentElement = target?.parentElement;
      if (target && parentElement) {
        const targetComputedStyles = window.getComputedStyle(target);
        parentElement.style.outline = targetComputedStyles.outline;
        parentElement.style.boxShadow = targetComputedStyles.boxShadow;
        target.style.outline = 'none';
        target.style.boxShadow = 'none';
      }
    }
    setActive(true);
    onFocus?.(event);
  };

  const _onBlur: FocusEventHandler<HTMLTextAreaElement> = (event) => {
    if (labelInsideTextArea) {
      const target = event?.target as HTMLElement;
      const parentElement = target?.parentElement as HTMLElement;
      if (target && parentElement) {
        parentElement.style.removeProperty('outline');
        parentElement.style.removeProperty('boxShadow');
        target.style.removeProperty('outline');
        target.style.removeProperty('boxShadow');
      }
    }
    setActive(false);
    onBlur?.(event);
  };

  return (
    <TextAreaStandAlone
      ref={ref}
      cssClasses={cssClasses}
      state={getState(disabled, error, value, active)}
      value={value}
      onBlur={_onBlur}
      onFocus={_onFocus}
      {...props}
    />
  );
});
