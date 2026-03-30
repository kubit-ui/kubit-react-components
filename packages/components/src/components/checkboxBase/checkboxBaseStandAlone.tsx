import { forwardRef } from 'react';

import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { processIconProp } from '@/lib/utils/process/processCommonProp';

import type { CheckboxBaseStandAloneProps } from './types/checkboxBase';

/**
 * Standalone base checkbox component for rendering the visual checkbox element.
 *
 * This component renders the underlying checkbox input with a custom checked icon.
 * It is used as the foundation for higher-level checkbox components.
 *
 * @example
 * ```tsx
 * <CheckboxBaseStandAlone
 *   checked={true}
 *   checkedIcon={<CheckIcon />}
 *   onChange={() => {}}
 * />
 * ```
 */
export const CheckboxBaseStandAlone = forwardRef(
  (
    {
      checkedIcon,
      cssClasses,
      inputRef,
      ...props
    }: CheckboxBaseStandAloneProps,
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    const dataTestId = props['data-testid'] ?? 'checkbox-base';

    return (
      <div
        ref={ref}
        className={cssClasses?.checkbox_base}
        data-testid={dataTestId}
      >
        <input
          ref={inputRef}
          className={cssClasses?.input}
          type="checkbox"
          {...props}
          data-testid={`${dataTestId}-input`}
        />
        <span
          className={cssClasses?.iconcontainer}
          data-state={props['data-state']}
        >
          <ElementOrIcon
            complex
            className={cssClasses?.icon}
            data-state={props['data-state']}
            {...processIconProp(checkedIcon)}
          />
        </span>
      </div>
    );
  },
);
