import { forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { InputStandAloneProps } from './types/input';

import { InputBase } from '../inputBase/inputBase';
import { InputDecoration } from '../inputDecoration/inputDecoration';

/**
 * Standalone input component with label and decoration support.
 *
 * This component renders a complete input field with optional left and right decorations,
 * label, and visual states (focused, error, filled, disabled).
 *
 * @example
 * ```tsx
 * <InputStandAlone
 *   label={{ content: "Email" }}
 *   inputBaseId="email"
 *   focused={false}
 * />
 * ```
 */
export const InputStandAlone = forwardRef<HTMLDivElement, InputStandAloneProps>(
  (
    {
      cssClasses,
      disabled,
      error,
      filled,
      focused,
      inputBaseId,
      label,
      labelId,
      leftDecoration,
      required,
      rightDecoration,
      ...props
    },
    ref,
  ) => {
    const customProps = pickCustomAttributes(props);

    return (
      <div ref={ref} className={cssClasses?.input} {...customProps}>
        {!!(
          leftDecoration &&
          (leftDecoration?.variant || cssClasses?.left_decoration)
        ) && (
          <InputDecoration
            disabled={disabled}
            error={error}
            {...leftDecoration}
            additionalClasses={
              leftDecoration?.variant ? undefined : cssClasses?.left_decoration
            }
            variant={leftDecoration?.variant}
          />
        )}
        <div {...customProps} className={cssClasses?.inputandlabelcontainer}>
          {!!cssClasses?.input && (
            <InputBase
              disabled={disabled}
              error={error}
              filled={filled}
              focused={focused}
              required={required}
              {...props}
              additionalClasses={cssClasses?.input_base}
            />
          )}
        </div>
        {!!(
          rightDecoration &&
          (rightDecoration?.variant || cssClasses?.right_decoration)
        ) && (
          <InputDecoration
            disabled={disabled}
            error={error}
            filled={filled}
            focused={focused}
            {...rightDecoration}
            additionalClasses={
              rightDecoration?.variant
                ? undefined
                : cssClasses?.right_decoration
            }
            variant={rightDecoration?.variant}
          />
        )}
      </div>
    );
  },
);
