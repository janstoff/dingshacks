import React from "react";
import styled, { keyframes } from "styled-components";

interface DownButtonProps {
  readonly anchor: string;
}

const moveAnimation = keyframes`
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
`;

const StyledDownButton = styled.a`
  display: block;
  position: absolute;
  bottom: 10rem;
  right: 6rem;
  @media only screen and (max-width: 760px) {
    bottom: 14rem;
    right: 6rem;
  }
  text-transform: uppercase;
  text-decoration: none; /* no underline */
  font-size: 2rem;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    transform: translateY(0.4rem);
  }

  &:active {
    transform: translateY(-0.1rem);
  }

  img {
    height: 4rem;
  }
`;

const StyledChevron = styled.div`
  position: absolute;
  width: 3rem;
  height: 0.3rem;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: ${moveAnimation} 3s ease-out infinite;

  &:first-child {
    animation: ${moveAnimation} 3s ease-out 2s infinite;
  }

  &:nth-child(2) {
    animation: ${moveAnimation} 3s ease-out 2s infinite;
  }

  ::before,
  ::after {
    content: " ";
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: $color-primary-light;
  }

  ::before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  ::after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }
`;

export const DownButton: React.SFC<DownButtonProps> = ({ anchor }) => {
  return (
    <StyledDownButton href={`/#${anchor}`}>
      <StyledChevron></StyledChevron>
      <StyledChevron></StyledChevron>
      <StyledChevron></StyledChevron>
    </StyledDownButton>
  );
};

export default DownButton;
