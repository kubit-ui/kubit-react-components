import { forwardRef, useId } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processTextProp } from '@/lib/utils/process/processCommonProp';

import type { CheckboxStandAloneProps } from './types/checkbox';

import { CheckboxBaseControlled } from '../checkboxBase/checkboxBaseControlled';
import { ErrorMessage } from './components/errorMessage';
import { Label } from './components/label';
import { buildAriaDescribedBy } from './utils/aria.utils';

/**
 * Standalone checkbox component with label and error message support.
 *
 * This component renders a checkbox input with an associated label and optional error message.
 * It manages accessibility attributes and integrates with CheckboxBase for the input element.
 *
 * @example
 * ```tsx
 * <CheckboxStandAlone
 *   label={{ content: "Accept terms" }}
 *   checkboxBase={{ checked: true, onChange: () => {} }}
 * />
 * ```
 */
export const CheckboxStandAlone = forwardRef(
  (
    {
      checkboxBase,
      cssClasses,
      errorMessage,
      id,
      label,
      screenReaderText,
      ...props
    }: CheckboxStandAloneProps,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    const customProps = pickCustomAttributes(props);
    const {
      'aria-describedby': ariaDescribedByProps,
      'aria-hidden': ariaHidden,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      ...restCustomProps
    } = customProps;

    const reactId = useId();
    const uniqueId = `checkbox-${reactId.replace(/:/g, '')}`;
    const checkBoxId = id ?? uniqueId;

    const checkBoxLabelId = `${checkBoxId}-label`;
    const checkBoxErrorId = `${checkBoxId}-error`;
    const screenReaderId = `${checkBoxId}-screen-reader`;

    const checkboxBaseVariant = checkboxBase?.variant;

    const ariaDescribedBy = buildAriaDescribedBy({
      ariaDescribedBy: props['aria-describedby'],
      error: props.error && !!errorMessage?.message,
      errorMessageId: checkBoxErrorId,
      screenReader: !!screenReaderText,
      screenReaderId,
    });

    return (
      <div
        ref={ref}
        // only data attributes are passed to the component
        {...restCustomProps}
        className={cssClasses?.checkbox}
      >
        <div className={cssClasses?.checkboxwithlabelcontainer}>
          {!!checkboxBaseVariant && (
            <CheckboxBaseControlled
              {...props}
              aria-describedby={ariaDescribedBy}
              aria-hidden={props['aria-hidden']}
              aria-label={props['aria-label']}
              aria-labelledby={props['aria-labelledby']}
              id={checkBoxId}
              variant={checkboxBaseVariant}
            />
          )}
          <screen-reader-only id={screenReaderId}>
            {screenReaderText}
          </screen-reader-only>
          <Label
            content={processTextProp(label).children}
            cssClasses={cssClasses}
            id={checkBoxLabelId}
            inputId={checkBoxId}
          />
        </div>
        {!!props.error && (
          <ErrorMessage
            aria-live="assertive"
            cssClasses={cssClasses}
            data-testid={`${props['data-testid']}-error-message`}
            {...errorMessage}
            id={checkBoxErrorId}
            inputId={checkBoxId}
            show={props.error && !props.disabled}
          />
        )}
      </div>
    );
  },
);
