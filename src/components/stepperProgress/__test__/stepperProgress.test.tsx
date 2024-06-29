import { screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';
import { renderProvider } from 'tests/renderProvider/renderProvider.utility';

import { StepperProgress } from '../index';

const mockProps = {
  dataTestId: 'testId',
  ariaLabel: 'Content loading...',
  maxSteps: 10,
  currentStep: 3,
  variant: 'DEFAULT',
  prefixAriaLabel: {
    step: 'step',
    of: 'of',
    completed: 'completed',
    steps: 'steps',
  },
};

const mockPropsDefault = {
  dataTestId: 'testId',
  ariaLabel: 'Content loading...',
  maxSteps: 10,
  currentStep: 3,
  variant: 'DEFAULT',
};

describe('StepperProgress component', () => {
  it('Should be display the component correctly', async () => {
    const { container } = renderProvider(<StepperProgress {...mockProps} />);

    const stepperProgress = screen.getByTestId(mockProps.dataTestId);
    expect(stepperProgress).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
  it('Should have a helper text', () => {
    renderProvider(<StepperProgress {...mockProps} />);

    const helpTextContent = `${mockProps.currentStep} steps of ${mockProps.maxSteps} completed`;
    const helpText = screen.getByTestId(mockProps.dataTestId + 'HelpText');
    expect(helpText.textContent).toBe(helpTextContent);
  });
  it('Should have a defaulta configuration', () => {
    renderProvider(<StepperProgress {...mockPropsDefault} />);

    const helpTextContent = `${mockProps.currentStep} steps of ${mockProps.maxSteps} completed`;
    const helpText = screen.getByTestId(mockProps.dataTestId + 'HelpText');
    expect(helpText.textContent).toBe(helpTextContent);
  });
});
