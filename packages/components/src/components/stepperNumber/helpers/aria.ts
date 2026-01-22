import type { StepperNumberOrientationType } from '../types/orientation';

export const buildAriaCurrent = (
  currentStep: number,
  index: number,
  dimension: StepperNumberOrientationType | undefined,
): 'step' | undefined => {
  return currentStep === index && dimension === 'vertical' ? 'step' : undefined;
};
