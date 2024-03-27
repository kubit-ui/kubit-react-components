import styled from 'styled-components';

export const IconsStyled = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const IconsDataStyled = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  width: calc(100% / 5);
`;

export const IconsInputStyled = styled.input`
  border: 1px solid rgba(153, 153, 153, 0.4);
  height: 50px;
  width: 100%;
  border-radius: 28px;
  padding: 0 28px;
  margin-bottom: 50px;
`;

export const IconNameStyled = styled.span`
  font-size: 14px;
`;
