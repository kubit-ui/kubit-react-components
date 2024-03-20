import { StepperNumberprefixSuffixType } from '../types';

const concatPrefixSuffix = (
  index: number,
  maxSteps: number,
  currentStep: number,
  currentLiAriaLabel: string,
  prefixSuffixAriaLabel: StepperNumberprefixSuffixType | undefined
) => {
  let ariaLabel;

  if (prefixSuffixAriaLabel?.prefix) {
    const subString1 = `${prefixSuffixAriaLabel.prefix?.step} ${index + 1}`;
    const subString2 = `${prefixSuffixAriaLabel.prefix?.of} ${maxSteps} ${currentLiAriaLabel}`;
    ariaLabel = `${subString1} ${subString2}`;
  } else {
    ariaLabel = currentLiAriaLabel;
  }

  if (index < currentStep && prefixSuffixAriaLabel?.suffix?.completed) {
    ariaLabel = ariaLabel.concat(' ', prefixSuffixAriaLabel.suffix?.completed);
  } else if (index === currentStep && prefixSuffixAriaLabel?.suffix?.current) {
    ariaLabel = ariaLabel.concat(' ', prefixSuffixAriaLabel.suffix?.current);
  }
  return ariaLabel;
};

export const buildScreenReaderText = (
  index: number,
  currentStep: number,
  maxSteps: number,
  prefixSuffixAriaLabel: StepperNumberprefixSuffixType | undefined,
  curentLiAriaLabel: string,
  isVertical: boolean
): string | undefined => {
  if (!isVertical) {
    return undefined;
  }
  return concatPrefixSuffix(index, maxSteps, currentStep, curentLiAriaLabel, prefixSuffixAriaLabel);
};
