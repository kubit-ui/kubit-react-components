import { IElementOrIcon } from '@/components/elementOrIcon';
import { IText } from '@/components/text';
import { CustomTokenTypes, POSITIONS } from '@/types';

import { ToggleStateStyleType, ToggleStyleType } from './toggleTheme';

/**
 * @name IInputValue
 * @description
 * Interface for the InputValue component
 */
export interface IInputValue {
  rightInputValue?: string;
  centerInputValue?: string;
  leftInputValue?: string;
  rightIconAltText?: string;
  centerIconAltText?: string;
  leftIconAltText?: string;
}

export type ToggleOnAndOffTextType = Omit<IText<string>, 'children'> & {
  content: string;
};

type ToggleAriaAttributes = Pick<React.AriaAttributes, 'aria-describedby'>;

/**
 * @name IToggle
 * @description
 * Interface for the Toggle component
 */
export interface IToggleStandAlone extends ToggleAriaAttributes {
  styles?: ToggleStyleType;
  id?: string;
  offText?: ToggleOnAndOffTextType;
  onText?: ToggleOnAndOffTextType;
  onIcon?: IElementOrIcon;
  offIcon?: IElementOrIcon;
  dataTestId?: string;
  togglePosition: POSITIONS;
  hasThreePositions: boolean;
  inputValues?: IInputValue;
  radioButtonToggleName?: string;
  screenReaderId?: string;
  disabled?: boolean;
  blockCenter?: boolean;
  onClick?: (position: POSITIONS, e: React.MouseEvent<HTMLElement>) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
}

type propsToOmit = 'styles' | 'togglePosition' | 'hasThreePositions' | 'onClick';

/**
 * @name IToggleControlled
 * @description
 * Interface for the Toggle component
 */
export interface IToggleControlled<V = undefined extends string ? unknown : string>
  extends Omit<IToggleStandAlone, propsToOmit>,
    Omit<CustomTokenTypes<ToggleStateStyleType>, 'cts' | 'extraCt'> {
  variant: V;
  togglePosition?: POSITIONS;
  hasThreePositions?: boolean;
  onChange?: (position: POSITIONS) => void;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

/**
 * @name IToggleUnControlled
 * @description
 * Interface for the Toggle component
 * @property {string} variant - The variant of the toggle
 * @property {ToggleStyleType} styles - The styles of the toggle
 */
export interface IToggleUnControlled<V = undefined extends string ? unknown : string>
  extends IToggleControlled<V> {
  defaultTogglePosition?: POSITIONS;
}
