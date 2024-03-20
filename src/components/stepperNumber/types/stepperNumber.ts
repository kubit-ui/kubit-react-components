import { IElementOrIcon } from '@/components/elementOrIcon';
import { CustomTokenTypes } from '@/types';

import { StepperNumberOrientationType } from './orientation';
import { StepperNumberprefixSuffixType } from './prefixSuffix';
import { StepperNumberStateType } from './state';
import {
  StepperNumberDimensionStylesType,
  StepperNumberStateStylesType,
} from './stepperNumberTheme';

export interface StepStateType {
  name: string;
  state: StepperNumberStateType;
}

export interface IStepperNumberStandAlone {
  styles?: StepperNumberStateStylesType;
  orientation: StepperNumberOrientationType;
  horizontalOrientationWidth?: string;
  completedStepIcon?: IElementOrIcon;
  steps?: string[];
  currentStep?: number;
  ['aria-label']?: string;
  screenReaderTextBuilder?: StepperNumberprefixSuffixType;
  dataTestId?: string;
}

export interface IStepperNumber<V = undefined extends string ? unknown : string>
  extends Omit<IStepperNumberStandAlone, 'styles' | 'orientation'>,
    Omit<CustomTokenTypes<StepperNumberDimensionStylesType>, 'cts' | 'extraCt'> {
  variant: V;
  orientation?: StepperNumberOrientationType;
}
