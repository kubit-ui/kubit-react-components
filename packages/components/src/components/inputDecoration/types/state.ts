export const InputDecorationState = {
  DISABLED_EMPTY: 'DISABLED_EMPTY',
  DISABLED_FILLED: 'DISABLED_FILLED',
  EMPTY: 'EMPTY',
  ERROR_EMPTY: 'ERROR_EMPTY',
  ERROR_FILLED: 'ERROR_FILLED',
  FILLED: 'FILLED',
  FOCUS: 'FOCUS',
} as const;

export type InputDecorationStateType =
  (typeof InputDecorationState)[keyof typeof InputDecorationState];
