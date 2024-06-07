import React, { ForwardedRef } from 'react';

import { STYLES_NAME } from '@/constants';
import { useStylesV2 } from '@/hooks';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { InputSignatureStandAlone } from './inputSignatureStandAlone';
import { IInputSignatureControlled, IInputSignatureStandAlone } from './types/inputSignature';
import { InputSignatureFullTheme } from './types/inputSignatureTheme';

export const InputSignatureControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, setSignatureStyles, ...props }: IInputSignatureControlled<V>,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const { signatureStyle, ...styles } = useStylesV2<InputSignatureFullTheme>({
      styleName: STYLES_NAME.INPUT_SIGNATURE,
      variantName: variant as string,
    }) as InputSignatureFullTheme;

    setSignatureStyles?.(signatureStyle);

    return <InputSignatureStandAlone ref={ref} styles={styles[props.state]} {...props} />;
  }
);
InputSignatureControlledComponent.displayName = 'InputSignatureControlledComponent';

const InputSignatureBoundary = <V extends string | unknown>(
  props: IInputSignatureControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement>
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <InputSignatureStandAlone {...(props as unknown as IInputSignatureStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <InputSignatureControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const InputSignatureControlled = React.forwardRef(InputSignatureBoundary) as <
  V extends string | unknown,
>(
  props: IInputSignatureControlled<V> & {
    ref?: React.ForwardedRef<HTMLDivElement | undefined | null>;
  }
) => JSX.Element;

export { InputSignatureControlled };
