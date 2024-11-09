import { CustomTokenTypes } from '@/types/customToken/customToken';
import { ROLES } from '@/types/role/role';

import { GenericLinkType } from '../../../provider/genericComponents/genericComponents.type';
import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { IText } from '../../text/types/text';
import { IToggleUnControlled } from '../../toggle/types/toggle';
import { OptionPropsStylesType } from './optionTheme';

export type OptionSublabelType = Omit<IText<string>, 'children'> & {
  content?: string;
};

type OptionAriaAttributes = Pick<
  React.AriaAttributes,
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-describedby'
  | 'aria-hidden'
  | 'aria-selected'
  | 'aria-current'
  | 'aria-checked'
>;

/**
 * @description
 * interface for the option
 * @interface IOptionStandAlone
 */
export interface IOptionStandAlone extends OptionAriaAttributes {
  styles: OptionPropsStylesType;
  icon?: IElementOrIcon;
  sublabel?: OptionSublabelType;
  label: string;
  labelCharsHighlighted?: string;
  checkedIcon?: IElementOrIcon;
  multiSelect?: boolean;
  disabled?: boolean;
  selected?: boolean;
  focus?: boolean;
  hover: boolean;
  url?: string;
  onClick?: (event: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => void;
  onMouseEnter: React.MouseEventHandler<HTMLElement>;
  onMouseLeave: React.MouseEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLElement>;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  role?: ROLES;
  componentLink?: GenericLinkType;
  dataTestId?: string;
  tabIndex?: number;
  as?: string | React.ElementType;
  /**
   * @deprecated This property will be removed. Use `extraContent` instead passing the component you want.
   */
  toggle?: IToggleUnControlled;
  extraContent?: React.ReactNode;
}

/**
 * @description
 * interface for the option
 * @interface IOption
 */
export interface IOption<V extends string | unknown>
  extends Omit<
      IOptionStandAlone,
      'styles' | 'componentLink' | 'hover' | 'onMouseEnter' | 'onMouseLeave'
    >,
    Omit<CustomTokenTypes<OptionPropsStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}
