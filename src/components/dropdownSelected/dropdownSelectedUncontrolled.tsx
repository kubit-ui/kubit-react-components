import {
  type FocusEventHandler,
  type KeyboardEventHandler,
  type MouseEventHandler,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';

import { ESCAPE } from '@/lib/constants/keyboardKeys/keyboardKeys';

import { DropdownSelectedControlled } from './dropdownSelectedControlled';
import type { DropdownSelectedUnControlledProps } from './types/dropdownSelected';

/**
 * Uncontrolled dropdown component for displaying selectable options.
 *
 * This component manages its own open/close state and selected option internally, so you do not need
 * to control the dropdown state from the parent. It is useful when you want a simple dropdown that handles
 * its own toggle and selection logic. You can optionally receive state changes via callbacks.
 *
 * Internally, it wraps {@link DropdownSelectedControlled} and passes the necessary props.
 *
 * @example
 * ```tsx
 * <DropdownSelectedUnControlled defaultOpen />
 * ```
 */
export const DropdownSelectedUnControlled = forwardRef<
  HTMLDivElement,
  DropdownSelectedUnControlledProps
>(
  (
    {
      defaultOpen = false,
      defaultOptionSelected,
      onBlur,
      onButtonClick,
      onClosePopover,
      onFocus,
      onOptionClick,
      openAndCloseOnHover = false,
      ...props
    },
    ref,
  ): JSX.Element => {
    const [open, setOpen] = useState<boolean>(defaultOpen);
    const [optionSelected, setOptionSelected] = useState<string | undefined>(
      defaultOptionSelected,
    );
    const buttonOrLinkRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      const handleVisibilityChange = () => {
        if (document.hidden) {
          setOpen(false);
        }
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);
      return () =>
        document.removeEventListener(
          'visibilitychange',
          handleVisibilityChange,
        );
    }, []);

    const handleOnClickButton: MouseEventHandler<
      HTMLButtonElement | HTMLLinkElement
    > = () => {
      onButtonClick?.(!open);
      setOpen(!open);
    };

    const handleOnClosePopover = () => {
      setOpen(false);
      onClosePopover?.(false);
    };

    const handleOnClickOption = (value: string) => {
      setOptionSelected(value);
      onOptionClick?.(value);
    };

    const handleOnKeyDown: KeyboardEventHandler<HTMLElement> = (event) => {
      if (ESCAPE.key.includes(event.key) && open) {
        buttonOrLinkRef.current?.focus();
        setOpen(false);
      }
    };

    const handleOnFocus: FocusEventHandler<HTMLDivElement> = () => {
      if (openAndCloseOnHover) {
        setOpen(true);
        onFocus?.(true);
      }
    };

    const handleOnBlur: FocusEventHandler<HTMLDivElement> = (event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setOpen(false);
        onBlur?.(false);
      }
      if (openAndCloseOnHover) {
        setOpen(false);
        onBlur?.(false);
      }
    };

    return (
      <DropdownSelectedControlled
        {...props}
        ref={ref}
        buttonOrLinkRef={buttonOrLinkRef}
        open={open}
        optionSelected={optionSelected}
        onBlur={handleOnBlur}
        onButtonClick={handleOnClickButton}
        onClosePopover={handleOnClosePopover}
        onFocus={handleOnFocus}
        onKeyDown={handleOnKeyDown}
        onOptionClick={handleOnClickOption}
      />
    );
  },
);

export { DropdownSelectedUnControlled as DropdownSelected };
