import { IText } from '@/components/text';
import { IToggleUnControlled } from '@/components/toggle/types';
import { CustomTokenTypes } from '@/types';

import { ToggleWithLabelStylePropsType } from './toggleWithLabelTheme';

export interface IToggleWithLabelStyled {
  styles?: ToggleWithLabelStylePropsType;
  displayRow?: boolean;
}

export type ToggleLabelType = Omit<IText<string>, 'children'> & {
  content: string;
};

export type ToggleRequiredSymbolType = Omit<IText<string>, 'children'> & {
  content?: JSX.Element;
};

type propsToOmit = 'variant' | 'aria-describedby' | 'screenReaderId' | 'ctv' | 'cts' | 'extraCt';

export interface IToggleWithLabelStandAlone extends Omit<IToggleUnControlled, propsToOmit> {
  label: ToggleLabelType;
  styles?: ToggleWithLabelStylePropsType;
  requiredSymbol?: ToggleRequiredSymbolType;
  required: boolean;
  name?: string;
  toggleVariant: string;
  displayRow?: boolean;
  textVariant?: string;
  screenReaderText?: string;
}

export interface IToggleWithLabelControlled<V = undefined extends string ? unknown : string>
  extends Omit<IToggleWithLabelStandAlone, 'styles'>,
    Omit<CustomTokenTypes<ToggleWithLabelStylePropsType>, 'cts' | 'extraCt'> {
  variant: V;
}

export type IToggleWithLabel = IToggleWithLabelControlled;
