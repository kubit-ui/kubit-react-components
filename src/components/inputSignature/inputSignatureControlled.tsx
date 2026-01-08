import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { InputSignatureControlledProps } from './types/inputSignature';

import { InputSignatureStandAlone } from './inputSignatureStandAlone';

/**
 * InputSignatureControlled component for capturing handwritten signatures.
 *
 * This component provides a canvas-based signature capture interface where
 * signature style (color, line width) is controlled externally. It's useful
 * for forms requiring user signatures.
 *
 * @example
 * ```tsx
 * <InputSignatureControlled
 *   signatureStyle={{ color: '#000000', lineWidth: 2 }}
 *   setSignatureStyles={(style) => console.log(style)}
 *   onSignatureChange={(dataUrl) => setSignature(dataUrl)}
 * />
 * ```
 */
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
