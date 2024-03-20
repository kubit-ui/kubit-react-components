import { IIcon } from '@/components/icon';
import { CustomTokenTypes } from '@/types';

import { BackToTopStatesStyles } from './backToTopTheme';
import { BackToTopStateType } from './state';

/**
 * @description
 * interface for the action bottom sheet styles
 */
export interface IBackTopButtonStyled {
  styles: BackToTopStatesStyles;
}

type BackToTopAriaAttributes = Pick<React.AriaAttributes, 'aria-label'>;

/**
 * @description
 * interface for the action bottom sheet stand alone
 * @interface ActionBottomSheetProps
 * @template V
 */
export interface IBackToTopStandAlone extends BackToTopAriaAttributes {
  styles: BackToTopStatesStyles;
  state: BackToTopStateType;
  icon?: IIcon;
  dataTestId?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IBackToTopControlled<V = undefined extends string ? unknown : string>
  extends Omit<IBackToTopStandAlone, 'styles' | 'state'>,
    Omit<CustomTokenTypes<BackToTopStatesStyles>, 'cts' | 'extraCt'> {
  variant: V;
  bottomPosition?: number;
  visibilityScrollOffset?: number;
  stopElement?: React.RefObject<HTMLElement>;
}

export type IBackToTopUncontrolled<V = undefined extends string ? unknown : string> = Omit<
  IBackToTopControlled<V>,
  'onClick'
>;
