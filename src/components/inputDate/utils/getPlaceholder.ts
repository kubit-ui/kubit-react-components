import { InputState, LABEL_TYPE } from '@/components/input/types';

export const getPlaceholder = (
  placeholder: string,
  state: InputState,
  labelType?: LABEL_TYPE
): string | undefined => {
  if (labelType === LABEL_TYPE.STANDARD) {
    return placeholder;
  }

  return state !== InputState.EMPTY && state !== InputState.DISABLED_EMPTY
    ? placeholder
    : undefined;
};
