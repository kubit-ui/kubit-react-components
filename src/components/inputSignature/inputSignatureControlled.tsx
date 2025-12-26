import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { InputSignatureStandAlone } from './inputSignatureStandAlone';
import type { InputSignatureControlledProps } from './types/inputSignature';

export const InputSignatureControlled = forwardRef(
  <Variant extends string>(
    {
      additionalClasses,
      setSignatureStyles,
      signatureStyle = {
        color: '#000000',
        lineWidth: 2,
      },
      variant,
      ...props
    }: InputSignatureControlledProps<Variant>,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'INPUT_SIGNATURE',
      variant,
    });

    setSignatureStyles?.(signatureStyle);

    return (
      <InputSignatureStandAlone ref={ref} cssClasses={cssClasses} {...props} />
    );
  },
);
