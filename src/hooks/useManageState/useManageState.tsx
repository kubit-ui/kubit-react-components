/* eslint-disable complexity */
import { useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react';

import { STATES } from '../../types/states/states';

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

  const supportHover = () => {
    if (typeof window !== 'undefined' && window?.matchMedia) {
      const query = window.matchMedia('(hover: none)');
      return !query.matches;
    }
    return true;
  };

  const onMouseEnter = () => {
    setOver(true);
  };

  const onMouseLeave = () => {
    setOver(false);
  };

  const onPointerDown = () => {
    setPressed(true);
  };

  const onPointerCancel = () => {
    setPressed(false);
  };

  const onPointerUp = () => {
    setPressed(false);
  };

  const setRef = useCallback(node => {
    if (node) {
      innerRef.current = node;
      if (props.states.includes(STATES.PRESSED)) {
        innerRef?.current?.addEventListener('pointerdown', onPointerDown);
        innerRef?.current?.addEventListener('pointercancel', onPointerCancel);
        window.addEventListener('pointerup', onPointerUp);
      }
      if (supportHover() && props.states.includes(STATES.HOVER)) {
        innerRef?.current?.addEventListener('mouseenter', onMouseEnter);
        innerRef?.current?.addEventListener('mouseleave', onMouseLeave);
      }
    } else {
      // delete over listeners
      innerRef?.current?.removeEventListener('mouseenter', onMouseEnter);
      innerRef?.current?.removeEventListener('mouseleave', onMouseLeave);
      // delete pressed listeners
      innerRef?.current?.removeEventListener('pointerdown', onPointerDown);
      innerRef?.current?.removeEventListener('pointercancel', onPointerCancel);
      window.removeEventListener('pointerup', onPointerUp);
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
