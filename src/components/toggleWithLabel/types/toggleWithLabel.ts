import { IText } from '@/components/text';
import { IToggleUnControlled } from '@/components/toggle/types';
import { CustomTokenTypes, POSITIONS } from '@/types';

import { ToggleWithLabelStylePropsType } from './toggleWithLabelTheme';

export enum LABEL_POSITION {
  LEFT = POSITIONS.LEFT,
  RIGHT = POSITIONS.RIGHT,
  TOP = POSITIONS.TOP,
}
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
  label?: ToggleLabelType;
  styles?: ToggleWithLabelStylePropsType;
  requiredSymbol?: ToggleRequiredSymbolType;
  required: boolean;
  name?: string;
  toggleVariant: string;
  /**
   * @deprecated `displayRow` will be removed. Use 'labelPosition` instead
   */
  displayRow?: boolean;
  labelPosition?: LABEL_POSITION;
  textVariant?: string;
  screenReaderText?: string;
  toggleRef?: React.ForwardedRef<HTMLInputElement> | undefined | null;
  onClick?: (event: React.MouseEvent<HTMLFieldSetElement>) => void;
}

type propsToOmitStandAlone = 'styles' | 'toggleRef' | 'onClick';

export interface IToggleWithLabelControlled<V = undefined extends string ? unknown : string>
  extends Omit<IToggleWithLabelStandAlone, propsToOmitStandAlone>,
    Omit<CustomTokenTypes<ToggleWithLabelStylePropsType>, 'cts' | 'extraCt'> {
  variant: V;
}

export type IToggleWithLabel = IToggleWithLabelControlled;
