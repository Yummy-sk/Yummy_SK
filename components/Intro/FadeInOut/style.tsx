import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  } 
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0; 
  }
`;

export const Font = styled.p`
  position: absolute;
  color: #fff;
  font-size: 5rem;
  font-weight: bold;
  opacity: 0;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: ${fadeInOut} 2.5s ease-in-out;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 2.5s;
  }
  &:nth-child(3) {
    animation-delay: 5s;
  }
`;
