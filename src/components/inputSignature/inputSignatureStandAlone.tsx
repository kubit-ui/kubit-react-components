import { forwardRef } from 'react';

import { RenderIf } from '@/components/renderIf/renderIf';
import { Text } from '@/components/text/text';
import { STATES } from '@/lib/types/states/states';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processText } from '@/lib/utils/process/processText/processText';

import type { InputSignatureStandAloneProps } from './types/inputSignature';

export const InputSignatureStandAlone = forwardRef<
  HTMLDivElement,
  InputSignatureStandAloneProps
>(
  (
    {
      canvasRef,
      cssClasses,
      errorText,
      onBlurContainer,
      onClickContainer,
      placeholder,
      state,
      ...props
    },
    ref,
  ) => {
    const hasPlaceholder =
      state === STATES.DEFAULT ||
      state === STATES.ERROR ||
      state === STATES.DISABLED;
    const currentText =
      state === STATES.ERROR && errorText ? errorText : placeholder;
    const customAttributes = {
      'data-state': state,
    };
    const dataTestId = props['data-testid'] || 'input-signature';
    const customProps = pickCustomAttributes(props);
    const customAttributesProps = pickCustomAttributes(customAttributes);
    return (
      <div
        ref={ref}
        className={cssClasses?.input_signature}
        data-testid={dataTestId}
        role="button"
        tabIndex={-1}
        onBlur={onBlurContainer}
        onClick={onClickContainer}
        onKeyDown={
          onClickContainer as unknown as (event: React.KeyboardEvent) => void
        }
        {...customAttributesProps}
        {...customProps}
      >
        <canvas
          ref={canvasRef}
          className={cssClasses?.canvas}
          data-testid={`${dataTestId}-canvas`}
          {...customAttributesProps}
        />
        <RenderIf condition={hasPlaceholder}>
          <div
            className={cssClasses?.placeholdercontainer}
            {...customAttributesProps}
          >
            <Text
              additionalClasses={{
                text: cssClasses?.placeholdertext,
              }}
              customAttributes={customAttributes}
              {...processText(currentText)}
            />
          </div>
        </RenderIf>
      </div>
    );
  },
);
