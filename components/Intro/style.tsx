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

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const Text = styled.h1`
  position: absolute;
  color: #fff;
  font-size: 5rem;
  font-weight: bold;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: ${fadeInOut} 2.5s ease-in-out;

  opacity: 0;

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

// const firstInOut = keyframes`
//   0% {
//     opacity: 1;
//     transform: translateY(calc(-50% + 50px));
//   }
//   30% {
//     opacity: 1;
//     transform: translateY(calc(-50% + 0px));
//   }
//   70% {
//     opacity: 1;
//     transform: translateY(calc(-50% + 0px));
//   }
//   100% {
//     opacity: 0;
//     transform: translateY(calc(-50% - 50px));
//   }
// `;

// const remainInOut = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(calc(-50% + 50px));
//   }
//   30% {
//     opacity: 1;
//     transform: translateY(calc(-50% + 0px));
//   }
//   70% {
//     opacity: 1;
//     transform: translateY(calc(-50% + 0px));
//   }
//   100% {
//     opacity: 0;
//     transform: translateY(calc(-50% - 50px));
//   }

// `;

// export const Container = styled.section<{ height: number }>`
//   width: 100%;
//   height: 5000px;
// `;

// export const Wrapper = styled.div`
//   position: fixed;
//   left: 0;
//   top: 50%;

//   width: 100%;
//   height: fit-content;
//   .text {
//     position: absolute;
//     left: 0;
//     top: 40%;
//     width: 100%;
//     text-align: center;
//     color: #fff;
//     font-size: 120px;
//   }

//   .text.a {
//     font-weight: bold;
//     animation: ${firstInOut} 1s linear forwards paused;
//     animation-delay: calc(var(--progress) * -1s);
//   }
//   .text.b,
//   .text.c {
//     animation: ${remainInOut} 1s linear forwards paused;
//     animation-delay: calc(var(--progress) * -1s);
//   }
//   .text.d {
//     animation: ${remainInOut} 1.5s linear forwards paused;
//     animation-delay: calc(var(--progress) * -1s);
//   }
// `;
