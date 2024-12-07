import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { IText } from '../../text/types/text';
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

export type StepperNumberScreenReaderTextType = Pick<IText<string>, 'component' | 'dataTestId'> & {
  content?: string;
};

export interface IStepperNumberStandAlone {
  styles?: StepperNumberStateStylesType;
  orientation: StepperNumberOrientationType;
  horizontalOrientationWidth?: string;
  completedStepIcon?: IElementOrIcon;
  steps?: string[];
  stepMaxTruncatedLines?: number;
  currentStep?: number;
  ['aria-label']?: string;
  /**
   * @deprecated use screenReaderTitle and screenReaderCompletedStep instead
   */
  screenReaderTextBuilder?: StepperNumberprefixSuffixType;
  screenReaderTitle?: StepperNumberScreenReaderTextType;
  screenReaderCompletedStep?: StepperNumberScreenReaderTextType;
  dataTestId?: string;
}

export interface IStepperNumber<V = undefined extends string ? unknown : string>
  extends Omit<IStepperNumberStandAlone, 'styles' | 'orientation'>,
    Omit<CustomTokenTypes<StepperNumberDimensionStylesType>, 'cts' | 'extraCt'> {
  variant: V;
  orientation?: StepperNumberOrientationType;
}
