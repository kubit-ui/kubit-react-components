import * as React from 'react';

import { IElementOrIcon } from '@/components/elementOrIcon';
import { CustomTokenTypes } from '@/types';

import type { PillStateStylesType, PillStylesType, PillVariantStylesType } from './pillTheme';

export interface IPillStyled {
  styles?: PillStateStylesType;
}

type PillAriaAttributes = Pick<
  React.AriaAttributes,
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-checked'
  | 'aria-describedby'
  | 'aria-pressed'
  | 'aria-disabled'
>;

export interface IPillStandAlone extends PillAriaAttributes {
  styles: PillVariantStylesType;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: (value: string) => React.KeyboardEventHandler<HTMLDivElement>;
  dataTestId?: string;
  decorativeIcon?: IElementOrIcon;
  selectedIcon?: IElementOrIcon;
  children: React.ReactNode;
  disabled?: boolean;
  multiSelect?: boolean;
  selected?: boolean;
  onPillChange: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  tabIndex?: number;
  value?: string;
}
export interface IPillControlled
  extends Omit<IPillStandAlone, 'styles' | 'onPillChange'>,
    Omit<CustomTokenTypes<PillStylesType>, 'cts' | 'extraCt'> {
  variant: string;
  size: string;
  initialState?: boolean;
  onPillChange?: (checked: boolean, value: string) => void;
}

export interface IPillUnControlled extends Omit<IPillControlled, 'onKeyDown'> {
  initialState?: boolean;
  focus?: boolean;
}
