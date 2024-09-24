import { useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react';

import { STATES } from '@/types';

export type States = (keyof typeof STATES)[];

type ParamsType = {
  states: States;
  ref?: React.ForwardedRef<HTMLElement> | undefined | null;
  disabled?: boolean;
  loading?: boolean;
  active?: boolean;
};

type ReturnType = {
  state: STATES;
  setRef?: (node: HTMLElement) => void;
};
export const useManageState = ({
  disabled = false,
  loading = false,
  active = false,
  ...props
}: ParamsType): ReturnType => {
  const [over, setOver] = useState(false);
  const [pressed, setPressed] = useState(false);

  const innerRef = useRef<HTMLElement | null>(null);

  useImperativeHandle(
    props.ref,
    () => {
      return innerRef?.current as HTMLElement;
    },
    []
  );

  const onMouseOver = () => {
    setOver(true);
  };

  const onMouseOut = () => {
    setOver(false);
  };

  const onMouseDown = () => {
    setPressed(true);
  };

  const onMouseUp = () => {
    setPressed(false);
  };

  const setRef = useCallback(node => {
    if (node) {
      innerRef.current = node;
      if (props.states.includes(STATES.PRESSED)) {
        innerRef?.current?.addEventListener('mousedown', onMouseDown);
        innerRef?.current?.addEventListener('mouseup', onMouseUp);
      } else if (props.states.includes(STATES.HOVER)) {
        innerRef?.current?.addEventListener('mouseover', onMouseOver);
        innerRef?.current?.addEventListener('mouseout', onMouseOut);
      }
    } else {
      // delete over listeners
      innerRef?.current?.removeEventListener('mouseover', onMouseOver);
      innerRef?.current?.removeEventListener('mouseout', onMouseOut);
      // delete pressed listeners
      innerRef?.current?.removeEventListener('mousedown', onMouseDown);
      innerRef?.current?.removeEventListener('mouseup', onMouseUp);
      innerRef.current = node;
    }
  }, []);

  const state = useMemo(() => {
    if (props.states.includes(STATES.LOADING) && loading) {
      return STATES.LOADING;
    }
    if (props.states.includes(STATES.DISABLED) && disabled) {
      return STATES.DISABLED;
    }
    if (props.states.includes(STATES.ACTIVE) && active) {
      return STATES.ACTIVE;
    }
    if (props.states.includes(STATES.PRESSED) && pressed) {
      return STATES.PRESSED;
    }
    if (props.states.includes(STATES.HOVER) && over) {
      return STATES.HOVER;
    }
    return STATES.DEFAULT;
  }, [props.states, disabled, loading, active, over, pressed]);

  return { state, setRef };
};
