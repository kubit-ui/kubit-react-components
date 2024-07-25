import styled, { css } from 'styled-components';

export const ReplaceContentStyled = styled.div<{
  width?: string;
  height?: string;
  backgroundColor?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '200px'};
  padding: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor || 'rgb(234 240 254)'};
  color: #236df6;
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
