import { CSSProp, css, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const ghost = keyframes`
  50% {
    background-color: transparent;
  }
`;

export const buildPrimaryLoader = (primaryColor: string, secondaryColor: string): CSSProp => css`
  border: 5px solid ${primaryColor};
  border-bottom-color: ${secondaryColor};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotate} 1s linear infinite;
`;

export const buildForButtonLoader = (color: string): CSSProp => css`
  width: 0.5rem;
  height: 0.5rem;
  display: flex;
  border-radius: 100%;
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: ${color};
  animation-name: ${ghost};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-delay: 0.4s;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    background-color: ${color};
    position: absolute;
    margin-left: -1rem;
    animation-name: ${ghost};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  &::after {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    background-color: ${color};
    position: absolute;
    margin-left: 1rem;
    animation-name: ${ghost};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-delay: 0.8s;
  }
`;
