import * as React from 'react';

import { ScreenReaderOnly } from '@/components/screenReaderOnly';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { useId } from '@/hooks';

import { ElementOrIcon } from '../elementOrIcon';
import { buildAriaCurrent, buildScreenReaderText, mapToStepState } from './helpers';
import {
  BuilStepContainerStyled,
  ScreenReaderCompletedStep,
  ScreenReaderTitle,
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
  const id = useId('stepperNumber');
  const screenReaderTitleId = `${id}ScreenReaderTitle`;
  const ariaLabelledBy = props.screenReaderTitle?.content ? screenReaderTitleId : undefined;
  const steps = mapToStepState(props.steps, currentStep);
  const isVertical = props.orientation === StepperNumberOrientationType.VERTICAL;

  const usingScreenReaderTextBuilder = Boolean(props.screenReaderTextBuilder);

  return (
    <StepperNumberContainerStyled
      ref={ref}
      aria-hidden={!isVertical}
      aria-label={props['aria-label']}
      aria-labelledby={ariaLabelledBy}
      data-testid={`${props.dataTestId}StepsSection`}
    >
      {props.screenReaderTitle?.content && (
        <ScreenReaderTitle
          as={props.screenReaderTitle.component}
          data-testid={props.screenReaderTitle.dataTestId ?? `${props.dataTestId}ScreenReaderTitle`}
          id={screenReaderTitleId}
        >
          {props.screenReaderTitle?.content}
        </ScreenReaderTitle>
      )}
      <StepsContainerStyled data-testid={`${props.dataTestId}StepsContainer`} styles={props.styles}>
        {steps.map((step, index) => {
          const isLastStep = index === steps.length - 1;
          return (
            <BuilStepContainerStyled
              key={'stepContainer' + index}
              $orientation={props.orientation}
              aria-current={buildAriaCurrent(currentStep, index, props.orientation)}
              data-testid={`${props.dataTestId}Li${index}`}
              horizontalOrientationWidth={isLastStep ? 'auto' : props.horizontalOrientationWidth}
            >
              {usingScreenReaderTextBuilder && (
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
              )}
              <StepContainerStyled
                aria-hidden={!isVertical || usingScreenReaderTextBuilder ? true : undefined}
                state={step.state}
                styles={props.styles}
              >
                <StepCircleBarWrapperStyled $orientation={props.orientation}>
                  <StepCircleStyled state={step.state} styles={props.styles}>
                    {step.state === StepperNumberStateType.COMPLETED ? (
                      <React.Fragment>
                        <ElementOrIcon
                          customIconStyles={props.styles?.[step.state]?.iconSelected}
                          {...props.completedStepIcon}
                        />
                        <ScreenReaderOnly>{index + 1}</ScreenReaderOnly>
                      </React.Fragment>
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
                    aria-hidden={usingScreenReaderTextBuilder ? true : undefined}
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
                    {!usingScreenReaderTextBuilder &&
                      step.state === StepperNumberStateType.COMPLETED &&
                      props.screenReaderCompletedStep?.content && (
                        <ScreenReaderCompletedStep
                          as={props.screenReaderCompletedStep.component}
                          data-testid={props.screenReaderCompletedStep.dataTestId}
                        >
                          &nbsp;{props.screenReaderCompletedStep.content}
                        </ScreenReaderCompletedStep>
                      )}
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
