import { ICheckboxStandAlone } from '@/components/checkbox/types';
import { CheckboxLabelType } from '@/components/checkbox/types/checkbox';
import { IText } from '@/components/text';
import { CustomTokenTypes } from '@/types';

import { CheckboxWithLabelStatePropsStylesType } from './checkboxWithLabelTheme';
import { CheckboxWithLabelState } from './state';

export type CheckboxWithLabelDescriptionType = Omit<IText<string>, 'children'> & {
  content: string;
};

export interface ICheckboxWithLabelStandAlone<V = undefined extends string ? unknown : string>
  extends Omit<ICheckboxStandAlone, 'styles' | 'state'> {
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  description?: CheckboxWithLabelDescriptionType;
  label: CheckboxLabelType;
  styles?: CheckboxWithLabelStatePropsStylesType;
  variant: V;
  state: CheckboxWithLabelState;
}

export interface ICheckboxWithLabelControlled<V = undefined extends string ? unknown : string>
  extends Omit<ICheckboxWithLabelStandAlone<V>, 'styles' | 'state'>,
    Omit<CustomTokenTypes<CheckboxWithLabelStatePropsStylesType>, 'cts' | 'extraCt'> {
  state?: CheckboxWithLabelState;
}

export interface ICheckboxWithLabelUncontrolled<V = undefined extends string ? unknown : string>
  extends Omit<ICheckboxWithLabelControlled<V>, 'checked'> {
  initialChecked?: boolean;
}
