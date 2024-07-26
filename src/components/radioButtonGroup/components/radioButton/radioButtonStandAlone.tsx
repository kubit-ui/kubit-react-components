import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { LabelStandAlone as Label } from '@/components/label/labelStandAlone';
import { Text } from '@/components/text';
import { useId } from '@/hooks';

import { buildAriaLabelledBy } from '../../utils';
import {
  ErrorIconWrapperStyled,
  RadioButtonContainerInput,
  RadioButtonContentStyled,
  RadioButtonErrorStyled,
  RadioButtonInputStyled,
  RadioButtonLabelStyled,
  RadioButtonStyled,
} from './radioButton.styled';
import { IRadioButtonStandAlone } from './types/radioButton';

const CURSOR_POINTER = 'pointer';
const CURSOR_DEFAULT = 'default';

export const RadioButtonStandAlone = (props: IRadioButtonStandAlone): JSX.Element => {
  let inputId = useId('RadioButton');
  inputId = props.id ?? inputId;
  const descriptionId = props.subTitle?.content && `${inputId}__description`;
  const errorMessageId = props.errorMessage && `${inputId}__error`;

  const getLabelFontWeight = () =>
    props.subTitle?.content
      ? props.styles?.[props.state]?.specialLabel?.font_weight
      : props.styles?.[props.state]?.label?.font_weight;

  return (
    <RadioButtonStyled
      hasLabel={!!props.label}
      lastChild={props.lastChild}
      state={props.state}
      styles={props.styles}
    >
      <RadioButtonContainerInput styles={props.styles}>
        <RadioButtonInputStyled
          aria-describedby={
            props.screenReaderId &&
            buildAriaLabelledBy({
              descriptionId,
              screenReaderId: props.screenReaderId,
              errorMessage: props.errorMessage,
              errorMessageId,
              error: props.error,
            })
          }
          aria-hidden={props['aria-hidden']}
          aria-label={props['aria-label']}
          aria-labelledby={props['aria-labelledby']}
          checked={props.checked}
          data-testid={`${props.dataTestId}Input`}
          disabled={props.disabled}
          id={inputId}
          name={props.name}
          state={props.state}
          styles={props.styles}
          tabIndex={props.tabIndex}
          type="radio"
          value={props.value}
          onBlur={props.onBlur}
          onChange={props.onChange}
        />
      </RadioButtonContainerInput>
      {props.label?.content && (
        <RadioButtonLabelStyled>
          <Label
            color={props.styles?.[props.state]?.label?.color}
            cursor={props.disabled ? CURSOR_DEFAULT : CURSOR_POINTER}
            dataTestId={`${props.dataTestId}Label`}
            inputId={inputId}
            textVariant={props.styles?.[props.state]?.label?.font_variant}
            weight={getLabelFontWeight()}
            {...props.label}
          >
            {props.label.content}
          </Label>
        </RadioButtonLabelStyled>
      )}

      {props.subTitle?.content &&
        (typeof props.subTitle.content === 'string' ? (
          <Text
            customTypography={props.styles?.[props.state]?.sublabel}
            {...props.subTitle}
            id={descriptionId}
          >
            {props.subTitle.content}
          </Text>
        ) : (
          <RadioButtonContentStyled id={descriptionId}>
            {props.subTitle.content}
          </RadioButtonContentStyled>
        ))}
      {props.error && props.errorMessage && (
        <RadioButtonErrorStyled
          aria-live={props.errorAriaLiveType}
          id={errorMessageId}
          styles={props.styles?.[props.state]}
        >
          <Text
            customTypography={props.styles?.[props.state]?.errorMessage}
            dataTestId={`${props.dataTestId}ErrorMessage`}
          >
            {props.errorIcon && (
              <ErrorIconWrapperStyled styles={props.styles?.[props.state]}>
                <ElementOrIcon
                  customIconStyles={props.styles?.[props.state]?.errorMessageIcon}
                  {...props.errorIcon}
                />
              </ErrorIconWrapperStyled>
            )}
            {props.errorMessage}
          </Text>
        </RadioButtonErrorStyled>
      )}
    </RadioButtonStyled>
  );
};
