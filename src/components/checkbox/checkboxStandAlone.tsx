import { forwardRef } from 'react';

import { RenderIf } from '@/components/renderIf/renderIf';
import { useId } from '@/lib/hooks/useId/useId';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { CheckboxStandAloneProps } from './types/checkbox';

import { CheckboxBaseControlled } from '../checkboxBase/checkboxBaseControlled';
import { ErrorMessage } from './components/errorMessage';
import { Label } from './components/label';
import { buildAriaDescribedBy } from './utils/aria.utils';

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

    const uniqueId = useId('checkbox');
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
          <RenderIf condition={!!checkboxBaseVariant}>
            <CheckboxBaseControlled
              {...props}
              aria-describedby={ariaDescribedBy}
              aria-hidden={props['aria-hidden']}
              aria-label={props['aria-label']}
              aria-labelledby={props['aria-labelledby']}
              id={checkBoxId}
              variant={checkboxBaseVariant}
            />
          </RenderIf>
          <screen-reader-only id={screenReaderId}>
            {screenReaderText}
          </screen-reader-only>
          <Label
            {...label}
            cssClasses={cssClasses}
            id={checkBoxLabelId}
            inputId={checkBoxId}
          />
        </div>
        <RenderIf condition={!!props.error}>
          <ErrorMessage
            aria-live="assertive"
            cssClasses={cssClasses}
            data-testid={`${props['data-testid']}-error-message`}
            {...errorMessage}
            id={checkBoxErrorId}
            inputId={checkBoxId}
            show={props.error && !props.disabled}
          />
        </RenderIf>
      </div>
    );
  },
);
