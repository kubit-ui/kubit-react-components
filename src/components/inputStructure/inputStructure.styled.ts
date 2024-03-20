import styled, { CSSProp } from 'styled-components';

export const InputStructureContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const VerticalContentStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const HorizontalContentStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  position: relative;
`;

type ContentProps = {
  extraStyles?: CSSProp;
};

export const InputStructureContentLeftStyled = styled.div<ContentProps>`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  ${({ extraStyles }) => extraStyles}
`;

export const InputStructureContentRightStyled = styled.div<ContentProps>`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  ${({ extraStyles }) => extraStyles}
`;

export const InputStructureContentTopStyled = styled.div<ContentProps>`
  ${({ extraStyles }) => extraStyles}
`;

export const InputStructureContentBottomStyled = styled.div<ContentProps>`
  ${({ extraStyles }) => extraStyles}
`;

export const InputStructureWrapperStyled = styled.div<ContentProps>`
  width: 100%;
  ${({ extraStyles }) => extraStyles}
`;
