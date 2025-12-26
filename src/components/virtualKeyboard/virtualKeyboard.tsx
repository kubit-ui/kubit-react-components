import { type FocusEvent, forwardRef, useState } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { STATES } from '@/lib/types/states/states';

import type { VirtualKeyboardStateType } from './types/state';
import type { VirtualKeyboardProps } from './types/virtualKeyboard';
import { VirtualKeyboardStandAlone } from './virtualKeyboardStandAlone';

/**
 * VirtualKeyboard is a versatile component that renders a virtual keyboard with consistent styling.
 * It supports custom CSS classes and forwards a ref to the inner div element.
 *
 * @template V - The type of the variant for the virtual keyboard component.
 * @param {VirtualKeyboardProps} props - The props for the virtual keyboard component.
 * @param {ForwardedRef<HTMLDivElement>} ref - The forwarded ref for the inner div element.
 * @returns {JSX.Element} The rendered virtual keyboard component.
 */
export const VirtualKeyboard = forwardRef<HTMLDivElement, VirtualKeyboardProps>(
  ({ additionalClasses, variant, ...props }, ref): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'VIRTUAL_KEYBOARD',
      variant,
    });

    const [state, setState] = useState<VirtualKeyboardStateType>(
      STATES.INACTIVE,
    );

    const handleOnFocusVirtualKeyboard = () => {
      setState(STATES.ACTIVE);
    };

    const handleOnBlurVirtualKeyboard = (e: FocusEvent<HTMLDivElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setState(STATES.INACTIVE);
      }
    };

    return (
      <VirtualKeyboardStandAlone
        {...props}
        ref={ref}
        cssClasses={cssClasses}
        state={state}
        onVirtualKeyboardBlur={handleOnBlurVirtualKeyboard}
        onVirtualKeyboardFocus={handleOnFocusVirtualKeyboard}
      />
    );
  },
);
