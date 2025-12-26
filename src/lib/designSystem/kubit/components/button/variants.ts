export const ButtonVariantType = {
  ACTION_PRIMARY: 'ACTION_PRIMARY',
  ACTION_SECONDARY: 'ACTION_SECONDARY',
  ACTION_SECONDARY_ALT: 'ACTION_SECONDARY_ALT',
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  SECONDARY_ALT: 'SECONDARY_ALT',
} as const;

export const ButtonSizeType = {
  LARGE: 'LARGE',
  /**
   * @deprecated `MEDIUM` will be removed. Use `LARGE` instead
   */
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
} as const;
