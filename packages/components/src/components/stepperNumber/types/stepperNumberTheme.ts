import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

import type { StepperNumberOrientationType } from './orientation';

export interface StepperNumberStyleProps extends CssLibPropsType {
  _stepContainer?: CssLibPropsType;
  _stepCircle?: CssLibPropsType;
  _stepCircleContainer?: CssLibPropsType;
  _stepIndex?: CssLibPropsType;
  _iconSelected?: CssLibPropsType;
  _stepNameContainer?: CssLibPropsType;
  _stepName?: CssLibPropsType;
  _stepBar?: CssLibPropsType;
}

export type StepperNumberOrientationStyles<
  Orientation extends StepperNumberOrientationType,
> = StepperNumberStyleProps & {
  [key in Orientation]?: StepperNumberStyleProps;
};

export type StepperNumberVariantStyles<
  Variant extends string | number | symbol,
> = StepperNumberStyleProps & {
  [key in Variant]?: StepperNumberStyleProps;
};

export type StepperNumberStyles<
  Variant extends string | number | symbol,
  Orientation extends StepperNumberOrientationType,
> = StepperNumberStyleProps &
  StepperNumberVariantStyles<Variant> &
  StepperNumberOrientationStyles<Orientation>;
