import React from 'react';

import { useDraw } from './hook';
import { InputSignatureControlled } from './inputSignatureControlled';
import { CustomHandle, IInputSignatureUnControlled } from './types/inputSignature';
import { getInputSignatureState } from './utils';

const InputSignatureUnControlledComponent = <V extends string | unknown>(
  { disabled, error, onChange, ...props }: IInputSignatureUnControlled<V>,
  ref: React.ForwardedRef<CustomHandle | undefined>
): JSX.Element => {
  // refs
  const innerRef = React.useRef<HTMLDivElement | null>(null);
  // custom hook
  const { canvasRef, filled, resetCanvas, setSignatureStyles } = useDraw(onChange);
  // active state
  const [active, setActive] = React.useState<boolean>(false);
  // constants
  const state = getInputSignatureState({ active, filled, error, disabled });

  React.useImperativeHandle(ref, () => ({
    get InputSignature() {
      return innerRef.current as HTMLDivElement;
    },
    get reset() {
      return resetCanvas;
    },
  }));

  const _onClickContainer = e => {
    if (disabled) {
      return;
    }
    e.stopPropagation();

    setActive(true);
    e.currentTarget.focus();
  };

  const _onBlurContainer = () => {
    setActive(false);
  };

  return (
    <InputSignatureControlled
      ref={innerRef}
      canvasRef={canvasRef}
      setSignatureStyles={setSignatureStyles}
      state={state}
      onBlurContainer={_onBlurContainer}
      onClickContainer={_onClickContainer}
      {...props}
    />
  );
};

const InputSignatureUnControlled = React.forwardRef(InputSignatureUnControlledComponent) as <
  V extends string | unknown,
>(
  props: IInputSignatureUnControlled<V> & {
    ref?: React.ForwardedRef<CustomHandle | undefined>;
  }
) => JSX.Element;

export { InputSignatureUnControlled };
