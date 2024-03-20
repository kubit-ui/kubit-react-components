import { CSSProp, css } from 'styled-components';

export const focusVisibleAlt = (): CSSProp => css`
  &:focus-visible {
    ${({ theme: { FOCUS_STYLES_ALT } }) => FOCUS_STYLES_ALT}
  }
`;
