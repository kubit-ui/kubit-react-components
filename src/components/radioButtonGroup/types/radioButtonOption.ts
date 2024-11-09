import { AriaLiveOptionType } from '@/types/ariaLiveOption/ariaLiveOption';
import { OptionType } from '@/types/option/option';

import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { RadioButtonStateType } from '../components/radioButton/types/state';

export type RadioButtonOptionType = OptionType & {
  description?: JSX.Element | string;
  errorMessage?: string;
  errorIcon?: IElementOrIcon;
  errorAriaLiveType?: AriaLiveOptionType;
  /**
   * @deprecated `state` in `RadioButtonOptionType` is deprecated. Please use `error` or `disabled` instead.
   */
  state?: RadioButtonStateType;
  error?: boolean;
  disabled?: boolean;
  screenReader?: boolean;
};
