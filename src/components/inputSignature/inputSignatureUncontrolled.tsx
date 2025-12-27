import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

import type {
  InputSignatureCustomHandle,
  InputSignatureUnControlledProps,
} from './types/inputSignature';

import { useDraw } from './hook/useDraw';
import { InputSignatureControlled } from './inputSignatureControlled';
import { getInputSignatureState } from './utils/getInputSignatureState';

export const InputSignatureUnControlled = forwardRef<
  InputSignatureCustomHandle | undefined,
  InputSignatureUnControlledProps<string>
>(({ disabled, error, onChange, ...props }, ref): JSX.Element => {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const { canvasRef, filled, resetCanvas, setSignatureStyles } =
    useDraw(onChange);
  const [active, setActive] = useState<boolean>(false);

  const state = getInputSignatureState({ active, disabled, error, filled });

  useImperativeHandle(ref, () => ({
    get InputSignature() {
      return innerRef.current as HTMLDivElement;
    },
    get reset() {
      return resetCanvas;
    },
  }));

  const handleClickContainer = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) {
      return;
    }
    e.stopPropagation();
    setActive(true);
    e.currentTarget.focus();
  };

  const handleBlurContainer = () => {
    setActive(false);
  };

  return (
    <InputSignatureControlled
      ref={innerRef}
      canvasRef={canvasRef}
      setSignatureStyles={setSignatureStyles}
      onBlurContainer={handleBlurContainer}
      onClickContainer={handleClickContainer}
      {...props}
      state={state}
    />
  );
});

export { InputSignatureUnControlled as InputSignature };
