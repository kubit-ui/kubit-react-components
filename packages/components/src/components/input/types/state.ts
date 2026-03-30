export const InputState = {
  DISABLED_EMPTY: 'DISABLED_EMPTY',
  DISABLED_FILLED: 'DISABLED_FILLED',
  EMPTY: 'EMPTY',
  ERROR_EMPTY: 'ERROR_EMPTY',
  ERROR_FILLED: 'ERROR_FILLED',
  FILLED: 'FILLED',
  FOCUS: 'FOCUS',
} as const;

export type InputStateType = (typeof InputState)[keyof typeof InputState];
