import { CustomTokenTypes } from '@/types/customToken/customToken';
import { POSITIONS } from '@/types/positions/positions';

import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { IText } from '../../text/types/text';
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

type ToggleAriaAttributes = Pick<React.AriaAttributes, 'aria-label' | 'aria-describedby'>;

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
  tabIndex?: number;
  /**
   * @deprecated The seconda param, position will be removed in the next version
   */
  onClick?: (e: React.MouseEvent<HTMLElement>, position: POSITIONS) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
}

type propsToOmit = 'styles' | 'togglePosition' | 'hasThreePositions';

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
