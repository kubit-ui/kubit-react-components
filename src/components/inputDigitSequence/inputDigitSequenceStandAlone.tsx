import * as React from 'react';

import { Button, IconPositionType } from '@/components/button';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text, TextComponentType } from '@/components/text';
import { AriaLiveOptionType } from '@/types';

import { InputDigit, InputDigitSequenceHelpText, InputDigitSequenceTooltip } from './components';
import {
  AnimationInputsContainer,
  ButtonContainer,
  IconAndErrorTextContainer,
  InputDigitsContainer,
  InputDigitsContainerAnimated,
  ParentContainer,
  TitleTooltipContainer,
} from './inputDigitSequence.styled';
import { IInputDigitSequenceStandAlone } from './types';

const InputDigitSequenceStandAloneComponent = (
  {
    error = false,
    inputMode = 'numeric',
    dataTestId = 'inputDigitSequence',
    ...props
  }: IInputDigitSequenceStandAlone,
  ref: React.ForwardedRef<HTMLDivElement>
): JSX.Element => {
  const stateStyles = props.styles?.[props.state];
  return (
    <ParentContainer ref={ref} data-testid={dataTestId} styles={stateStyles}>
      <TitleTooltipContainer styles={stateStyles}>
        <Text
          component={TextComponentType.PARAGRAPH}
          customTypography={stateStyles?.title}
          {...props.title}
        >
          {props.title?.content}
        </Text>
        <InputDigitSequenceTooltip
          stateStyles={stateStyles}
          tooltip={props.tooltip}
          tooltipIcon={props.tooltipIcon}
        />
      </TitleTooltipContainer>
      <AnimationInputsContainer styles={stateStyles}>
        {props.animated && !props.labelAnimationDone && (
          <InputDigitsContainerAnimated
            animated={props.animated}
            aria-hidden={true}
            boxesAnimationDone={props.boxesAnimationDone}
            data-id="input-container-animated"
            styles={stateStyles}
          >
            {props.inputDigits.map((_, index) => {
              return (
                <InputDigit
                  key={index}
                  animated={props.animated}
                  ariaHidden={true}
                  boxesAnimationDone={props.boxesAnimationDone}
                  disabled={true}
                  label={index + 1}
                  state={props.state}
                  styles={props.styles}
                  tabIndex={-1}
                />
              );
            })}
          </InputDigitsContainerAnimated>
        )}
        <InputDigitsContainer
          animated={props.animated}
          boxesAnimationDone={props.boxesAnimationDone}
          data-id="input-container"
          labelAnimationDone={props.labelAnimationDone}
          styles={stateStyles}
        >
          {props.inputDigits.map((inputDigit, index) => {
            return (
              <InputDigit
                key={index}
                animated={props.animated}
                boxesAnimationDone={props.boxesAnimationDone}
                disabled={props.disabled}
                error={error}
                inputDigit={inputDigit}
                inputId={`${props.digitId}-${index}`}
                inputMode={inputMode}
                label={index + 1}
                showPassword={props.showPassword || props.passwordIndex === index}
                state={props.state}
                styles={props.styles}
                onChange={props.onInputChange(index)}
              />
            );
          })}
        </InputDigitsContainer>
      </AnimationInputsContainer>
      <IconAndErrorTextContainer aria-live={AriaLiveOptionType.POLITE} styles={stateStyles}>
        {error && !!props.errorText && (
          <>
            <ElementOrIcon customIconStyles={stateStyles?.errorIcon} {...props.errorIcon} />
            <Text
              component={TextComponentType.PARAGRAPH}
              customTypography={stateStyles?.errorText}
              {...props.errorText}
            >
              {props.errorText.content}
            </Text>
          </>
        )}
      </IconAndErrorTextContainer>
      <InputDigitSequenceHelpText
        dataTestId={`${dataTestId}HelpText`}
        helpText={props.helpText}
        styles={stateStyles}
      />
      {props.actionButton?.content &&
        (stateStyles?.actionButtonSize || props.actionButton?.size) && (
          <ButtonContainer styles={stateStyles}>
            <Button
              disabled={props.disabled}
              iconPosition={IconPositionType.LEFT}
              size={stateStyles?.actionButtonSize}
              {...props.actionButton}
              onClick={props.onActionButtonClick}
            >
              {props.actionButton?.content}
            </Button>
          </ButtonContainer>
        )}
    </ParentContainer>
  );
};

export const InputDigitSequenceStandAlone = React.forwardRef(InputDigitSequenceStandAloneComponent);
