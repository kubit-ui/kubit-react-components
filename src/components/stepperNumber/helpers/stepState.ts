import { StepStateType, StepperNumberStateType } from '../types';

export const mapToStepState = (
  steps: string[] | undefined,
  currentStep: number
): StepStateType[] => {
  if (!steps?.length) {
    return [];
  }
  const currentStepInBounds = Math.max(0, Math.min(currentStep, steps.length));
  const res = steps?.reduce<StepStateType[]>((prev, current, index) => {
    const isCompleted =
      index < currentStepInBounds
        ? StepperNumberStateType.COMPLETED
        : StepperNumberStateType.INACTIVE;
    const stateStep = index === currentStepInBounds ? StepperNumberStateType.ACTIVE : isCompleted;
    return [
      ...prev,
      {
        name: current,
        state: stateStep,
      },
    ];
  }, []);
  return res;
};
