import styled, { css } from 'styled-components';

import { ButtonSizePropsType, ButtonStateKeyOfType, ButtonStateType } from '@/components/button';

// Apply button border radius to the link when focus-visible
export const LinkAsButtonWrapperStyled = styled.div<{
  $styles?: ButtonStateKeyOfType;
  $state: ButtonStateType;
  $sizeStyles?: ButtonSizePropsType;
}>`
  display: inline;
  > *:first-child {
    display: inline-block;
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
