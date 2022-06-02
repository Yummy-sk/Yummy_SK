import styled, { keyframes } from 'styled-components';

const photoReveal = keyframes`
    from {
        left: -100%;
    }
    to {
        left: 10%;
    }
`;

const photoHide = keyframes`
    from {
        left: 10%;
    }
    to {
        left: -100%;
    }
`;

const infoReveal = keyframes`
    from {
        left: 200%;
    }
    to {
        left: 60%;
    }
`;

const infoHide = keyframes`
    from {
        left: 60%;
    }
    to {
        left: 200%;
    }
`;

export const Contatiner = styled.section`
  position: relative;
  width: 100%;
  min-height: 480px;

  overflow: hidden;

  display: flex;
  justify-content: space-between;
`;

export const PhotoSection = styled.div`
  position: absolute;

  left: -100%;

  width: 50%;
  height: 480px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.reveal {
    animation: ${photoReveal} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  animation: ${photoHide} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  .img-wrapper {
    width: fit-content;
    height: fit-content;
    border-radius: 15px;
    overflow: hidden;
  }

  p {
    font-size: 6rem;
    color: white;
  }
`;

export const InfoSection = styled.div`
  position: absolute;

  left: 200%;

  width: 50%;
  height: 480px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 500px;

  &.reveal {
    animation: ${infoReveal} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  animation: ${infoHide} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const InfoWrapper = styled.div`
  p {
    color: white;
    line-height: 1.5;

    font-family: 'Roboto', sans-serif;
  }
  p .title {
    font-size: 4rem;
    margin-right: 3rem;
  }
  p .description {
    font-size: 2.5rem;
    font-weight: lighter;
  }
`;

export const LinkWrapper = styled.div`
  a {
    font-size: 2rem;
    color: #8de3ca;
    text-decoration: none;
    cursor: pointer;

    transition: 0.3s ease-in-out all !important;
  }

  a:hover {
    color: #14b885;
    text-decoration: underline;
  }

  a:not(:last-child) {
    margin-right: 1rem;
  }
`;
