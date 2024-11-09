import { DeviceBreakpointsType } from '../breakpoints/breakpoints';
import { AnimationType } from './animation';
import { BackgroundTypes } from './background';
import { BorderTypes } from './border';
import { DisplayTypes } from './display';
import { MarginTypes } from './margin';
import { MeasuresTypes } from './measures';
import { PaddingTypes } from './padding';
import { PointerTypes } from './pointer';
import { PositionTypes } from './position';
import { BoxShadowTypes } from './shadow';
import { TypographyTypes } from './typography';
import { WordWrapTypes } from './wordWrap';

type BreakPointsStyleType = {
  [key in DeviceBreakpointsType]?: GenericStyleType & PseudoElementsType;
};

type GenericStyleType = PaddingTypes &
  BorderTypes &
  BoxShadowTypes &
  BackgroundTypes &
  MeasuresTypes &
  DisplayTypes &
  MarginTypes &
  PositionTypes &
  PointerTypes &
  AnimationType &
  WordWrapTypes;

export type AfterOrBeforeType = { content?: string } & GenericStyleType;

type PseudoElementsType = {
  after?: AfterOrBeforeType;
  before?: AfterOrBeforeType;
  backdrop?: GenericStyleType;
  placeholder?: TypographyTypes;
  placeholderShown?: TypographyTypes;
  notPlaceholderShown?: TypographyTypes;
  disabled?: CommonStyleType;
  filled?: CommonStyleType;
  focus?: CommonStyleType;
  focusVisible?: CommonStyleType;
  ariaInvalid?: CommonStyleType;
  dataTruncate?: CommonStyleType;
  dataFilled?: CommonStyleType;
  passwordRevealButton?: CommonStyleType;
  webkitInnerSpinButton?: CommonStyleType;
  webkitOuterSpinButton?: CommonStyleType;
};

export type CommonStyleType = GenericStyleType & BreakPointsStyleType & PseudoElementsType;
