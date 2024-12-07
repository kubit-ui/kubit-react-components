import { CustomTokenTypes } from '@/types/customToken/customToken';
import { POSITIONS } from '@/types/positions/positions';

import { IText } from '../../text/types/text';
import { IToggleControlled } from '../../toggle/types/toggle';
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

export interface IToggleWithLabelStandAlone extends Omit<IToggleControlled, propsToOmit> {
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
  onFieldSetClick?: (event: React.MouseEvent<HTMLFieldSetElement>) => void;
}

type propsToOmitStandAlone = 'styles';

export interface IToggleWithLabelControlled<V = undefined extends string ? unknown : string>
  extends Omit<IToggleWithLabelStandAlone, propsToOmitStandAlone>,
    Omit<CustomTokenTypes<ToggleWithLabelStylePropsType>, 'cts' | 'extraCt'> {
  variant: V;
}

export interface IToggleWithLabel<V = undefined extends string ? unknown : string>
  extends IToggleWithLabelControlled<V> {
  defaultTogglePosition?: POSITIONS;
}
