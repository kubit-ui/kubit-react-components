import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';
import { renderProvider } from 'tests/renderProvider/renderProvider.utility';

// fixture
import { StepperNumberSteps, ariaSteps } from '../fixture';
// helpers
import { buildScreenReaderText } from '../helpers';
import { IStepperNumber, StepperNumber } from '../index';
import { StepperNumberOrientationType } from '../types/orientation';

const mockProps: IStepperNumber = {
  variant: 'DEFAULT',
  horizontalOrientationWidth: '5.75rem',
  completedStepIcon: { icon: 'UNICORN' },
  steps: StepperNumberSteps,
  ['aria-label']: 'Onboarding steps',
  screenReaderTextBuilder: ariaSteps,
  dataTestId: 'stepper',
};

const mockControlledVerticalProps = {
  orientation: StepperNumberOrientationType.VERTICAL,
};

describe('StepperNumber component', () => {
  it('Should display the right number of element', async () => {
    const { container, getByTestId } = renderProvider(
      <StepperNumber {...mockProps} currentStep={0} />
    );

    const steps = getByTestId(`${mockProps.dataTestId}StepsContainer`);

    expect(steps.childElementCount).toBe(StepperNumberSteps.length);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should have the right aria-label into section tag', () => {
    renderProvider(<StepperNumber {...mockProps} />);

    const section = screen.getByTestId(`${mockProps.dataTestId}StepsSection`);
    expect(section.getAttribute('aria-label')).toBe(mockProps['aria-label']);
  });

  it('Should have the right aria-label into li tag', () => {
    const currentStep = 0;
    renderProvider(
      <StepperNumber {...mockProps} currentStep={currentStep} {...mockControlledVerticalProps} />
    );

    const step = screen.getByTestId(`${mockProps.dataTestId}ScreenReaderText${currentStep}`);
    const rightAriaLabel = buildScreenReaderText(
      0,
      currentStep,
      mockProps.steps?.length as number,
      mockProps.screenReaderTextBuilder,
      mockProps.steps?.[0] as string,
      true
    );
    expect(step.textContent).toBe(rightAriaLabel);
  });

  it('Should not break the app when the current step is less than 0', () => {
    renderProvider(<StepperNumber {...mockProps} currentStep={-1} />);

    const stepperSection = screen.getByTestId(`${mockProps.dataTestId}StepsSection`);
    expect(stepperSection).toBeInTheDocument();
  });

  it('Should not break the app when the current step is greater than steps length', () => {
    renderProvider(<StepperNumber {...mockProps} currentStep={StepperNumberSteps.length + 1} />);

    const stepperSection = screen.getByTestId(`${mockProps.dataTestId}StepsSection`);
    expect(stepperSection).toBeInTheDocument();
  });

  it('Should render the right elements number in horizontal dimension', () => {
    renderProvider(<StepperNumber {...mockProps} />);

    const container = screen.getByTestId(mockProps.dataTestId + 'StepsContainer');
    expect(container).toBeInTheDocument();
    expect(container.childElementCount).toBe(StepperNumberSteps.length);
  });

  it('Should render the right elements number in vertical dimension', () => {
    renderProvider(<StepperNumber {...mockProps} {...mockControlledVerticalProps} />);

    const container = screen.getByTestId(mockProps.dataTestId + 'StepsContainer');
    expect(container).toBeInTheDocument();
    expect(container.childElementCount).toBe(StepperNumberSteps.length);
  });

  it('Should have the right label when the dimension is vertical', () => {
    const currentStep = 1;
    const dataTestId = 'stepperVerticalStep';
    renderProvider(
      <StepperNumber
        {...mockProps}
        {...mockControlledVerticalProps}
        currentStep={currentStep}
        dataTestId={dataTestId}
      />
    );

    const selected = screen.getByTestId(dataTestId + 'VerticalStepText' + currentStep);
    expect(selected.textContent).toBe(StepperNumberSteps[currentStep]);
  });

  it('Prefix is not mandatory. When no prefix, it only shows the step name in screenRender section', () => {
    renderProvider(
      <StepperNumber
        {...mockProps}
        {...mockControlledVerticalProps}
        screenReaderTextBuilder={undefined}
      />
    );

    const firstStep = screen.getAllByText(StepperNumberSteps[0]);
    expect(firstStep.length).not.toBe(0);
  });
});
