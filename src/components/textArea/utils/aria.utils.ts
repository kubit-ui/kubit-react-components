import { TextAreaStateType } from '../types';

export const buildAriaDescribedBy = ({
  helpMessage,
  textAreaHelpTextId,
  errorMessage,
  state,
  textAreaErrorId,
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
  if (errorMessage && state === TextAreaStateType.ERROR) {
    res += ` ${textAreaErrorId}`;
  }
  return res;
};
