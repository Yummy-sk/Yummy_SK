import styled, { keyframes } from 'styled-components';

const progressBar = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1rem;
  width: 100%;
`;

export const Progress = styled.div`
  height: 0.1rem;
  position: absolute;
  animation: ${progressBar} 2.5s;
  background-color: #fff;

  &:nth-child(2) {
    animation-delay: 2.5s;
  }
  &:nth-child(3) {
    animation-delay: 5s;
  }
`;
