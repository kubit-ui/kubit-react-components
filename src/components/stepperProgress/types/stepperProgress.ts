//types
import { CustomTokenTypes } from '@/types';

import { StepperProgressCommonProps } from './stepperProgressTheme';

export interface IStepperProgressStyled {
  styles: StepperProgressCommonProps;
}
export interface IStepperProgressStandAlone extends IStepperProgressStyled {
  dataTestId?: string;
  id?: string;
  ariaLabel?: string;
  initialStep: number;
  maxSteps: number;
  prefixAriaLabel?: { step: string; of: string; completed?: 'completed' };
  currentStep: number;
}

export interface IStepperProgress<V = undefined extends string ? unknown : string>
  extends Omit<IStepperProgressStandAlone, 'styles' | 'initialStep'>,
    Omit<CustomTokenTypes<StepperProgressCommonProps>, 'cts' | 'extraCt'> {
  variant: V;
  initialStep?: number;
}
