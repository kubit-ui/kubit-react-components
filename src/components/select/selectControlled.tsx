import {
  type ForwardedRef,
  type KeyboardEventHandler,
  forwardRef,
  useEffect,
  useRef,
} from 'react';

import { TAB } from '@/lib/constants/keyboardKeys/keyboardKeys';
import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useGenericComponents } from '@/lib/provider/genericComponentsProvider/genericComponentsProvider';
import { isKeyPressed } from '@/lib/utils/keyboard/keyboard';

import type { SelectControlledProps } from './types/select';

import { focusFirstDescendant } from '../../lib/utils/focusHandlers/focusHandlers';
import { SelectStandAlone } from './selectStandAlone';

/**
 * Controlled select component for displaying selectable options.
 *
 * This component renders a select that is fully controlled by its parent, allowing for custom open/close logic,
 * keyboard navigation, and flexible theming. It is useful when you need to manage the select state and behavior externally.
 *
 * Internally, it wraps {@link SelectStandAlone} and handles keyboard focus and scroll-based closing.
 * Accepts a generic type parameter `<Variant extends string>` to allow for custom variant values, enabling flexible styling.
 *
 * @example
 * ```tsx
 * <SelectControlled open listOptions={options} />
 *
 * // With a custom variant type:
 * type MyVariant = "primary" | "secondary";
 * <SelectControlled<MyVariant> variant="primary" open listOptions={options} />
 * ```
 */
export const SelectControlled = forwardRef(
  <Variant extends string>(
    {
      additionalClasses,
      closePopoverOnScroll,
      listOptions,
      onClosePopover,
      open,
      url,
      variant,
      ...props
    }: SelectControlledProps<Variant>,
    ref: ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    const { LINK } = useGenericComponents();
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'SELECT',
      variant,
    });
    const listOptionsRef = useRef<HTMLDivElement>(null);

    const handleOnKeyDownButton: KeyboardEventHandler<
      HTMLButtonElement | HTMLLinkElement
    > = (event) => {
      if (
        open &&
        isKeyPressed(event.key, TAB.key) &&
        !event.shiftKey &&
        listOptionsRef.current
      ) {
        if (listOptions.type === 'selection') {
          (listOptionsRef.current.firstElementChild as HTMLElement)?.focus();
        } else {
          focusFirstDescendant({
            element: listOptionsRef.current as HTMLElement,
          });
        }
        event.preventDefault();
      }
    };

    useEffect(() => {
      if (!closePopoverOnScroll) {
        return undefined;
      }
      window.addEventListener('scroll', onClosePopover);
      return () => {
        window.removeEventListener('scroll', onClosePopover);
      };
    }, [closePopoverOnScroll, onClosePopover]);

    return (
      <SelectStandAlone
        ref={ref}
        component={!url ? 'button' : LINK}
        cssClasses={cssClasses}
        listOptions={listOptions}
        listOptionsRef={listOptionsRef}
        open={open}
        onButtonKeyDown={handleOnKeyDownButton}
        onClosePopover={onClosePopover}
        {...props}
      />
    );
  },
);
