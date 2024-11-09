// vendors
import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useId } from '@/hooks/useId/useId';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { AriaLiveOptionType } from '../../types/ariaLiveOption/ariaLiveOption';
import { mergeObjects } from '../../utils/mergeObjects/mergeObjects';
import { InputStandAlone } from './inputStandAlone';
import {
  AUTOCOMPLETE_TYPE,
  IInputControlled,
  IInputStandAlone,
  InputStylesProps,
} from './types/input';
import { InputIconPosition } from './types/inputTheme';

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
    let styles = useStyles<InputStylesProps, V>(STYLES_NAME.INPUT, props.variant, ctv);
    // TODO improvement this merge object in THEME
    styles = mergeObjects({ ...styles }, props.overrideStyles ?? {});

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
