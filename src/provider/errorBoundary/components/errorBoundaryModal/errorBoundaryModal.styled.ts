import styled from 'styled-components';

export const OverlayStyled = styled.div`
  background-color: #d9d9d9;
  opacity: 0.7;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 700;
`;

export const ModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 80vh;
  min-height: 15rem;
  max-width: 90vw;
  width: 37.5rem;
  word-break: break-word;
  padding: 1.25rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  gap: 1rem;
  z-index: 800;
`;

export const CloseButtonContainerStyled = styled.div`
  display: flex;
  justify-content: end;
`;

export const CloseButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TitleStyled = styled.h2`
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-family: sans-serif;
  color: #1a1a1a;
  font-weight: 600;
  text-align: center;
`;

export const DescriptionStyled = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: sans-serif;
  color: #000;
  flex-grow: 1;
  overflow-y: auto;
`;

export const FooterStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 0.0625rem solid rgb(209, 209, 209);
  padding-top: 0.75rem;
`;

export const FooterButtonStyled = styled.button`
  color: #000;
  cursor: pointer;

  &:disabled {
    color: #ccc;
    pointer-events: none;
    cursor: default;
  }
`;

export const FooterPageStyled = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: sans-serif;
  color: #000;
`;
