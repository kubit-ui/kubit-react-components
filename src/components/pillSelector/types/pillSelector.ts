import React from 'react';

import { IPillUnControlled } from '@/components/pill/types';
import { CustomTokenTypes } from '@/types';

import { PillSelectorStyles } from './pillSelectorTheme';

type PillSelectorAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-labelledby' | 'aria-describedby' | 'aria-disabled'
>;

export type PillType = Pick<
  IPillUnControlled,
  | 'disabled'
  | 'decorativeIcon'
  | 'selectedIcon'
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-checked'
  | 'aria-describedby'
  | 'aria-pressed'
  | 'aria-disabled'
> & {
  value: string | number;
  label: React.ReactNode;
};

type PillSelectedType = number | string;

type Pill = Omit<PillType, 'size'> & { size?: string };

export interface IPillSelectorStandAlone extends PillSelectorAriaAttributes {
  pillVariant: string;
  pillSize?: string;
  pillSelected?: PillSelectedType[];
  pills: Pill[];
  dataTestId?: string;
  styles: PillSelectorStyles;
  onPillChange?: (checked: boolean, value: string) => void;
  multiSelect?: boolean;
  name?: string;
  maxPills?: number;
}

export interface IPillSelectorControlled<V = undefined extends string ? unknown : string>
  extends Omit<IPillSelectorStandAlone, 'styles'>,
    Omit<CustomTokenTypes<PillSelectorStyles>, 'cts' | 'extraCt'> {
  variant: V;
}

export interface IPillSelectorUnControlled<V = undefined extends string ? unknown : string>
  extends Omit<IPillSelectorControlled<V>, 'pillSelected' | 'onPillChange'> {
  defaultSelected?: (string | number)[];
}
