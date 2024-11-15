import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { IPill } from '../../pillV2/types/pill';
import {
  PillSelectorPropsStylesType,
  PillSelectorVariantPropsStylesType,
} from './pillSelectorTheme';
import { PillSelectorType } from './pillSelectorType';

export type PillSelectorPillType = Pick<
  IPill,
  'variant' | 'size' | 'ctv' | 'disabled' | 'label' | 'value' | 'dataTestId'
> & {
  icon?: IElementOrIcon;
};

export type PillSelectorValueType = string | number | Array<string | number>;

export interface IPillSelectorStandAlone {
  styles?: PillSelectorPropsStylesType;
  pills?: PillSelectorPillType[];
  selectedIcon?: IElementOrIcon;
  type?: PillSelectorType;
  value?: PillSelectorValueType;
  name?: string;
  disabled?: boolean;
  dataTestId?: string;
  onPillChange: React.ChangeEventHandler;
}

export interface IPillSelectorControlled
  extends Omit<IPillSelectorStandAlone, 'styles' | 'onPillChange'>,
    Omit<CustomTokenTypes<PillSelectorVariantPropsStylesType>, 'cts' | 'extraCt'> {
  variant?: string;
  size?: string;
  onChange?: (value: PillSelectorValueType) => void;
}

export interface IPillSelectorUnControlled extends Omit<IPillSelectorControlled, 'value'> {
  defaultValue?: PillSelectorValueType;
}
