import { SliderTooltipType } from '@/components/slider';
import { CustomTokenTypes } from '@/types';

import { ProgressBarSizeStylesType, ProgressBarVariantStylesType } from './progressBarTheme';

export interface IProgressBarStandAlone {
  styles: ProgressBarVariantStylesType;
  sizeStyles: ProgressBarSizeStylesType;
  barAriaLabel?: string;
  dataTestIdBar?: string;
  dataTestIdProgressBar?: string;
  progressCompleted: number;
  // Slider callbacks
  onChange?: (value: number) => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  tooltip?: SliderTooltipType;
}

export interface IProgressBar<
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
> extends Omit<IProgressBarStandAlone, 'styles' | 'sizeStyles' | 'progressCompleted'>,
    Omit<CustomTokenTypes<ProgressBarVariantStylesType>, 'extraCt'> {
  variant: V;
  size: S;
  percentProgressCompleted?: number;
}
