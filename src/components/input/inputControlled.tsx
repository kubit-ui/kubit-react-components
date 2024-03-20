// vendors
import * as React from 'react';

import { useId } from '@/hooks/useId/useId';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';
import { AriaLiveOptionType } from '@/types';
import { mergeObjects } from '@/utils';

import { InputStandAlone } from './inputStandAlone';
import {
  AUTOCOMPLETE_TYPE,
  IInputControlled,
  IInputStandAlone,
  InputIconPosition,
  InputStylesProps,
} from './types';

const INPUT_STYLES = 'INPUT_STYLES';

const InputControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      iconPosition = InputIconPosition.RIGHT,
      errorAriaLiveType = AriaLiveOptionType.POLITE,
      extraAriaLabelledBy = '',
      autocomplete = AUTOCOMPLETE_TYPE.ON,
      disabledCopyAndPaste = false,
      ctv,
      ...props
    }: IInputControlled<V>,
    ref: React.ForwardedRef<HTMLInputElement | undefined | null>
  ): JSX.Element => {
    let styles = useStyles<InputStylesProps, V>(INPUT_STYLES, props.variant, ctv);
    // TODO improvement this merge object in THEME
    styles = mergeObjects({ ...styles } ?? {}, props.overrideStyles ?? {});

    const uniqueId = useId('input');
    const inputId = props.id ?? uniqueId;

    return (
      <InputStandAlone
        {...props}
        ref={ref}
        autocomplete={autocomplete}
        disabledCopyAndPaste={disabledCopyAndPaste}
        errorAriaLiveType={errorAriaLiveType}
        extraAriaLabelledBy={extraAriaLabelledBy}
        iconPosition={iconPosition}
        inputId={inputId}
        styles={styles}
      />
    );
  }
);
InputControlledComponent.displayName = 'InputControlledComponent';

const InputBoundary = <V extends string | unknown>(
  props: IInputControlled<V>,
  ref: React.ForwardedRef<HTMLInputElement | undefined | null>
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <InputStandAlone {...(props as unknown as IInputStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <InputControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const InputControlled = React.forwardRef(InputBoundary) as <V extends string | unknown>(
  props: IInputControlled<V> & {
    ref?: React.ForwardedRef<HTMLInputElement | undefined | null>;
  }
) => JSX.Element;

export { InputControlled };
