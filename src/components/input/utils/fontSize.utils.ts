import { InputState, InputStylesProps, LABEL_TYPE } from '@/components/input/types';

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
