import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

import { ROLES } from '@/types';

/**
 * @name IItemRove
 * @description
 * interface for the item rove
 */
export interface IItemRove {
  id?: string;
  children?: React.ReactNode;
  focus?: boolean;
  type?: string;
  index: number;
  setFocus?: Dispatch<SetStateAction<number>>;
  onSelectItem?: () => void;
  asElement: string | React.ElementType;
  role?: ROLES;
  onMouseOver?: () => void;
  dataTestId?: string;
  disabled?: boolean;
  ariaSelected?: boolean;
  ariaControls?: string;
  ariaLabel?: string;
  url?: string;
  disableKeys?: boolean;
  ariaDisabled?: boolean;
  ariaHidden?: boolean;
  preventScrollOnFocus?: boolean;
  checkIsFirstTime?: boolean;
}
