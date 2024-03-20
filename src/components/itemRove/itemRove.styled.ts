import styled from 'styled-components';

export const ItemRoveStyled = styled.div.withConfig({
  shouldForwardProp: () => true,
})`
  &[aria-disabled='true'] {
    pointer-events: none;
  }
`;
