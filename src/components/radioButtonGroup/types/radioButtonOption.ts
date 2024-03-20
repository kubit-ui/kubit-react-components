import { OptionType } from '@/types/option';

import { RadioButtonStateType } from '../components/radioButton/types';

export type RadioButtonOptionType = OptionType & {
  description?: JSX.Element | string;
  state?: RadioButtonStateType;
  screenReader?: boolean;
};
