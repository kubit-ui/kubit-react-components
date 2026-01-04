import {
  forwardRef,
  useCallback,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { InputProps } from './types/input';

import { InputStandAlone } from './inputStandAlone';
import { getState } from './utils/state';

export const Input = forwardRef<HTMLDivElement, InputProps>(
  ({ additionalClasses, id, variant, ...props }, ref): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'INPUT',
      variant,
    });

    const reactId = useId();
    const uniqueId = `input-${reactId.replace(/:/g, '')}`;
    const inputBaseId = id || uniqueId;
    const labelId = `${inputBaseId}-label`;

    // styling purposes
    // internal states used to apply the styles include filled and focused
    // the input reference is necessary to apply the styles of these states outside the input
    // for example, in the case that the input receives focus, the styles are applied to the parent container, not to the input itself
    const innerRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleInitialiceRef = useCallback((node: HTMLDivElement | null) => {
      if (node) {
        const input = node.querySelector('input');
        inputRef.current = input;
      }
      innerRef.current = node;
    }, []);

    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement, []);

    // Track focus state inline (replaces useInputFocus hook)
    const [focused, setFocused] = useState(false);
    const handleFocus = useCallback(() => setFocused(true), []);
    const handleBlur = useCallback(() => setFocused(false), []);

    const filled = Boolean(props.defaultValue ?? props.value);
    const state = getState({
      disabled: props.disabled,
      error: props.error,
      filled,
      focused,
    });

    return (
      <InputStandAlone
        ref={handleInitialiceRef}
        cssClasses={cssClasses}
        data-state={state}
        data-testid="input-container"
        filled={filled}
        focused={focused}
        inputBaseId={inputBaseId}
        labelId={labelId}
        onBlur={handleBlur}
        onFocus={handleFocus}
        {...props}
      />
    );
  },
);
