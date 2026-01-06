import { forwardRef } from 'react';

import { Text } from '@/components/text/text';
import { STATES } from '@/lib/types/states/states';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processTextProp } from '@/lib/utils/process/processCommonProp';

import type { InputSignatureStandAloneProps } from './types/inputSignature';

/**
 * Standalone signature input component for capturing handwritten signatures.
 *
 * This component renders a canvas element for signature capture with optional
 * placeholder text, error messages, and state management.
 *
 * @example
 * ```tsx
 * <InputSignatureStandAlone
 *   canvasRef={canvasRef}
 *   placeholder={{ content: "Sign here" }}
 * />
 * ```
 */
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
        {hasPlaceholder && (
          <div
            className={cssClasses?.placeholdercontainer}
            {...customAttributesProps}
          >
            <Text
              additionalClasses={{
                text: cssClasses?.placeholdertext,
              }}
              customAttributes={customAttributes}
              {...processTextProp(currentText)}
            />
          </div>
        )}
      </div>
    );
  },
);
