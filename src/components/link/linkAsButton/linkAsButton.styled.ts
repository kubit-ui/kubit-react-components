import styled, { css } from 'styled-components';

import { ButtonSizePropsType, ButtonStateKeyOfType } from '../../button/types/buttonTheme';
import { ButtonStateType } from '../../button/types/state';

// Apply button border radius to the link when focus-visible
export const LinkAsButtonWrapperStyled = styled.div<{
  $fullWidth?: boolean;
  $styles?: ButtonStateKeyOfType;
  $state: ButtonStateType;
  $sizeStyles?: ButtonSizePropsType;
}>`
  display: inline;
  > *:first-child {
    display: ${props => (props.$fullWidth ? 'block' : 'inline-block')};
    ${({ $sizeStyles, $styles, $state }) => {
      if (!$styles?.[$state]) {
        return css``;
      }
      const combinedStyles = { ...$sizeStyles, ...$styles[$state] };
      return css`
        ${combinedStyles.border_radius && `border-radius: ${combinedStyles.border_radius};`}
        ${combinedStyles.border_top_left_radius &&
        `border-top-left-radius: ${combinedStyles.border_top_left_radius};`}
      ${combinedStyles.border_top_right_radius &&
        `border-top-right-radius: ${combinedStyles.border_top_right_radius};`}
      ${combinedStyles.border_bottom_left_radius &&
        `border-bottom-left-radius: ${combinedStyles.border_bottom_left_radius};`}
      ${combinedStyles.border_bottom_right_radius &&
        `border-bottom-right-radius: ${combinedStyles.border_bottom_right_radius};`}
      `;
    }}
  }
`;
