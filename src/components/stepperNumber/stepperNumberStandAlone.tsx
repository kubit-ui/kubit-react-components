import * as React from 'react';

import { ScreenReaderOnly } from '@/components/screenReaderOnly';
import { Text, TextComponentType } from '@/components/text';

import { ElementOrIcon } from '../elementOrIcon';
import { buildAriaCurrent, buildScreenReaderText, mapToStepState } from './helpers';
import {
  BuilStepContainerStyled,
  StepBarStyled,
  StepCircleBarWrapperStyled,
  StepCircleStyled,
  StepContainerStyled,
  StepperNumberContainerStyled,
  StepperNumberContainerVerticalStep,
  StepsContainerStyled,
} from './stepperNumber.styled';
import {
  IStepperNumberStandAlone,
  StepperNumberOrientationType,
  StepperNumberStateType,
} from './types';

const defaultStep = 0;

const StepperNumberStandAloneComponent = (
  { currentStep = defaultStep, ...props }: IStepperNumberStandAlone,
  ref: React.ForwardedRef<HTMLElement> | undefined | null
): JSX.Element => {
  const steps = mapToStepState(props.steps, currentStep);
  const isVertical = props.orientation === StepperNumberOrientationType.VERTICAL;

  return (
    <StepperNumberContainerStyled
      ref={ref}
      aria-hidden={!isVertical}
      aria-label={props['aria-label']}
      data-testid={`${props.dataTestId}StepsSection`}
    >
      <StepsContainerStyled data-testid={`${props.dataTestId}StepsContainer`} styles={props.styles}>
        {steps.map((step, index) => {
          const isLastStep = index === steps.length - 1;
          return (
            <BuilStepContainerStyled
              key={'stepContainer' + index}
              aria-current={buildAriaCurrent(currentStep, index, props.orientation)}
              data-testid={`${props.dataTestId}Li${index}`}
              horizontalOrientationWidth={isLastStep ? 'auto' : props.horizontalOrientationWidth}
              orientation={props.orientation}
            >
              <ScreenReaderOnly dataTestId={`${props.dataTestId}ScreenReaderText${index}`}>
                {buildScreenReaderText(
                  index,
                  currentStep,
                  steps.length,
                  props.screenReaderTextBuilder,
                  step.name,
                  isVertical
                )}
              </ScreenReaderOnly>
              <StepContainerStyled aria-hidden={true} state={step.state} styles={props.styles}>
                <StepCircleBarWrapperStyled orientation={props.orientation}>
                  <StepCircleStyled state={step.state} styles={props.styles}>
                    {step.state === StepperNumberStateType.COMPLETED ? (
                      <ElementOrIcon
                        customIconStyles={props.styles?.[step.state]?.iconSelected}
                        {...props.completedStepIcon}
                      />
                    ) : (
                      <Text
                        component={TextComponentType.SPAN}
                        customTypography={props.styles?.[step.state]?.stepIndex}
                      >
                        {index + 1}
                      </Text>
                    )}
                  </StepCircleStyled>
                  {!isLastStep && (
                    <StepBarStyled state={steps[index + 1].state} styles={props.styles} />
                  )}
                </StepCircleBarWrapperStyled>
                {isVertical && (
                  <StepperNumberContainerVerticalStep
                    aria-hidden={true}
                    isLastStep={isLastStep}
                    state={step.state}
                    styles={props.styles}
                  >
                    <Text
                      component={TextComponentType.SPAN}
                      customTypography={props.styles?.[step.state]?.stepName}
                      dataTestId={`${props.dataTestId}VerticalStepText${index}`}
                    >
                      {step.name}
                    </Text>
                  </StepperNumberContainerVerticalStep>
                )}
              </StepContainerStyled>
            </BuilStepContainerStyled>
          );
        })}
      </StepsContainerStyled>
    </StepperNumberContainerStyled>
  );
};

export const StepperNumberStandAlone = React.forwardRef(StepperNumberStandAloneComponent);
