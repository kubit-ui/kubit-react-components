import styled, { css } from 'styled-components';

export const ReplaceContentStyled = styled.div<{ width?: string; height?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${({ width }) => width || '300px'};
  height: ${({ height }) => height || '50px'};
  padding: 20px;
  background-color: #d1d1d1;
  color: #000;
  border-radius: 6px;
  ${({
    theme: {
      MEDIA_QUERIES: { onlyMobile },
    },
    width,
  }) => css`
    ${onlyMobile} {
      width: ${width ? width : '100%'};
    }
  `}
`;
