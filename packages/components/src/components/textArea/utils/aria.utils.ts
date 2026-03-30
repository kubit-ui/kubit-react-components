import { STATES } from '@/lib/types/states/states';

import type { TextAreaStateType } from '../types/state';

export const buildAriaDescribedBy = ({
  errorMessage,
  helpMessage,
  state,
  textAreaErrorId,
  textAreaHelpTextId,
}: {
  helpMessage?: string;
  textAreaHelpTextId: string;
  errorMessage?: string;
  state: TextAreaStateType;
  textAreaErrorId: string;
}): string => {
  let res = '';
  if (helpMessage) {
    res += ` ${textAreaHelpTextId}`;
  }
  if (errorMessage && state === STATES.ERROR) {
    res += ` ${textAreaErrorId}`;
  }
  return res;
};
