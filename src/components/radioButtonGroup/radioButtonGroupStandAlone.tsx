//vendors
import * as React from 'react';

import { ScreenReaderOnly } from '@/components/screenReaderOnly';
import { Text, TextComponentType } from '@/components/text';
import { useId } from '@/hooks';

import { InfoIconWithTooltipStandAlone } from './components';
import { RadioButton } from './components/radioButton/radioButton';
// styles
import { RadioButtonGroupStyled } from './radioButtonGroup.styled';
import { IRadioButtonGroupStandAlone, RadioButtonGroupStateType } from './types';

const RadioButtonGroupStandAloneComponent = (
  {
    dataTestId = 'radioButtonGroup',
    requiredSymbol = '*',
    state = RadioButtonGroupStateType.DEFAULT,
    legendComponent = TextComponentType.LEGEND,
    ...props
  }: IRadioButtonGroupStandAlone,
  ref: React.ForwardedRef<HTMLFieldSetElement> | undefined | null
): JSX.Element => {
  const uniqueId = useId('radiogroup');
  const screenReaderId = `${uniqueId}ScreenReader`;

  return (
    <RadioButtonGroupStyled
      ref={ref}
      aria-errormessage={props.errorMessageId}
      data-testid={`${dataTestId}RadioGroup`}
      disabled={state === RadioButtonGroupStateType.DISABLED || props.disabled}
      name={props.name}
      styles={props.styles}
    >
      {props.legend && (
        <>
          <Text component={legendComponent} customTypography={props.styles?.[state]?.title}>
            {props.legend}
            {props.required && (
              <>
                {requiredSymbol}
                <ScreenReaderOnly>{props.requiredScreenReaderText}</ScreenReaderOnly>
              </>
            )}
          </Text>
          <InfoIconWithTooltipStandAlone
            dataTestId={`${dataTestId}InfoIcon`}
            infoIcon={props.infoIcon}
            styles={props.styles}
            tooltip={props.tooltip}
          />
        </>
      )}
      {props.options.map((o, index) => (
        <RadioButton
          key={o.value}
          checked={props.selectedOption?.value === o.value}
          dataTestId={`${dataTestId}RadioButton${index}`}
          disabled={o.disabled}
          error={o.error}
          errorAriaLiveType={o.errorAriaLiveType}
          errorIcon={o.errorIcon}
          errorMessage={o.errorMessage}
          label={{ content: o.label }}
          name={props.name}
          screenReaderId={o.screenReader ? screenReaderId : undefined}
          state={o.state}
          styles={props.styles}
          subTitle={{ content: o.description }}
          value={o.value}
          variant={props.variant}
          onBlur={props.onBlur}
          onChange={props.onChange}
        />
      ))}
      <ScreenReaderOnly dataTestId={`${dataTestId}ScreenReader`} id={screenReaderId}>
        {props.screenReaderText}
      </ScreenReaderOnly>
    </RadioButtonGroupStyled>
  );
};

export const RadioButtonGroupStandAlone = React.forwardRef(RadioButtonGroupStandAloneComponent);
