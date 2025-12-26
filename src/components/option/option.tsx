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

import { OptionStandAlone } from './optionStandAlone';
import type { OptionProps } from './types/option';

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
        ref={innerRef}
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
