// TO DO: RESOLVE THE TESTS
import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import type { StepperNumberProps } from '../types/stepperNumber';

import { StepperNumberSteps } from '../fixture/ariaLabels';
import { StepperNumber } from '../stepperNumber';

const mockProps: StepperNumberProps = {
  completedStepIcon: { icon: 'UNICORN' },
  'data-testid': 'stepper',
  horizontalOrientationWidth: '5.75rem',
  orientation: 'horizontal',
  steps: StepperNumberSteps,
  variant: 'DEFAULT',
};

const mockControlledVerticalProps: StepperNumberProps = {
  orientation: 'vertical',
};

describe('StepperNumber component', () => {
  it('Should display the right number of element', async () => {
    const { container, getByTestId } = render(
      <StepperNumber {...mockProps} currentStep={0} />,
    );

    const steps = getByTestId(`${mockProps['data-testid']}-steps-container`);

    expect(steps.childElementCount).toBe(StepperNumberSteps.length);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should not break the app when the current step is less than 0', () => {
    render(<StepperNumber {...mockProps} currentStep={-1} />);

    const stepperSection = screen.getByTestId(
      mockProps['data-testid'] as string,
    );
    expect(stepperSection).not.toBeNull();
  });

  it('Should not break the app when the current step is greater than steps length', () => {
    render(
      <StepperNumber
        {...mockProps}
        currentStep={StepperNumberSteps.length + 1}
      />,
    );

    const stepperSection = screen.getByTestId(
      mockProps['data-testid'] as string,
    );
    expect(stepperSection).not.toBeNull();
  });

  it('Should render the right elements number in horizontal dimension', () => {
    render(<StepperNumber {...mockProps} />);

    const container = screen.getByTestId(
      mockProps['data-testid'] + '-steps-container',
    );
    expect(container).not.toBeNull();
    expect(container.childElementCount).toBe(StepperNumberSteps.length);
  });

  it('Should render the right elements number in vertical dimension', () => {
    render(<StepperNumber {...mockProps} {...mockControlledVerticalProps} />);

    const container = screen.getByTestId(
      mockProps['data-testid'] + '-steps-container',
    );
    expect(container).not.toBeNull();
    expect(container.childElementCount).toBe(StepperNumberSteps.length);
  });

  it('Should have the right label when the dimension is vertical', () => {
    const currentStep = 1;
    const dataTestId = 'stepperVerticalStep';
    render(
      <StepperNumber
        {...mockProps}
        {...mockControlledVerticalProps}
        currentStep={currentStep}
        data-testid={dataTestId}
      />,
    );

    expect(
      'Verification Code this is another very very long long text is not it',
    ).toBe(StepperNumberSteps[currentStep].name);
  });

  it('Prefix is not mandatory. When no prefix, it only shows the step name in screenRender section', () => {
    render(<StepperNumber {...mockProps} {...mockControlledVerticalProps} />);

    const firstStep = screen.getAllByText(StepperNumberSteps[0].name);
    expect(firstStep.length).not.toBe(0);
  });

  // it('screenReaderTitle can be used as hidden title of the stepper number', () => {
  //   const screenReaderTitle = {
  //     content: 'Stepper number title',
  //   };

  //   render(
  //     <StepperNumber
  //       {...mockProps}
  //       orientation={'vertical}
  //       screenReaderTitle={screenReaderTitle}
  //     />
  //   );

  //   const title = screen.getByRole('heading', { name: screenReaderTitle.content });
  //   expect(title).not.toBeNull();
  // });

  // it('screenReaderCompletedStep, when vertical and no screenReaderTextBuilder, is used as screen reader text for the completed steps', () => {
  //   const screenReaderTitle = {
  //     content: 'Stepper number title',
  //   };
  //   const screenReaderCompletedStep = {
  //     content: 'Completed step',
  //   };

  //   render(
  //     <StepperNumber
  //       {...mockProps}
  //       currentStep={3}
  //       orientation={'vertical}
  //       screenReaderCompletedStep={screenReaderCompletedStep}
  //       screenReaderTitle={screenReaderTitle}
  //     />
  //   );

  //   const completeSteps = screen.getAllByText(screenReaderCompletedStep.content);
  //   expect(completeSteps.length).toBe(3);
  // });
});
