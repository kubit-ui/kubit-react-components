import styled from 'styled-components';

export const IconsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const IconsDataStyled = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 2.5rem 1rem 1rem;
  gap: 3rem;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(209, 209, 209);
  word-break: break-all;
`;

export const IconsInputStyled = styled.input`
  width: 100%;
  border: 1px solid rgb(0, 0, 0);
  padding: 0.5rem;
  position: sticky;
  top: 10px;
  background-color: rgb(255, 255, 255);
  z-index: 1;
  margin-bottom: 2rem;
`;

export const IconNameStyled = styled.span`
  font-size: 12px;
`;
