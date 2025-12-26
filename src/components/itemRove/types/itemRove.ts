import { type Dispatch, type SetStateAction } from 'react';

import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

export interface ItemRoveProps extends DataAttributes {
  id?: string;
  children?: React.ReactNode;
  focus?: boolean;
  type?: string;
  index: number;
  setFocus?: Dispatch<SetStateAction<number>>;
  onSelectItem?: () => void;
  asElement: string;
  role?: React.AriaRole;
  onMouseOver?: () => void;
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
  classNames?: string;
  customAttributes?: Record<string, string>;
}
