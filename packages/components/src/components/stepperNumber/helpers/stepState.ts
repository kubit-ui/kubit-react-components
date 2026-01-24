import { STATES } from '@/lib/types/states/states';

import type { StepStateProps, Steps } from '../types/stepperNumber';

export const mapToStepState = (
  steps: Steps[] | undefined,
  currentStep: number,
): StepStateProps[] => {
  if (!steps?.length) {
    return [];
  }
  const currentStepInBounds = Math.max(0, Math.min(currentStep, steps.length));
  const res = steps?.reduce<StepStateProps[]>((prev, current, index) => {
    const isCompleted =
      index < currentStepInBounds ? STATES.COMPLETED : STATES.INACTIVE;
    const stateStep =
      index === currentStepInBounds ? STATES.ACTIVE : isCompleted;
    return [
      ...prev,
      {
        ['aria-label']: current['aria-label'],
        name: current.name,
        state: stateStep,
      },
    ];
  }, []);
  return res;
};
