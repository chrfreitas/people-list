import styled, { keyframes } from 'styled-components';

const animateLeft = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`;

const animateRight = keyframes`
  100% {
    opacity: 0.4;
  }

  50% {
    opacity: 1;
  }

  0% {
    opacity: 0.4;
  }
`;

export const LogoLeft = styled.path``;

export const LogoRight = styled.path``;

export const Wrapper = styled.div`
  width: 36px;

  ${LogoLeft} {
    animation: ${animateLeft} 1s infinite;
    fill: var(--colors-irisBlue);
  }

  ${LogoRight} {
    animation: ${animateRight} 1s infinite;
    fill: var(--colors-irisBlue);
  }
`;