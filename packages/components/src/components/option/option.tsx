import {
  type FocusEvent,
  type ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useGenericComponents } from '@/lib/provider/genericComponentsProvider/genericComponentsProvider';

import type { OptionProps } from './types/option';

import { OptionStandAlone } from './optionStandAlone';

/**
 * Option component for rendering selectable list items.
 *
 * This component represents a single option within a list, dropdown, or menu.
 * It manages focus states and supports custom variants for flexible styling.
 * Useful for building accessible select menus, autocomplete lists, or navigation options.
 *
 * Accepts a generic type parameter `<Variant extends string>` for custom variant values.
 *
 * @example
 * ```tsx
 * <Option value="option1" variant="default">Option 1</Option>
 *
 * // With custom variant:
 * type MyVariant = "primary" | "secondary";
 * <Option<MyVariant> variant="primary" value="item">Primary Option</Option>
 * ```
 */
export const Option = forwardRef(
  <Variant extends string>(
    {
      additionalClasses,
      focus,
      onBlur,
      onFocus,
      variant,
      ...props
    }: OptionProps<Variant>,
    ref: ForwardedRef<HTMLElement> | undefined | null,
  ): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'OPTION',
      variant,
    });

    const { LINK: genericLinkComponent } = useGenericComponents();
    const innerRef = useRef<HTMLElement>();
    const [hover, setHover] = useState(false);
    const [focused, setFocused] = useState(false);

    useImperativeHandle(ref, () => {
      return innerRef.current as HTMLElement;
    }, []);

    useEffect(() => {
      if (focus) {
        innerRef.current?.focus();
      }
    }, [focus]);

    const _onFocus = (event: FocusEvent<HTMLElement>) => {
      onFocus?.(event);
      setFocused(true);
    };
    const _onBlur = (event: FocusEvent<HTMLElement>) => {
      onBlur?.(event);
      setFocused(false);
    };

    return (
      <OptionStandAlone
        {...props}
        ref={innerRef as React.ForwardedRef<HTMLElement>}
        componentLink={genericLinkComponent}
        cssClasses={cssClasses}
        focus={focused}
        hover={hover}
        onBlur={_onBlur}
        onFocus={_onFocus}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    );
  },
);
