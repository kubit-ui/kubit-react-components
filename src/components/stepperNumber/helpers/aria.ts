import { StepperNumberOrientationType } from '../types';

export const buildAriaCurrent = (
  currentStep: number,
  index: number,
  dimension: StepperNumberOrientationType | undefined
): 'step' | undefined => {
  return currentStep === index && dimension === StepperNumberOrientationType.VERTICAL
    ? 'step'
    : undefined;
};
