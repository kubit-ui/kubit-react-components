import { CustomTokenTypes } from '@/types';

import { PaginationStyledProps } from './paginationTheme';

export interface IPaginationButtonControl {
  icon?: string | JSX.Element;
  ariaLabel?: string;
  ariaControls?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface IPaginationStandAlone {
  styles: PaginationStyledProps;
  stepsNumber: (string | number)[];
  stepActive: number;
  onStepClick?: (step: number) => React.MouseEventHandler<HTMLButtonElement>;
  paginationLeftButtonControl?: IPaginationButtonControl;
  paginationRightButtonControl?: IPaginationButtonControl;
  leftDisabled: boolean;
  rightDisabled: boolean;
  dataTestId?: string;
}

type OmittedProps = 'styles' | 'stepsNumber' | 'stepActive' | 'leftDisabled' | 'rightDisabled';

export interface IPagination<V = undefined extends string ? unknown : string>
  extends Omit<IPaginationStandAlone, OmittedProps>,
    Omit<CustomTokenTypes<PaginationStyledProps>, 'cts' | 'extraCt'> {
  variant: V;
  currentStep: number;
  maxStepsNumber: number;
  maxCountersNumber?: number;
}
