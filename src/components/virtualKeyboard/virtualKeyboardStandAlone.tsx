import { forwardRef, useId } from 'react';

import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { STATES } from '@/lib/types/states/states';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { VirtualKeyboardStandAloneProps } from './types/virtualKeyboard';

import { DigitButton } from './components/digitButton';

export const VirtualKeyboardStandAlone = forwardRef<
  HTMLDivElement,
  VirtualKeyboardStandAloneProps
>(
  (
    {
      cssClasses,
      digits,
      icon,
      id,
      onDigitButtonClick,
      onRemoveButtonClick,
      onVirtualKeyboardBlur,
      onVirtualKeyboardFocus,
      state,
      ...props
    },
    ref,
  ) => {
    const reactId = useId();
    const uniqueId = `virtualkeyboard-${reactId.replace(/:/g, '')}`;
    const virtualKeyboardId = id ?? uniqueId;

    const customAttributes = {
      [STATES.ACTIVE]: state === STATES.ACTIVE,
      [STATES.INACTIVE]: state === STATES.INACTIVE,
    };

    const dataTestId = props['data-testid'] || 'virtual-keyboard';

    return (
      <div
        ref={ref}
        className={cssClasses?.virtual_keyboard}
        data-testid={dataTestId}
        id={virtualKeyboardId}
        role="presentation"
        onBlur={onVirtualKeyboardBlur}
        onFocus={onVirtualKeyboardFocus}
        {...pickCustomAttributes(customAttributes)}
      >
        <div
          className={cssClasses?.digitwrapper}
          {...pickCustomAttributes(customAttributes)}
        >
          {digits?.map((digit, index) => (
            <DigitButton
              key={digit}
              cssClasses={cssClasses}
              data-testid={`${dataTestId}-digit-button-${index}`}
              digit={digit}
              onClick={onDigitButtonClick}
            />
          ))}
        </div>
        <button
          className={cssClasses?.removebutton}
          type="button"
          onClick={onRemoveButtonClick}
        >
          <ElementOrIcon
            className={cssClasses?.iconcontainer}
            customAttributes={customAttributes}
            {...icon}
          />
        </button>
      </div>
    );
  },
);
