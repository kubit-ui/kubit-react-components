import { IElementOrIcon } from '@/components/elementOrIcon';
import { AriaLiveOptionType } from '@/types';
import { OptionType } from '@/types/option';

import { RadioButtonStateType } from '../components/radioButton/types';

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
