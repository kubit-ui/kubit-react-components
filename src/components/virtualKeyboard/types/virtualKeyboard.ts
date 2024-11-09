import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { IText } from '../../text/types/text';
import { VirtualKeyboardStateType } from './state';
import {
  VirtualKeyboardPropsStylesType,
  VirtualKeyboardStateStylesType,
} from './virtualKeyboardTheme';

export type VirtualKeyboardTextType = Omit<IText<string>, 'children'> & {
  content: string;
};

/**
 * @name IVirtualKeyboard
 * @description
 * Interface for the VirtualKeyboard component
 */
export interface IDigitButton {
  styles?: VirtualKeyboardPropsStylesType;
  id?: string;
  // modifiers
  digit: string;
  // functions
  onClick: (digit: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  // tests
  dataTestId?: string;
}

/**
 * @name IVirtualKeyboard
 * @description
 * Interface for the VirtualKeyboard component
 */
export interface IVirtualKeyboardStandAlone {
  styles: VirtualKeyboardStateStylesType;
  id?: string;
  // modifiers
  state: VirtualKeyboardStateType;
  digits: string[];
  // functions
  onVirtualKeyboardFocus: React.FocusEventHandler<HTMLDivElement>;
  onVirtualKeyboardBlur: React.FocusEventHandler<HTMLDivElement>;
  onDigitButtonClick: (
    digit: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onRemoveButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  // icons
  icon: IElementOrIcon;
  // tests
  dataTestId?: string;
}

type propsToOmit = 'styles' | 'state' | 'onVirtualKeyboardFocus' | 'onVirtualKeyboardBlur';

/**
 * @name IVirtualKeyboard
 * @description
 * Interface for the VirtualKeyboard component
 */
export interface IVirtualKeyboard<V = undefined extends string ? unknown : string>
  extends Omit<IVirtualKeyboardStandAlone, propsToOmit>,
    Omit<CustomTokenTypes<VirtualKeyboardStateStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}
