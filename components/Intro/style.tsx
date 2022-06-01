import styled, { keyframes } from 'styled-components';

const firstInOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(calc(-50% + 50px));
  }
  30% {
    opacity: 1;
    transform: translateY(calc(-50% + 0px));
  }
  70% {
    opacity: 1;
    transform: translateY(calc(-50% + 0px));
  }
  100% {
    opacity: 0;
    transform: translateY(calc(-50% - 50px));
  }
`;

const remainInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(calc(-50% + 50px));
  }
  30% {
    opacity: 1;
    transform: translateY(calc(-50% + 0px));
  }
  70% {
    opacity: 1;
    transform: translateY(calc(-50% + 0px));
  }
  100% {
    opacity: 0;
    transform: translateY(calc(-50% - 50px));
  }

`;

export const Container = styled.section`
  width: 100%;
  height: 5000px;
`;

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 100vh;

  .text {
    position: absolute;
    left: 0;
    top: 45%;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 120px;
  }

  .text.a {
    animation: ${firstInOut} 1s linear forwards paused;
    animation-delay: calc(var(--progress) * -1s);
  }
  .text.b,
  .text.c,
  .text.d {
    animation: ${remainInOut} 1s linear forwards paused;
    animation-delay: calc(var(--progress) * -1s);
  }
`;