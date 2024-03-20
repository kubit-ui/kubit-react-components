import styled from 'styled-components';

export const Modal = styled.div`
  height: fit-content;
  width: 50vw;
  border-radius: 0.25rem;
  background-color: #f2f5f3;
  border: #000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 4px 6px 10px #808080;
  padding: 1.5rem;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 0.5rem;
`;

export const CloseButton = styled.button`
  color: #ff0000;
  cursor: pointer;
`;

export const HeaderText = styled.h2`
  width: 100%;
  text-align: left;
`;

export const MessageContent = styled.div`
  background-color: #ffc0cb;
  border: 0.12rem solid #ff0000;
  padding: 1rem;
  border-radius: 0.25rem;
  color: #ff0000;
  margin-bottom: 1rem;
`;

export const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FooterButton = styled.button`
  color: #333;
  cursor: pointer;

  &:disabled {
    color: #ccc;
    pointer-events: none;
    cursor: default;
  }
`;
