import { forwardRef } from 'react';

import { processIcon } from '@/lib/utils/process/processIcon/processIcon';

import type { CheckboxBaseStandAloneProps } from './types/checkboxBase';

import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';

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
            className={cssClasses?.icon}
            complex={true}
            data-state={props['data-state']}
            {...processIcon(checkedIcon)}
          />
        </span>
      </div>
    );
  },
);
