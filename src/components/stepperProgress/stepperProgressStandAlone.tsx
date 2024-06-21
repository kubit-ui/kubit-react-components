import * as React from 'react';

import { Text, TextComponentType } from '@/components/text';
import { useId } from '@/hooks';
import { AriaLiveOptionType } from '@/types';

// helpers
import { currentPercentage } from './helpers/currentPercentage';
// styles
import {
  StepperProgressContainerStyled,
  StepperProgressHelpText,
  StepperProgressStyled,
} from './stepperProgress.styled';
import { IStepperProgressStandAlone } from './types/stepperProgress';

const maxProgress = 100;

const StepperProgressStandAloneComponent = (
  {
    dataTestId,
    id,
    styles,
    initialStep,
    maxSteps,
    currentStep,
    prefixAriaLabel = {
      step: 'step',
      of: 'of',
      completed: 'completed',
    },
  }: IStepperProgressStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const _currentStep = Math.min(Math.max(currentStep, initialStep), maxSteps);
  const currentProgress = currentPercentage(_currentStep, initialStep, maxSteps);
  const uniqueId = useId('stepperProgress');
  const stepperProgressId = id ?? uniqueId;

  prefixAriaLabel.step = _currentStep === 1 ? 'step' : 'steps';

  return (
    <StepperProgressContainerStyled ref={ref} styles={styles}>
      <StepperProgressStyled
        aria-hidden
        data-testid={dataTestId}
        id={stepperProgressId}
        max={maxProgress}
        styles={styles}
        value={currentProgress}
      />
      <StepperProgressHelpText
        aria-describedby={stepperProgressId}
        aria-live={AriaLiveOptionType.POLITE}
        data-testid={dataTestId + 'HelpText'}
        styles={styles}
      >
        <Text component={TextComponentType.SPAN} customTypography={styles.currentStep}>
          {`${_currentStep} ${prefixAriaLabel?.step} `}
          <Text component={TextComponentType.SPAN} customTypography={styles.maxStep}>
            {`${prefixAriaLabel?.of} ${maxSteps} ${prefixAriaLabel?.completed}`}
          </Text>
        </Text>
      </StepperProgressHelpText>
    </StepperProgressContainerStyled>
  );
};

export const StepperProgressStandAlone = React.forwardRef(StepperProgressStandAloneComponent);
