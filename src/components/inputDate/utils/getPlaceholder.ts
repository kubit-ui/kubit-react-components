import { InputState, LABEL_TYPE } from '../../input/types/inputTheme';

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
