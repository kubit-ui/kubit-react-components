export const currentPercentage = (
  currentStep: number,
  initialStep: number,
  maxSteps: number
): number => {
  const scaledValue = (currentStep - initialStep) / (maxSteps - initialStep);
  const percentage = 100 * scaledValue;
  return Math.round(percentage);
};
