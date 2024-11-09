import { InputStylesProps } from '../types/input';
import { InputState, LABEL_TYPE } from '../types/inputTheme';

export const getFontSize = (
  state: InputState,
  type: string,
  component: string,
  styles?: InputStylesProps,
  placeholder?: string
): string | undefined => {
  if (
    styles?.[state]?.label?.type !== LABEL_TYPE.STANDARD &&
    placeholder &&
    state !== InputState.ACTIVE
  ) {
    return styles?.[InputState.ACTIVE]?.[component]?.[type];
  }
  return styles?.[state]?.[component]?.[type];
};
