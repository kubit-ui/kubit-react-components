import { ReactNode } from 'react';

import { IElementOrIcon } from '@/components/elementOrIcon';
import { IOption, OptionSublabelType } from '@/components/option';
import { IText } from '@/components/text';
import { UseRoveFocusProps } from '@/hooks/useRoveFocus/useRoveFocus';
import { CustomTokenTypes } from '@/types';

import { ListOptionsPropsStylesType } from './listOptionsTheme';
import { ListOptionsType } from './type';

export type ListOptionsTitleType = Omit<IText<string>, 'children'> & {
  content?: ReactNode;
};

export type ListOptionsOptionType = Omit<IOption<string>, 'children' | 'variant'> & {
  variant?: string;
  highlighted?: boolean;
  value?: string | number;
  sublabel?: OptionSublabelType;
};

export type OptionsContainerAriasType = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-labelledby'
>;

export interface IListOptionsStandAlone {
  optionVariant: string;
  hightlightedOptionVariant?: string;
  styles: ListOptionsPropsStylesType;
  type?: ListOptionsType;
  optionsContainerArias?: OptionsContainerAriasType;
  options: ListOptionsOptionType[];
  caseSensitive?: boolean;
  charsHighlighted?: string;
  selectedValue?: string | number | string[] | number[] | null;
  title?: ListOptionsTitleType;
  content?: React.ReactNode;
  onOptionClick?: (
    value,
    event: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => void;
  multiSelect?: boolean;
  checkedIcon?: IElementOrIcon;
  id?: string;
  dataTestId?: string;
  roveFocus?: UseRoveFocusProps;
}

export interface IListOptions<V = undefined extends string ? unknown : string>
  extends Omit<IListOptionsStandAlone, 'styles'>,
    Omit<CustomTokenTypes<ListOptionsPropsStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}
